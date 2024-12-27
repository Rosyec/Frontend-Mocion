<script setup lang="ts">
const menuItems = [
  { label: 'Inicio', icon: 'pi pi-home' },
  { label: 'Géneros', icon: 'pi pi-book' },
  { label: 'Colecciones', icon: 'pi pi-folder' },
  { label: 'Novedades', icon: 'pi pi-star' },
]
</script>

<template>
  <header>
    <Menubar :model="menuItems">
      <template #start>
        <h1 class="site-title">ComicVerse</h1>
      </template>
    </Menubar>
  </header>
</template>
