<script setup lang="ts">
import { ImageTags, type Issue, type ResponseApi, type ResponseApiById } from '@/axios/types'
import $axios from '../axios/config'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

const route = useRoute()

onMounted(() => {
  if (route.params.id) {
    const id: number = Number(route.params.id)
    getIssue(id)
  }
})

const comic = ref<Issue>({
  aliases: null,
  api_detail_url: '',
  cover_date: new Date(),
  date_added: new Date(),
  date_last_updated: new Date(),
  deck: null,
  description: null,
  has_staff_review: false,
  id: 0,
  image: {
    icon_url: '',
    medium_url: '',
    screen_url: '',
    screen_large_url: '',
    small_url: '',
    super_url: '',
    thumb_url: '',
    tiny_url: '',
    original_url: '',
    image_tags: ImageTags.AllImages,
  },
  associated_images: [],
  issue_number: '',
  name: null,
  site_detail_url: '',
  store_date: null,
  volume: {
    api_detail_url: '',
    id: 0,
    name: '',
    site_detail_url: '',
  },
})

const getIssue = async (id: number) => {
  const { data } = await $axios.get<ResponseApiById>(`/getComicById?id=${id}`)
  comic.value = data.results
}
</script>
<template>
  <main style="min-height: calc(100vh - 160px); padding: 2rem 0">
    <div class="comic-container">
      <Card>
        <template #header>
          <div class="flex justify-content-center">
            <img :src="comic.image.medium_url" alt="Comic Cover" :preview="true" />
          </div>
        </template>
        <template #title>
          {{ comic.name === null ? 'Sin título' : comic.name }}
        </template>
        <template #content>
          <div class="comic-details">
            <div v-html="comic.description"></div>
            <Divider />
            <div class="info-grid">
              <div class="info-item"><strong>Year added:</strong> {{ comic.date_added }}</div>
              <div class="info-item"><strong>Volume:</strong> {{ comic.volume.name }}/5</div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </main>
</template>
<style scoped>
.comic-container {
  max-width: 500px;
  margin: 0rem auto;
  padding: 0 1rem;
}

.comic-details {
  padding: 1rem 0;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.info-item {
  padding: 0.5rem;
  background-color: #f8f9fa;
  border-radius: 4px;
}
img {
  object-fit: contain;
  width: 100%;
}
</style>
