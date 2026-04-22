import { places } from '../data/places'
import PlaceCard from '../components/PlaceCard'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Explore Beautiful Places</h1>
        <p className="text-indigo-100 text-lg max-w-xl mx-auto">
          Discover stunning destinations around the world — from tropical islands to ancient ruins.
        </p>
      </section>

      {/* Places Grid */}
      <section id="places" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map(place => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white border-t border-gray-100 py-14 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">About PlacesGallery</h2>
        <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          PlacesGallery is a simple app showcasing beautiful destinations with photos and descriptions.
          Built with React + Tailwind CSS and deployed on Vercel.
        </p>
      </section>

      <footer className="text-center text-xs text-gray-400 py-6 border-t border-gray-100">
        © {new Date().getFullYear()} PlacesGallery · Built with React &amp; Tailwind CSS
      </footer>
    </main>
  )
}
