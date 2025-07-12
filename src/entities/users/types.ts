export type User = {
  name: string
  id: string // <-- chatId
  distance: number
  age?: number
  isVerified: boolean,
  height?: number
  matchedAt?: string
  currentCity: string
  currentCountry: string
  createdAt: number
}

export type UsersTableHeader<T> = { label: string; value: keyof T }[]
