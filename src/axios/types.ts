export interface ResponseApi {
  error: string
  limit: number
  offset: number
  number_of_page_results: number
  number_of_total_results: number
  status_code: number
  results: Issue[]
  version: string
}
export interface ResponseApiById {
  error: string
  limit: number
  offset: number
  number_of_page_results: number
  number_of_total_results: number
  status_code: number
  results: Issue
  version: string
}

export interface Issue {
  aliases: null
  api_detail_url: string
  cover_date: Date
  date_added: Date
  date_last_updated: Date
  deck: null
  description: null | string
  has_staff_review: boolean
  id: number
  image: Image
  associated_images: AssociatedImage[]
  issue_number: string
  name: null | string
  site_detail_url: string
  store_date: Date | null
  volume: Volume
}

export interface AssociatedImage {
  original_url: string
  id: number
  caption: null
  image_tags: ImageTags
}

export enum ImageTags {
  AllImages = 'All Images',
}

export interface Image {
  icon_url: string
  medium_url: string
  screen_url: string
  screen_large_url: string
  small_url: string
  super_url: string
  thumb_url: string
  tiny_url: string
  original_url: string
  image_tags: ImageTags
}

export interface Volume {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}

export interface Genre {
  name: string
  code: string
}
