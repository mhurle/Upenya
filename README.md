# Upenya - Professional Training Marketplace

A marketplace platform connecting professional trainers with organizations and individuals seeking corporate upskilling services.

## Features

- Trainer discovery and search
- Location-based search with map view
- Filter by expertise, rating, and price
- Real-time search functionality
- Interactive trainer profiles

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/mhurle/Upenya.git
cd Upenya
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env.local`
- Add your Google Maps API key

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Google Maps API

## Environment Variables

Create a `.env.local` file in the root directory with:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
