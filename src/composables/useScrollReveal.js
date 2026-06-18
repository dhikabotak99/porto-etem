import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(threshold = 0.1) {
  const observer = ref(null)

  const observe = () => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.value.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.value.observe(el)
    })
  }

  onMounted(() => {
    requestAnimationFrame(() => observe())
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return { observe }
}
