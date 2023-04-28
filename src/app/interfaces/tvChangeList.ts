export interface ItvChangeList {
  results: ItvChangeListResult[]
  page: number
  total_pages: number
  total_results: number
}

export interface ItvChangeListResult {
  id: number
  adult?: boolean
}
