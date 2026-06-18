<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const experiences = [
  {
    period: '2023 - Present',
    company: 'PT Komunitas Ide Sejahtera',
    position: 'Full Stack Developer',
    description: 'Developing enterprise web applications, internal business process platforms, and custom learning management solutions. Leading technical implementation and system architecture decisions.',
    achievements: [
      'Architected and built enterprise-grade project management systems',
      'Developed custom LMS solutions with advanced analytics dashboards',
      'Implemented automated business process workflows',
    ],
  },
  {
    period: 'October 2017 - December 2017',
    company: 'PT Kisel',
    position: 'Web Developer (Internship)',
    description: 'Build the guest book and book meeting room web application using PHP Native and MySQL database.',
    achievements: [
      'Build the guest book and book meeting room web application using PHP Native and MySQL database.',
    ],
  }
]
</script>

<template>
  <section id="experience" class="relative py-24 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 reveal">
        <span class="text-accent text-sm font-semibold tracking-widest uppercase">Career</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
          Work <span class="text-gradient">Experience</span>
        </h2>
        <p class="text-muted mt-4 max-w-2xl mx-auto">
          My professional journey in software development.
        </p>
      </div>

      <div class="relative max-w-3xl mx-auto">
        <div class="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent-secondary/30 to-transparent"></div>

        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="relative pl-12 md:pl-16 pb-12 last:pb-0 reveal"
          :style="{ transitionDelay: (index * 150) + 'ms' }"
        >
          <div class="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full border-2 border-accent bg-dark-900 z-10"
            :style="{ animationDelay: (index * 200) + 'ms' }"
          ></div>

          <div class="glass rounded-xl p-6 md:p-8 glass-hover group">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <div>
                <span class="text-xs font-semibold text-accent tracking-wider uppercase">{{ exp.period }}</span>
                <h3 class="text-xl font-bold text-white mt-1">{{ exp.position }}</h3>
              </div>
              <div class="flex items-center gap-2 text-muted">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span class="text-sm font-medium">{{ exp.company }}</span>
              </div>
            </div>

            <p class="text-muted text-sm leading-relaxed mb-4">
              {{ exp.description }}
            </p>

            <ul class="space-y-2">
              <li
                v-for="achievement in exp.achievements"
                :key="achievement"
                class="flex items-start gap-3 text-sm text-muted/80"
              >
                <svg class="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ achievement }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
