export interface ImagesPruneResponse {
  ImagesDeleted: ImagesDeleted[]
  SpaceReclaimed: number
}

export interface ImagesDeleted {
  Untagged: string
  Deleted: string
}
