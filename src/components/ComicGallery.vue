<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import PromoSlider from './PromoSlider.vue'
import $axios from '../axios/config'
import type { Genre, Issue, ResponseApi } from '@/axios/types'
import { useQuery } from '@tanstack/vue-query'
import { useIssuesStore } from '@/stores/issues'
import { useRouter } from 'vue-router'

const issuesStore = useIssuesStore()
const router = useRouter()

const viewMode = ref('grid')
const selectedGenre = ref<Genre | null>(issuesStore.genre)
const currentPage = ref(1)
const itemsPerPage = 8

const genres = [
  { name: 'Nombre', code: 'name' },
  { name: 'Fecha de agregación', code: 'date_added' },
  { name: 'Fecha de la portada', code: 'cover_date' },
]

const comics = ref<Issue[]>([])

const getIssues = async (sort?: string) => {
  let url = '/getComics'
  if (sort !== undefined) {
    url += `?sort=${sort}:desc`
  }
  const { data } = await $axios.get<ResponseApi>(`${url}`)
  return data.results
}

const sort = computed(() => selectedGenre.value?.code || undefined)

const paginatedComics = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return comics.value.slice(start, end)
})

const onPageChange = (event: { page: number }) => {
  currentPage.value = event.page + 1
}

const showComicDetails = (comic: number) => {
  router.push(`/detail/${comic}`)
}

const { isFetching, isError, data, isStale } = useQuery({
  queryKey: computed(() => ['getIssues', sort.value]),
  queryFn: () => getIssues(sort.value),
  initialData: () => issuesStore.items,
})

watch(
  () => data.value,
  (issues) => {
    if (issues) {
      comics.value = issues
      issuesStore.setItems(issues)
    }
  },
  { immediate: true },
)

watch(
  () => selectedGenre.value,
  (genre) => {
    issuesStore.setGenre(genre)
  },
  { immediate: true },
)
</script>

<template>
  <div class="comic-container">
    <PromoSlider />

    <div class="controls-comics">
      <Dropdown
        showClear
        v-model="selectedGenre"
        :options="genres"
        optionLabel="name"
        placeholder="Ordenar por"
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

    <div v-if="viewMode === 'grid'" class="comic-grid">
      <Card v-for="comic in paginatedComics" :key="comic.id">
        <template #header>
          <img
            :src="comic.image.medium_url"
            :alt="comic.name || ''"
            style="width: 100%; height: 200px; object-fit: contain"
          />
        </template>
        <template #title>
          <h3 style="margin: 0; font-size: 1.25rem">
            {{ comic.name === null ? 'Sin título' : comic.name }}
          </h3>
        </template>
        <template #subtitle>
          <Tag :value="comic.cover_date" severity="info" />
        </template>
        <template #footer>
          <Button label="Leer más" icon="pi pi-book" @click="showComicDetails(comic.id)" />
        </template>
      </Card>
    </div>

    <div v-if="viewMode === 'list'" class="comic-list">
      <DataView :value="paginatedComics" dataKey="">
        <template #list="slotProps">
          <div class="grid grid-nogutter">
            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
              <div
                class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3"
                :class="{ 'border-top-1 surface-border': index !== 0 }"
              >
                <div class="col relative align-items-center flex gap-2">
                  <img
                    :src="item.image.thumb_url"
                    :alt="item.name || ''"
                    style="object-fit: contain"
                  />
                  <div>
                    <h3>{{ item.name === null ? 'Sin título' : item.name }}</h3>
                    <Tag :value="item.cover_date" severity="info" />
                  </div>
                </div>
                <div
                  class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4"
                >
                  <div class="col"></div>
                  <div class="flex flex-column md:align-items-end gap-5">
                    <Button
                      @click="showComicDetails(item.id)"
                      label="Leer más"
                      icon="pi pi-book"
                      aria-label="Bookmark"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </DataView>
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
