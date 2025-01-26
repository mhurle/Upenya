export default function Hero() {
  return (
    <div className="bg-navy py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-gold">
          Find Expert Corporate Trainers
        </h1>
        <p className="text-xl mb-10 text-turquoise max-w-2xl">
          Connect with professional trainers to upskill your team and drive organizational excellence
        </p>
        <div className="flex gap-4">
          <a 
            href="/search"
            className="bg-gold text-navy px-8 py-3 rounded-full font-medium hover:bg-turquoise hover:text-white transition-colors"
          >
            Find Trainers
          </a>
          <a 
            href="/become-trainer"
            className="border-2 border-turquoise text-turquoise px-8 py-3 rounded-full font-medium hover:bg-turquoise hover:text-white transition-colors"
          >
            Host Training
          </a>
        </div>
      </div>
    </div>
  )
} 