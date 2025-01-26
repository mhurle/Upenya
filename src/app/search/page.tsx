'use client'

import { useState } from 'react'
import SearchBar from '@/components/search/SearchBar'
import TrainerMap from '@/components/search/TrainerMap'
import SearchResults from '@/components/search/SearchResults'
import SearchFilters from '@/components/search/SearchFilters'
import { trainers } from '@/data/trainers'
import { Trainer } from '@/types'

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState<Trainer[]>(trainers)
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null)
  const [view, setView] = useState<'list' | 'map'>('list')

  return (
    <main className="min-h-screen bg-navy">
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gold text-center mb-8">
            Find Your Perfect Trainer
          </h1>
          <SearchBar onSearch={(query) => {
            const filtered = trainers.filter(trainer => 
              trainer.name.toLowerCase().includes(query.toLowerCase()) ||
              trainer.expertise.some(skill => 
                skill.toLowerCase().includes(query.toLowerCase())
              )
            )
            setSearchResults(filtered)
          }} />
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-80 shrink-0">
            <SearchFilters />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* View Toggle */}
            <div className="flex justify-end mb-6">
              <div className="bg-navy-light rounded-full p-1">
                <button
                  className={`px-6 py-2 rounded-full transition-colors ${
                    view === 'list' 
                      ? 'bg-gold text-navy' 
                      : 'text-gold hover:text-turquoise'
                  }`}
                  onClick={() => setView('list')}
                >
                  List View
                </button>
                <button
                  className={`px-6 py-2 rounded-full transition-colors ${
                    view === 'map' 
                      ? 'bg-gold text-navy' 
                      : 'text-gold hover:text-turquoise'
                  }`}
                  onClick={() => setView('map')}
                >
                  Map View
                </button>
              </div>
            </div>

            {/* Results */}
            {view === 'list' ? (
              <SearchResults 
                trainers={searchResults} 
                onTrainerSelect={setSelectedTrainer} 
              />
            ) : (
              <div className="h-[600px] rounded-xl overflow-hidden">
                <TrainerMap 
                  trainers={searchResults}
                  selectedTrainer={selectedTrainer}
                  onTrainerSelect={setSelectedTrainer}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
} 