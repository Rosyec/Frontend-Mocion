<script setup lang="ts">
import { ref } from 'vue'

const promos = [
  {
    id: 1,
    image: 'slider1.png',
    title: 'Nuevos Lanzamientos',
  },
  {
    id: 2,
    image: 'slider2.png',
    title: 'Colección Especial',
  },
  {
    id: 3,
    image: 'slider3.png',
    title: 'Edición Limitada',
  },
]
</script>

<template>
  <div class="promo-slider">
    <Carousel
      :value="promos"
      :numVisible="1"
      :numScroll="1"
      :autoplayInterval="5000"
      :circular="true"
    >
      <template #item="slotProps">
        <div class="promo-item">
          <img :src="slotProps.data.image" :alt="slotProps.data.title" class="promo-image" />
        </div>
      </template>
    </Carousel>
  </div>
</template>
