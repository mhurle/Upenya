import { Trainer } from '@/types'
import TrainerCard from '../TrainerCard'

interface SearchResultsProps {
  trainers: Trainer[]
  onTrainerSelect: (trainer: Trainer) => void
}

export default function SearchResults({ trainers, onTrainerSelect }: SearchResultsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {trainers.map((trainer) => (
        <div key={trainer.id} onClick={() => onTrainerSelect(trainer)}>
          <TrainerCard trainer={trainer} />
        </div>
      ))}
    </div>
  )
} 