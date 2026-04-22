import { useEffect } from 'react'

export function useSFMC() {
  useEffect(() => {
    // SDK is pre-initialized in index.html before React loads.
    // Call setBlockEditorWidth again after mount as a fallback.
    try {
      if (window.__sfmcSdk) {
        window.__sfmcSdk.setBlockEditorWidth('full')
      } else if (window.sfdc && window.sfdc.BlockSDK) {
        var sdk = new window.sfdc.BlockSDK()
        sdk.setBlockEditorWidth('full')
        window.__sfmcSdk = sdk
      }
    } catch (e) {
      console.warn('SFMC SDK not available:', e)
    }
  }, [])
}
