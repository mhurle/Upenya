import { trainers } from '@/data/trainers'
import TrainerCard from './TrainerCard'

export default function TrainerList() {
  return (
    <section className="bg-navy py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-gold">Featured Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="h-full">
              <TrainerCard trainer={trainer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 