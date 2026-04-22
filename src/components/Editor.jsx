import { places as allPlaces } from '../data/places'

export default function Editor({ state, onChange }) {
  const set = (key, value) => onChange({ ...state, [key]: value })

  const togglePlace = (id) => {
    const ids = state.selectedIds.includes(id)
      ? state.selectedIds.filter(i => i !== id)
      : [...state.selectedIds, id]
    onChange({ ...state, selectedIds: ids })
  }

  return (
    <div className="w-80 min-w-[300px] bg-white border-r border-gray-200 flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100 bg-indigo-600">
        <h1 className="text-white font-bold text-base">✏️ Edit Content Block</h1>
        <p className="text-indigo-200 text-xs mt-0.5">Changes update live in preview</p>
      </div>

      <div className="p-5 flex flex-col gap-5">
        {/* Heading */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Heading
          </label>
          <input
            type="text"
            value={state.heading}
            onChange={e => set('heading', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter heading..."
          />
        </div>

        {/* Subheading */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Subheading
          </label>
          <textarea
            value={state.subheading}
            onChange={e => set('subheading', e.target.value)}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
            placeholder="Enter subheading..."
          />
        </div>

        {/* CTA */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Button Text
          </label>
          <input
            type="text"
            value={state.ctaText}
            onChange={e => set('ctaText', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="e.g. Plan Your Trip"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
            Button URL
          </label>
          <input
            type="url"
            value={state.ctaUrl}
            onChange={e => set('ctaUrl', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="https://..."
          />
        </div>

        {/* Places selection */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Select Places to Show
          </label>
          <div className="flex flex-col gap-2">
            {allPlaces.map(place => (
              <label
                key={place.id}
                className="flex items-center gap-3 p-2.5 rounded-lg border border-gray-200 cursor-pointer hover:bg-indigo-50 hover:border-indigo-300 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={state.selectedIds.includes(place.id)}
                  onChange={() => togglePlace(place.id)}
                  className="accent-indigo-600 w-4 h-4"
                />
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-8 h-8 rounded object-cover"
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{place.name}</p>
                  <p className="text-xs text-gray-400">{place.country}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
