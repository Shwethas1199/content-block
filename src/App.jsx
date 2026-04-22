import { useState, useEffect, useCallback } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'
import { places as allPlaces } from './data/places'

export const DEFAULT_STATE = {
  heading: 'Explore Beautiful Places',
  subheading: 'Discover stunning destinations around the world — from tropical islands to ancient ruins.',
  ctaText: 'Plan Your Trip',
  ctaUrl: '#',
  selectedIds: [1, 2, 3],
}

export function generateHtml(state) {
  const selected = allPlaces.filter(p => state.selectedIds.includes(p.id))
  const cards = selected.map(p => `
    <div style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);margin-bottom:16px;">
      <img src="${p.image}" alt="${p.name}" style="width:100%;height:180px;object-fit:cover;" />
      <div style="padding:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
          <strong style="font-size:16px;color:#1f2937;">${p.name}</strong>
          <span style="font-size:11px;background:#e0e7ff;color:#4f46e5;padding:2px 8px;border-radius:20px;">${p.tag}</span>
        </div>
        <p style="margin:0;font-size:13px;color:#6b7280;line-height:1.6;">${p.description}</p>
        <p style="margin:4px 0 0;font-size:12px;color:#9ca3af;">${p.country}</p>
      </div>
    </div>
  `).join('')

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;padding:20px;border-radius:16px;">
      <div style="text-align:center;background:linear-gradient(135deg,#4f46e5,#7c3aed);padding:32px 24px;border-radius:12px;margin-bottom:20px;">
        <h1 style="color:#fff;font-size:26px;margin:0 0 10px;font-weight:700;">${state.heading}</h1>
        <p style="color:#c7d2fe;font-size:14px;margin:0 0 20px;">${state.subheading}</p>
        <a href="${state.ctaUrl}" style="background:#fff;color:#4f46e5;padding:10px 24px;border-radius:8px;font-weight:600;text-decoration:none;font-size:14px;display:inline-block;">${state.ctaText}</a>
      </div>
      ${cards}
    </div>
  `
}

export default function App() {
  const [state, setState] = useState(DEFAULT_STATE)

  useEffect(() => {
    try {
      if (window.sfdc && window.sfdc.BlockSDK) {
        const sdk = new window.sfdc.BlockSDK()
        window.__sdk = sdk
        sdk.setBlockEditorWidth('full')
        sdk.getData(saved => {
          const s = saved && saved.heading ? saved : DEFAULT_STATE
          setState(s)
          sdk.setContent(generateHtml(s))
        })
      }
    } catch (e) {
      console.warn('SFMC SDK unavailable — running in standalone mode')
    }
  }, [])

  const handleChange = useCallback(newState => {
    setState(newState)
    try {
      if (window.__sdk) {
        window.__sdk.setData(newState)
        window.__sdk.setContent(generateHtml(newState))
      }
    } catch (e) {}
  }, [])

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Editor state={state} onChange={handleChange} />
      <Preview state={state} />
    </div>
  )
}
