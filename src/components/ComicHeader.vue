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
    <Menubar :model="menuItems">
      <template #start>
        <!-- <span class="pi pi-book mr-2" style="font-size: 2rem"></span> -->
        <h1 class="site-title text-primary">ABC Comics</h1>
      </template>
    </Menubar>
  </header>
</template>
