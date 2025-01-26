import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-navy border-b border-grey/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl text-gold">
            Upenya
          </Link>
          <div className="flex items-center gap-8">
            <Link 
              href="/search" 
              className="text-white hover:text-turquoise transition-colors"
            >
              Find Trainers
            </Link>
            <Link 
              href="/become-trainer" 
              className="text-white hover:text-turquoise transition-colors"
            >
              Host Training
            </Link>
            <Link 
              href="/login" 
              className="px-4 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-navy transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 