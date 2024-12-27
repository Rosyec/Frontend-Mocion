<script setup lang="ts">
import { RouterView } from 'vue-router'
import ComicHeader from './components/ComicHeader.vue'
import ComicFooter from './components/ComicFooter.vue'
import SocialSidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="app-container">
    <ComicHeader />
    <SocialSidebar />
    <router-view style="margin-top: 7rem"></router-view>
    <ComicFooter />
  </div>
</template>

<style scoped></style>
