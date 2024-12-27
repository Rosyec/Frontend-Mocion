<script setup lang="ts">
import { ref, computed } from 'vue'
import PromoSlider from './PromoSlider.vue'

const viewMode = ref('grid')
const selectedGenre = ref(null)
const currentPage = ref(1)
const itemsPerPage = 8
const dialogVisible = ref(false)
const selectedComic = ref(null)

const genres = [
  { name: 'Characteres', code: 'characteres' },
  { name: 'Issues', code: 'issues' },
  { name: 'Series', code: 'series' },
  { name: 'Creators', code: 'creators' },
]

const comics = [
  {
    id: 1,
    title: 'Cosmic Adventures',
    genre: 'Ciencia Ficción',
    cover: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?w=300',
    description: 'Una aventura épica a través del espacio.',
  },
]

const totalPages = computed(() => Math.ceil(comics.length / itemsPerPage))

const paginatedComics = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return comics.slice(start, end)
})

const onPageChange = (event: { page: number }) => {
  currentPage.value = event.page + 1
}

const showComicDetails = (comic: any) => {
  selectedComic.value = comic
  dialogVisible.value = true
}
</script>

<template>
  <div class="comic-container">
    <PromoSlider />

    <div class="controls-comics">
      <Dropdown
        v-model="selectedGenre"
        :options="genres"
        optionLabel="name"
        placeholder="Seleccionar por"
        class="w-full md:w-14rem"
      />
      <div class="view-toggle">
        <Button
          icon="pi pi-th-large"
          :class="{ 'p-button-outlined': viewMode !== 'grid' }"
          @click="viewMode = 'grid'"
          style="margin-right: 0.5rem"
        />
        <Button
          icon="pi pi-list"
          :class="{ 'p-button-outlined': viewMode !== 'list' }"
          @click="viewMode = 'list'"
        />
      </div>
    </div>

    <div :class="viewMode === 'grid' ? 'comic-grid' : 'comic-list'">
      <Card v-for="comic in paginatedComics" :key="comic.id">
        <template #header>
          <img
            v-if="viewMode === 'grid'"
            :src="comic.cover"
            :alt="comic.title"
            style="width: 100%; height: 200px; object-fit: cover"
          />
        </template>
        <template #title>
          <h3 style="margin: 0; font-size: 1.25rem">{{ comic.title }}</h3>
        </template>
        <template #subtitle>
          <Tag :value="comic.genre" severity="info" />
        </template>
        <template #content>
          <p style="flex-grow: 1; margin: 1rem 0">{{ comic.description }}</p>
        </template>
        <template #footer>
          <Button label="Leer más" icon="pi pi-book" @click="showComicDetails(comic)" />
        </template>
      </Card>
    </div>

    <div class="pagination-container">
      <Paginator
        :rows="itemsPerPage"
        :totalRecords="comics.length"
        :first="(currentPage - 1) * itemsPerPage"
        @page="onPageChange"
      />
    </div>
  </div>
</template>

<style scoped>
.controls {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--surface-color);
  border-radius: 8px;
  margin: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.comic-container {
  position: relative;
  z-index: 1;
}
</style>
