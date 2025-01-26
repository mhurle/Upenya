'use client'

import { useState } from 'react'

export default function SearchFilters() {
  const [priceRange, setPriceRange] = useState(500)
  const [rating, setRating] = useState(4)
  const [expertise, setExpertise] = useState<string[]>([])

  const expertiseOptions = [
    'Leadership',
    'Communication',
    'Project Management',
    'Agile',
    'Public Speaking'
  ]

  return (
    <div className="bg-navy-light rounded-xl p-6 border border-grey/20">
      <h2 className="text-xl font-medium text-gold mb-8">Filters</h2>
      
      {/* Price Range */}
      <div className="mb-8">
        <h3 className="text-white mb-4">Price Range</h3>
        <input
          type="range"
          min="0"
          max="500"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-turquoise mb-2"
        />
        <div className="flex justify-between text-grey text-sm">
          <span>£0</span>
          <span>£{priceRange}</span>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-8">
        <h3 className="text-white mb-4">Minimum Rating</h3>
        <div className="space-y-3">
          {[4, 3, 2, 1].map((value) => (
            <label key={value} className="flex items-center text-grey cursor-pointer group">
              <input
                type="radio"
                name="rating"
                value={value}
                checked={rating === value}
                onChange={(e) => setRating(Number(e.target.value))}
                className="mr-3 accent-turquoise"
              />
              <span className="group-hover:text-turquoise transition-colors">
                {value}+ Stars
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Expertise */}
      <div className="mb-8">
        <h3 className="text-white mb-4">Expertise</h3>
        <div className="space-y-3">
          {expertiseOptions.map((skill) => (
            <label key={skill} className="flex items-center text-grey cursor-pointer group">
              <input
                type="checkbox"
                value={skill}
                checked={expertise.includes(skill)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setExpertise([...expertise, skill])
                  } else {
                    setExpertise(expertise.filter(item => item !== skill))
                  }
                }}
                className="mr-3 accent-turquoise"
              />
              <span className="group-hover:text-turquoise transition-colors">
                {skill}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
} 