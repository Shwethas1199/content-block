import { useEffect } from 'react'

/**
 * Initialises the SFMC Content Block SDK (if running inside SFMC email editor)
 * and sets the block to full width so it fills the editor canvas.
 */
export function useSFMC() {
  useEffect(() => {
    // CustomContentBlockSDK is loaded globally from the official SFMC SDK script
    if (!window.CustomContentBlockSDK) {
      // Running outside SFMC (local dev / direct browser) — do nothing
      return
    }

    const sdk = new window.CustomContentBlockSDK.SdkClient()

    sdk.init(function (data) {
      // 'full' makes the block expand to fill the full editor width
      sdk.setBlockEditorWidth('full')
    })
  }, [])
}
