<script setup lang="ts">
import { RouterView } from 'vue-router'
import ComicHeader from './components/ComicHeader.vue'
import ComicFooter from './components/ComicFooter.vue'
</script>

<template>
  <div class="app-container">
    <ComicHeader />
    <router-view></router-view>
    <ComicFooter />
  </div>
</template>

<style scoped></style>
