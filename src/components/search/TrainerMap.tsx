'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { Trainer } from '@/types'

// Add type declaration for google.maps
declare global {
  interface Window {
    google: typeof google
  }
}

interface TrainerMapProps {
  trainers: Trainer[]
  selectedTrainer: Trainer | null
  onTrainerSelect: (trainer: Trainer) => void
}

export default function TrainerMap({ trainers, selectedTrainer, onTrainerSelect }: TrainerMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      })

      try {
        await loader.load()
        
        if (mapRef.current && !mapInstanceRef.current) {
          mapInstanceRef.current = new google.maps.Map(mapRef.current, {
            center: { lat: 51.5074, lng: -0.1278 }, // London coordinates
            zoom: 10,
            styles: [
              // Add custom map styles here to match your theme
            ]
          })

          // Add markers for trainers
          trainers.forEach(trainer => {
            // In a real app, you would get these coordinates from your trainer data
            const position = {
              lat: 51.5074 + (Math.random() - 0.5) * 0.1,
              lng: -0.1278 + (Math.random() - 0.5) * 0.1
            }

            const marker = new google.maps.Marker({
              position,
              map: mapInstanceRef.current,
              title: trainer.name,
            })

            marker.addListener('click', () => {
              onTrainerSelect(trainer)
            })

            markersRef.current.push(marker)
          })
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error)
      }
    }

    initMap()

    return () => {
      // Cleanup markers
      markersRef.current.forEach(marker => marker.setMap(null))
      markersRef.current = []
    }
  }, [trainers, onTrainerSelect])

  return <div ref={mapRef} className="w-full h-full" />
} 