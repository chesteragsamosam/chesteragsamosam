import { ref, onMounted, onUnmounted } from 'vue'

export type InteractionType = 'bump' | 'jump'

interface PhysicsOptions {
  targetX: Ref<number>
  targetY: Ref<number>
  repelX?: Ref<number>
  repelY?: Ref<number>
  isPrimary?: boolean
}

export function usePetPhysics({ targetX, targetY, repelX, repelY, isPrimary = false }: PhysicsOptions) {
  const posX = ref(0)
  const posY = ref(0)
  const velX = ref(0)
  const velY = ref(0)

  const scaleX = ref(1)
  const scaleY = ref(1)
  const bob = ref(0)
  const trickRotation = ref(0)
  const trickJump = ref(0)

  const scaleVelX = ref(0)
  const scaleVelY = ref(0)
  const jumpVel = ref(0)
  const rotVel = ref(0)

  const distance = ref(0)
  let animationFrameId: number | null = null

  const STIFFNESS = 0.12
  const DAMPING = 0.85
  const REPULSION_STIFFNESS = 0.2
  const REPULSION_RADIUS = 80
  const INTERACTION_STIFFNESS = 0.2
  const INTERACTION_DAMPING = 0.7

  const HOVER_RADIUS = 30
  let hoverOffsetX = 0
  let hoverOffsetY = 0
  let hoverTime = 0

  function update() {
    const now = performance.now()

    let finalTargetX = targetX.value
    let finalTargetY = targetY.value

    if (isPrimary) {
      const dxToMouse = targetX.value - posX.value
      const dyToMouse = targetY.value - posY.value
      const distToMouse = Math.sqrt(dxToMouse * dxToMouse + dyToMouse * dyToMouse)

      if (distToMouse < 100) {
        hoverTime += 0.02
        hoverOffsetX = Math.sin(hoverTime * 0.7) * HOVER_RADIUS
        hoverOffsetY = Math.cos(hoverTime * 0.9) * HOVER_RADIUS
        finalTargetX += hoverOffsetX
        finalTargetY += hoverOffsetY
      } else {
        hoverOffsetX *= 0.9
        hoverOffsetY *= 0.9
      }
    }

    const dx = finalTargetX - posX.value
    const dy = finalTargetY - posY.value

    let ax = dx * STIFFNESS
    let ay = dy * STIFFNESS

    if (repelX !== undefined && repelY !== undefined) {
      const rx = posX.value - repelX.value
      const ry = posY.value - repelY.value
      const rDist = Math.sqrt(rx * rx + ry * ry)

      if (rDist < REPULSION_RADIUS) {
        const force = (REPULSION_RADIUS - rDist) * REPULSION_STIFFNESS
        const nx = rDist === 0 ? 1 : rx / rDist
        const ny = rDist === 0 ? 0 : ry / rDist
        ax += nx * force
        ay += ny * force
      }
    }

    velX.value = (velX.value + ax) * DAMPING
    velY.value = (velY.value + ay) * DAMPING
    posX.value += velX.value
    posY.value += velY.value

    distance.value = Math.sqrt(dx * dx + dy * dy)

    const bounceFactor = Math.sin(now / 500)
    bob.value = bounceFactor * 6

    const sDx = 1 - scaleX.value
    const sDy = 1 - scaleY.value
    scaleVelX.value = (scaleVelX.value + sDx * INTERACTION_STIFFNESS) * INTERACTION_DAMPING
    scaleVelY.value = (scaleVelY.value + sDy * INTERACTION_STIFFNESS) * INTERACTION_DAMPING
    scaleX.value += scaleVelX.value
    scaleY.value += scaleVelY.value

    const jDx = 0 - trickJump.value
    jumpVel.value = (jumpVel.value + jDx * INTERACTION_STIFFNESS) * INTERACTION_DAMPING
    trickJump.value += jumpVel.value

    const rDx = 0 - trickRotation.value
    rotVel.value = (rotVel.value + rDx * INTERACTION_STIFFNESS) * INTERACTION_DAMPING
    trickRotation.value += rotVel.value

    animationFrameId = requestAnimationFrame(update)
  }

  function triggerInteraction(type: InteractionType) {
    if (type === 'bump') {
      scaleX.value = 1.3
      scaleY.value = 0.7
      scaleVelX.value = 0
      scaleVelY.value = 0
    } else if (type === 'jump') {
      trickJump.value = -100
      jumpVel.value = -10
      trickRotation.value = 360
      rotVel.value = 0
      scaleX.value = 1.2
      scaleY.value = 0.8
    }
  }

  onMounted(() => {
    posX.value = targetX.value
    posY.value = targetY.value
    update()
  })

  onUnmounted(() => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId)
  })

  return {
    posX,
    posY,
    scaleX,
    scaleY,
    bob,
    trickRotation,
    trickJump,
    distance,
    triggerInteraction
  }
}

type Ref<T> = import('vue').Ref<T>
