import { defineStore } from 'pinia'
import type { Genre, Issue } from '@/axios/types'

export const useIssuesStore = defineStore('issues', {
  state: (): IssuesState => ({
    items: [],
    genre: null,
  }),
  actions: {
    setItems(newItems: Issue[]) {
      this.items = newItems
    },
    setGenre(newGenre: Genre | null) {
      this.genre = newGenre
    },
  },
  persist: true,
})

interface IssuesState {
  items: Issue[]
  genre: Genre | null
}
