export interface Trainer {
  id: string
  name: string
  expertise: string[]
  rating: number
  imageUrl: string
  location: string
  price: number
  description: string
  coordinates?: {
    lat: number
    lng: number
  }
} 