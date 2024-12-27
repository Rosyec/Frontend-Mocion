<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const menuItems = [
  {
    label: 'Inicio',
    command: () => router.push('/'),
  },
]
</script>

<template>
  <header>
    <Menubar class="fixed z-5" style="width: 100%" :model="menuItems">
      <template #start>
        <h1 class="site-title text-primary">ABC Comics</h1>
      </template>
    </Menubar>
  </header>
</template>
