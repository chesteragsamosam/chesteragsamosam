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

  // --- Stabilized Constants ---
  const STIFFNESS = isPrimary ? 0.04 : 0.02
  const DAMPING = 0.7

  // Repulsion only applies to non-primary pets (the girl)
  const REPULSION_STIFFNESS = 0.08
  const REPULSION_RADIUS = 60

  const INTERACTION_STIFFNESS = 0.08
  const INTERACTION_DAMPING = 0.5

  const HOVER_RADIUS = 20
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
        hoverTime += 0.004
        hoverOffsetX = Math.sin(hoverTime * 0.5) * HOVER_RADIUS
        hoverOffsetY = Math.cos(hoverTime * 0.7) * HOVER_RADIUS
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

    // ONLY APPLY REPULSION TO THE GIRL PET
    // This ensures the primary pet is the "anchor" and never gets pushed
    if (!isPrimary && repelX !== undefined && repelY !== undefined) {
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

    if (Math.abs(scaleX.value - 1) < 0.001 && Math.abs(scaleVelX.value) < 0.001) {
      scaleX.value = 1
      scaleVelX.value = 0
    }
    if (Math.abs(scaleY.value - 1) < 0.001 && Math.abs(scaleVelY.value) < 0.001) {
      scaleY.value = 1
      scaleVelY.value = 0
    }

    const jDx = 0 - trickJump.value
    jumpVel.value = (jumpVel.value + jDx * INTERACTION_STIFFNESS) * INTERACTION_DAMPING
    trickJump.value += jumpVel.value

    if (Math.abs(trickJump.value) < 0.01 && Math.abs(jumpVel.value) < 0.01) {
      trickJump.value = 0
      jumpVel.value = 0
    }

    const rDx = 0 - trickRotation.value
    rotVel.value = (rotVel.value + rDx * INTERACTION_STIFFNESS) * INTERACTION_DAMPING
    trickRotation.value += rotVel.value

    if (Math.abs(trickRotation.value) < 0.1 && Math.abs(rotVel.value) < 0.1) {
      trickRotation.value = 0
      rotVel.value = 0
    }

    animationFrameId = requestAnimationFrame(update)
  }

  function triggerInteraction(type: InteractionType) {
    if (type === 'bump') {
      scaleX.value = 1.3
      scaleY.value = 0.7
      scaleVelX.value = 0
      scaleVelY.value = 0
    } else if (type === 'jump') {
      trickJump.value = -60
      jumpVel.value = -5
      trickRotation.value = 180
      rotVel.value = 0
      scaleX.value = 1.1
      scaleY.value = 0.9
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
