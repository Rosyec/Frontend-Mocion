import { defineStore } from 'pinia'
import type { Issue } from '@/axios/types'

export const useIssuesStore = defineStore('issues', {
  state: (): IssuesState => ({
    items: [],
  }),
  actions: {
    setItems(newItems: Issue[]) {
      this.items = newItems
    },
  },
  persist: true,
})

interface IssuesState {
  items: Issue[]
}
