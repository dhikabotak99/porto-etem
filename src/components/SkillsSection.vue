<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const skillCategories = [
  {
    title: 'Frontend',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    accent: '#00D4FF',
    skills: ['Vue.JS', 'Nuxt.JS', 'Next.JS','JavaScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`,
    accent: '#7C3AED',
    skills: ['Laravel', 'PHP', 'REST API'],
  },
  {
    title: 'Database',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`,
    accent: '#10B981',
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'DevOps & Tools',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    accent: '#F59E0B',
    skills: ['Git'],
  },
  {
    title: 'Learning Management Systems',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" opacity="0"/></svg>`,
    accent: '#EC4899',
    skills: ['Custom LMS', 'Learning Analytics'],
  },
]
</script>

<template>
  <section id="skills" class="relative py-24 lg:py-32">
    <div class="absolute inset-0 bg-gradient-to-b from-accent-secondary/5 via-transparent to-transparent pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center mb-16 reveal">
        <span class="text-accent text-sm font-semibold tracking-widest uppercase">Expertise</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
          Skills & <span class="text-gradient">Technologies</span>
        </h2>
        <p class="text-muted mt-4 max-w-2xl mx-auto">
          Technologies I work with on a daily basis to build modern, scalable applications.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(category, index) in skillCategories"
          :key="category.title"
          class="glass rounded-xl p-6 reveal group hover:translate-y-[-4px] transition-all duration-500"
          :style="{ transitionDelay: (index * 100) + 'ms' }"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
            :style="{ backgroundColor: category.accent + '15', color: category.accent }"
            v-html="category.icon"
          ></div>

          <h3 class="text-lg font-semibold text-white mb-1">{{ category.title }}</h3>
          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300"
              :style="{
                backgroundColor: category.accent + '10',
                color: category.accent,
                borderColor: category.accent + '20',
              }"
            >
              {{ skill }}
            </span>
          </div>

          <div class="mt-5 pt-4 border-t border-white/5">
            <div class="flex items-center gap-2">
              <div class="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  class="h-full rounded-full transition-all duration-1000 group-hover:w-full"
                  :style="{
                    width: '0%',
                    backgroundColor: category.accent,
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover .group-hover\:w-full {
  width: 100% !important;
}
</style>
