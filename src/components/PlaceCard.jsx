export default function PlaceCard({ place }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-52 overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {place.tag}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-gray-800">{place.name}</h2>
          <span className="text-sm text-gray-400">{place.country}</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">{place.description}</p>
      </div>
    </div>
  )
}
