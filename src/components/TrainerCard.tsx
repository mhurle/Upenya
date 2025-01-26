'use client'

import { useState } from 'react'
import { Trainer } from '@/types'
import Image from 'next/image'

interface TrainerCardProps {
  trainer: Trainer
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-navy-light rounded-xl shadow-lg overflow-hidden border border-grey/20 hover:border-turquoise transition-colors">
      <div className="relative h-48 bg-grey/10">
        {!imageError ? (
          <Image
            src={trainer.imageUrl}
            alt={trainer.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-grey">
            <span className="text-4xl">👤</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-medium text-gold">{trainer.name}</h3>
          <div className="flex items-center bg-navy px-3 py-1 rounded-full">
            <span className="text-gold">★</span>
            <span className="ml-1 text-turquoise">{trainer.rating}</span>
          </div>
        </div>
        <p className="text-grey text-sm mb-3">{trainer.location}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {trainer.expertise.map((skill) => (
            <span
              key={skill}
              className="bg-turquoise/10 text-turquoise text-xs px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-white/80 text-sm mb-6 line-clamp-2">{trainer.description}</p>
        <div className="flex justify-between items-center pt-4 border-t border-grey/20">
          <span className="text-gold font-medium">£{trainer.price}/hour</span>
          <button className="bg-gold text-navy px-6 py-2 rounded-full hover:bg-turquoise hover:text-white transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
} 