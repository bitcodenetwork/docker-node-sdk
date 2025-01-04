export type GetContainerChangesResponse = GetContainerChange[]

export interface GetContainerChange {
  Path: string
  Kind: number
}
