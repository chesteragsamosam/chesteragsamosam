// Open Graph Image Verification Utility
// Purpose: Validate og-image.png exists before using in meta tags
// Implements AC2.7 from spec - prevent broken image previews

interface OgImageConfig {
  src: string
  width?: number    // Recommended: 1200
  height?: number   // Recommended: 630 (FB/LinkedIn)
  alt?: string
}

export function verifyOgImage(config: OgImageConfig): Promise<{ exists: boolean; response?: Response }> {
  const configParam = useRuntimeConfig()
  const siteUrl = configParam.public.siteUrl.replace(/\/+$/, '')

  // Boundary validation: Check if image file exists before using in meta tags
  const imageUrl = `${siteUrl}${config.src}`

  return fetch(imageUrl, { method: 'HEAD' })
    .then((res) => ({ exists: res.ok, response: res }))
    .catch(() => ({ exists: false }))
}

// Helper function to get OG image URL with fallback handling
export async function getOgImageUrl(src?: string): Promise<string> {
  if (!src) return `${useRuntimeConfig().public.siteUrl}/og-image.png`

  try {
    const verified = await verifyOgImage({ src, width: 1200, height: 630 })
    if (verified.exists) {
      return `${useRuntimeConfig().public.siteUrl}${src}`
    }
  } catch {}

  // Return fallback or original
  return src
}
