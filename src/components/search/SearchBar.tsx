'use client'

import { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search by trainer name or expertise..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          onSearch(e.target.value)
        }}
        className="w-full bg-navy-light border border-grey/20 rounded-full py-4 px-6 pr-12 text-white placeholder:text-grey focus:outline-none focus:border-turquoise"
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-turquoise hover:text-gold transition-colors"
      >
        <IoSearchOutline size={24} />
      </button>
    </form>
  )
} 