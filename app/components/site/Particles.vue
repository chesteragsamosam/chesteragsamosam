<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationFrameId: number | null = null
let particles: Particle[] = []
let mouse = { x: -1000, y: -1000 }
let scrollOffset = 0
let lastScrollY = 0

class Particle {
  x: number = 0
  y: number = 0
  vx: number = 0
  vy: number = 0
  size: number = 0

  constructor(w: number, h: number) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.size = Math.random() * 1.5 + 0.5
  }

  update(w: number, h: number, scrollDelta: number) {
    this.x += this.vx
    this.y += this.vy + (scrollDelta * 0.1) // Subtle shift on scroll

    // Mouse interaction: gentle repel
    const dx = this.x - mouse.x
    const dy = this.y - mouse.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 150) {
      const force = (150 - dist) / 150
      this.x += dx * force * 0.02
      this.y += dy * force * 0.02
    }

    if (this.x < 0 || this.x > w) this.vx *= -1
    if (this.y < 0 || this.y > h) this.vy *= -1
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

function init() {
  if (!canvasRef.value) return
  const canvas = canvasRef.value
  ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return

  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })
  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY
  }, { passive: true })
}

function resize() {
  if (!canvasRef.value || !ctx) return
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight

  particles = []
  const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 20000))
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(window.innerWidth, window.innerHeight))
  }
}

function animate() {
  if (!ctx || !canvasRef.value) return
  const { width, height } = canvasRef.value

  // Calculate scroll delta and decay it
  const currentScroll = window.scrollY
  const delta = currentScroll - lastScrollY
  lastScrollY = currentScroll

  ctx.clearRect(0, 0, width, height)

  ctx.fillStyle = 'rgba(139, 155, 179, 0.3)'
  ctx.strokeStyle = 'rgba(139, 155, 179, 0.1)'

  for (let i = 0; i < particles.length; i++) {
    const p1 = particles[i]
    p1.update(width, height, delta)
    p1.draw(ctx)

    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j]
      const dx = p1.x - p2.x
      const dy = p1.y - p2.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 120) {
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
      }
    }
  }

  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  init()
  animate()
})

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="fixed inset-0 -z-10 pointer-events-none"
    aria-hidden="true"
  />
</template>
