export interface DeleteUnusedImagesResponse {
  ImagesDeleted: ImagesDeleted[]
  SpaceReclaimed: number
}

export interface ImagesDeleted {
  Untagged: string
  Deleted: string
}
