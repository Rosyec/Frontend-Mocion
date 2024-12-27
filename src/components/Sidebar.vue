<script setup lang="ts">
import Button from 'primevue/button'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'pi pi-linkedin',
    color: 'var(--primary-color)',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'pi pi-github',
    color: 'var(--primary-color)',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'pi pi-twitter',
    color: 'var(--primary-color)',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'pi pi-instagram',
    color: 'var(--primary-color)',
  },
]
</script>

<template>
  <div class="social-sidebar">
    <Button
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      :pt="{
        root: { style: { color: link.color } },
      }"
      link
      class="social-link p-button-rounded"
      :title="link.name"
    >
      <i :class="[link.icon, 'social-icon']"></i>
      <span class="name">{{ link.name }}</span>
    </Button>
  </div>
</template>

<style scoped>
.social-sidebar {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 0 1rem 1rem 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  border: 1px solid #f0f0f0;
}

.social-link {
  position: relative;
  transition: all 0.3s ease !important;
  padding: 0.75rem !important;
  background: white !important;
  border: 1px solid #f0f0f0 !important;
}

.social-link:hover {
  transform: translateX(5px);
  background: #fafafa !important;
}

.social-icon {
  font-size: 1.5rem;
}

.name {
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  position: absolute;
  left: 100%;
  white-space: nowrap;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  color: #333;
  border: 1px solid #f0f0f0;
}

.social-link:hover .name {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 768px) {
  .social-sidebar {
    padding: 0.5rem;
  }

  .social-link {
    padding: 0.5rem !important;
  }
}
</style>
