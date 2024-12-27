<script setup lang="ts">
const menuItems = [{ label: 'Inicio' }]
</script>

<template>
  <header>
    <Menubar :model="menuItems">
      <template #start>
        <h1 class="site-title">ABC Comics</h1>
      </template>
    </Menubar>
  </header>
</template>
