<script setup>
import { ref, onMounted } from 'vue'
import { useCountUp } from '../composables/useCountUp'

const counterRef = ref(null)
const { count: projects, startObserving: observeProjects } = useCountUp(10, { duration: 2000 })
const { count: years, startObserving: observeYears } = useCountUp(5, { duration: 2000 })
const { count: clients, startObserving: observeClients } = useCountUp(15, { duration: 2000 })
const { count: techs, startObserving: observeTechs } = useCountUp(10, { duration: 2000 })

onMounted(() => {
  observeProjects(counterRef.value)
  observeYears(counterRef.value)
  observeClients(counterRef.value)
  observeTechs(counterRef.value)
})

const stats = [
  { value: projects, label: 'Projects Completed', suffix: '+' },
  { value: years, label: 'Years Experience', suffix: '+' },
  { value: clients, label: 'Clients Served', suffix: '+' },
  { value: techs, label: 'Technologies Mastered', suffix: '+' },
]
</script>

<template>
  <section ref="counterRef" class="relative py-24 lg:py-32">
    <div class="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent-secondary/5 to-accent/5 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center reveal"
        >
          <div class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-2 tabular-nums">
            {{ stat.value }}<span class="text-accent/60">{{ stat.suffix }}</span>
          </div>
          <p class="text-muted text-sm font-medium">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
