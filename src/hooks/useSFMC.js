import { useEffect } from 'react'

/**
 * Initialises the SFMC Content Block SDK (if running inside SFMC email editor)
 * and requests full-screen mode so the block fills the editor.
 */
export function useSFMC() {
  useEffect(() => {
    // SDK is loaded globally from index.html as window.SDK
    const sdk = window.SDK

    if (!sdk) {
      // Running outside SFMC (local dev / direct browser) — do nothing
      return
    }

    sdk.init((data) => {
      // Request full-screen editor as soon as the block is initialised
      sdk.setBlockEditorWidth('100%')
      sdk.requestFullscreen()
    })
  }, [])
}
