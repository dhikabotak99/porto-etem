<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const highlights = [
  {
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    label: 'Enterprise Web Apps',
    desc: 'Built and deployed scalable enterprise applications serving thousands of users.',
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
    label: 'Learning Platforms',
    desc: 'Developed custom LMS solutions and Moodle-based learning ecosystems.',
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    label: 'Secure Systems',
    desc: 'Implemented liveness verification and secure authentication systems.',
  },
  {
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    label: 'Process Automation',
    desc: 'Streamlined business processes with custom internal platform solutions.',
  },
]
</script>

<template>
  <section id="about" class="relative py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div class="reveal">
          <span class="text-accent text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
            Transforming ideas into
            <span class="text-gradient">digital solutions</span>
          </h2>
          <p class="text-muted text-base lg:text-lg leading-relaxed mb-8">
            I am a Full Stack Developer with experience building enterprise web applications,
            educational platforms, and business process systems using Laravel, Vue.js, PHP, MySQL,
            PostgreSQL, and REST APIs. I enjoy transforming complex requirements into intuitive
            and efficient digital solutions.
          </p>
          <div class="flex flex-wrap gap-6">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-bold text-lg">5+</div>
              <div>
                <p class="text-white font-semibold">Years Experience</p>
                <p class="text-muted text-sm">In Full Stack Development</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary font-bold text-lg">10+</div>
              <div>
                <p class="text-white font-semibold">Projects Delivered</p>
                <p class="text-muted text-sm">From concept to deployment</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal" style="transition-delay: 200ms">
          <div
            v-for="(item, index) in highlights"
            :key="index"
            class="glass glass-hover rounded-xl p-6 group"
            :style="{ transitionDelay: (index * 100) + 'ms' }"
          >
            <div class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-dark-900 transition-all duration-300" v-html="item.icon"></div>
            <h3 class="text-white font-semibold mb-2">{{ item.label }}</h3>
            <p class="text-muted text-sm leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
