<script setup lang="ts">
import ComicHeader from '../components/ComicHeader.vue'
import ComicGallery from '../components/ComicGallery.vue'
import ComicFooter from '../components/ComicFooter.vue'
</script>

<template>
  <div class="app-container">
    <ComicHeader />
    <main style="min-height: calc(100vh - 160px); padding: 2rem 0">
      <ComicGallery />
    </main>
    <ComicFooter />
  </div>
</template>
