export interface ThemeResponse {
  id: string
  title: string
  targetUrl?: string | number
  items?: ThemeResponse[]
}
