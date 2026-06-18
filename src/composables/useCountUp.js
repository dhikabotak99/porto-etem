import { ref, onMounted, onUnmounted } from 'vue'

export function useCountUp(target, options = {}) {
  const { duration = 2000, start = 0 } = options
  const count = ref(start)
  const hasAnimated = ref(false)
  let observer = null
  let animationId = null

  const animate = () => {
    const startTime = performance.now()
    const end = typeof target === 'function' ? target() : target

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      count.value = Math.floor(start + (end - start) * eased)

      if (progress < 1) {
        animationId = requestAnimationFrame(tick)
      } else {
        count.value = end
      }
    }

    animationId = requestAnimationFrame(tick)
  }

  const startObserving = (el) => {
    if (!el || hasAnimated.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          hasAnimated.value = true
          animate()
          if (observer) {
            observer.unobserve(el)
          }
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
  }

  onUnmounted(() => {
    if (observer) observer.disconnect()
    if (animationId) cancelAnimationFrame(animationId)
  })

  return { count, startObserving }
}
