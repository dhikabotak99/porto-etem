<script setup>
import { ref, onMounted } from 'vue'

const particles = ref([])

onMounted(() => {
  const items = []
  for (let i = 0; i < 20; i++) {
    items.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
    })
  }
  particles.value = items
})
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-dark-900 pointer-events-none"></div>

    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="p in particles"
        :key="p.id"
        class="absolute rounded-full bg-accent"
        :style="{
          left: p.x + '%',
          top: p.y + '%',
          width: p.size + 'px',
          height: p.size + 'px',
          opacity: p.opacity,
          animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
        }"
      ></div>
    </div>

    <div class="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow"></div>
    <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px] animate-pulse-glow" style="animation-delay: 1.5s"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="800"
      >
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted mb-8">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Available for opportunities
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="800"
        :delay="200"
      >
        <h1 class="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
          <span class="text-white">Hi, I'm</span>
          <br />
          <span class="text-gradient">Andhika Wicaksono</span>
        </h1>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="800"
        :delay="400"
      >
        <p class="text-lg sm:text-xl lg:text-2xl text-muted max-w-3xl mx-auto mb-4 leading-relaxed">
          Full Stack Developer
        </p>
        <p class="text-base sm:text-lg text-muted/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building scalable web applications, learning platforms, and enterprise solutions.
        </p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 80 }"
        :visible="{ opacity: 1, y: 40 }"
        :duration="800"
        :delay="600"
        class="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#projects"
          class="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent text-dark-900 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
        >
          <span class="relative z-10">View Projects</span>
          <svg class="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </a>
        <a
          href="#contact"
          class="group inline-flex items-center gap-2 px-8 py-4 glass glass-hover text-white font-semibold rounded-xl transition-all duration-300"
        >
          Contact Me
          <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }"
        :duration="1000"
        :delay="1000"
        class="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" class="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors duration-300">
          <span class="text-xs tracking-widest uppercase">Scroll</span>
          <div class="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div class="w-1 h-2 rounded-full bg-current animate-bounce"></div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
