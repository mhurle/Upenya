import { Trainer } from '@/types'

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    expertise: ['Leadership', 'Communication', 'Team Building'],
    rating: 4.8,
    imageUrl: '/avatars/trainer-1.jpg',
    location: 'London, UK',
    price: 150,
    description: 'Experienced corporate trainer specializing in leadership development and team communication.',
  },
  {
    id: '2',
    name: 'Michael Chen',
    expertise: ['Project Management', 'Agile', 'Scrum'],
    rating: 4.9,
    imageUrl: '/avatars/trainer-2.jpg',
    location: 'Manchester, UK',
    price: 175,
    description: 'Certified Project Management trainer with 10+ years of experience in Agile methodologies.',
  },
  {
    id: '3',
    name: 'Emma Williams',
    expertise: ['Public Speaking', 'Executive Presence', 'Presentation Skills'],
    rating: 4.7,
    imageUrl: '/avatars/trainer-3.jpg',
    location: 'Birmingham, UK',
    price: 165,
    description: 'Professional speaker and coach helping executives master public speaking and presentation.',
  },
] 