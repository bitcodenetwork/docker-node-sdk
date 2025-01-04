export type SearchImageResponse = SearchImage[]

export interface SearchImage {
  description: string
  is_official: boolean
  is_automated: boolean
  name: string
  star_count: number
}
