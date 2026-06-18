<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollTo = (href) => {
  isMenuOpen.value = false
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <a
          href="#hero"
          @click.prevent="scrollTo('#hero')"
          class="text-xl font-bold tracking-tight"
        >
          <span class="text-gradient">AW</span>
          <span class="text-white/60 ml-1">.</span>
        </a>

        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="text-sm font-medium text-muted hover:text-accent transition-colors duration-300 relative group"
          >
            {{ link.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden relative w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div class="w-5 h-4 relative flex flex-col justify-between">
            <span
              class="block h-0.5 w-full bg-white transition-all duration-300 origin-center"
              :class="isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''"
            ></span>
            <span
              class="block h-0.5 w-full bg-white transition-all duration-300"
              :class="isMenuOpen ? 'opacity-0 scale-x-0' : ''"
            ></span>
            <span
              class="block h-0.5 w-full bg-white transition-all duration-300 origin-center"
              :class="isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="isMenuOpen" class="md:hidden border-t border-white/10 bg-dark-900/95 backdrop-blur-xl overflow-hidden">
        <div class="px-4 py-4 space-y-2">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="block px-4 py-3 text-sm font-medium text-muted hover:text-accent hover:bg-white/5 rounded-lg transition-all duration-300"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>
