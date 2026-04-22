import { places as allPlaces } from '../data/places'

export default function Preview({ state }) {
  const selected = allPlaces.filter(p => state.selectedIds.includes(p.id))

  return (
    <div className="flex-1 bg-gray-100 overflow-y-auto">
      {/* Preview toolbar */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-gray-400 font-medium">Live Preview — Email</span>
      </div>

      {/* Email preview */}
      <div className="py-8 px-4 flex justify-center">
        <div className="w-full max-w-xl bg-gray-50 rounded-2xl p-5 shadow-sm">
          {/* Hero */}
          <div className="rounded-xl text-white text-center py-8 px-6 mb-5"
            style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
            <h1 className="text-2xl font-bold mb-2 leading-snug">
              {state.heading || 'Your heading here'}
            </h1>
            <p className="text-indigo-200 text-sm mb-5 leading-relaxed">
              {state.subheading || 'Your subheading here'}
            </p>
            <a
              href={state.ctaUrl || '#'}
              className="inline-block bg-white text-indigo-600 font-semibold text-sm px-5 py-2 rounded-lg no-underline"
            >
              {state.ctaText || 'Button'}
            </a>
          </div>

          {/* Place cards */}
          {selected.length === 0 ? (
            <div className="text-center text-gray-400 text-sm py-8">
              No places selected — tick some on the left
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {selected.map(place => (
                <div key={place.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-gray-800">{place.name}</span>
                      <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                        {place.tag}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{place.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{place.country}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
