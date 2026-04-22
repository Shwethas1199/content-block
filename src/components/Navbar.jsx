export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800">PlacesGallery</span>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#places" className="hover:text-indigo-600 transition-colors">Places</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
        </nav>
      </div>
    </header>
  )
}
