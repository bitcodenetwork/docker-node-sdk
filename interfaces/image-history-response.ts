export type ImageHistoryResponse = ImageHistory[]

export interface ImageHistory {
  Id: string
  Created: number
  CreatedBy: string
  Tags: string[]
  Size: number
  Comment: string
}
