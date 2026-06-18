<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import FeaturedProjects from './components/FeaturedProjects.vue'
import StatisticsSection from './components/StatisticsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-dark-900 text-white">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceTimeline />
      <FeaturedProjects />
      <StatisticsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>
