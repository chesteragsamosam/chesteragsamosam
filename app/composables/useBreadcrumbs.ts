// Breadcrumb Navigation Utility Composable
// Purpose: Provide breadcrumb navigation HTML and JSON-LD schema for SEO
// Implements AC4 from spec

interface BreadcrumbItem {
  name: string
  url: string
}

export function useBreadcrumbs(items: BreadcrumbItem[]) {
  // Validate all links resolve correctly before rendering (boundary discipline)
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl.replace(/\/+$/, '')

  // Normalize URLs to ensure consistency
  return items.map(item => ({
    ...item,
    href: item.url.replace(/^\//, `/${siteUrl.split('/').slice(1).join('/')}/`)
  }))
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/+$/, '')

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url
    }))
  }
}
