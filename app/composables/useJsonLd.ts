import { profile } from '~/data/profile'

export function useJsonLd() {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl.replace(/\/+$/, '')
  const personId = `${siteUrl}/#person`
  const websiteId = `${siteUrl}/#website`

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: profile.name,
    alternateName: ['Chester Agsamosam', 'CA', 'chesteragsamosam'],
    givenName: 'Chester',
    familyName: 'Agsamosam',
    jobTitle: 'Senior Frontend & Web Application Developer',
    description: profile.headline,
    url: siteUrl,
    image: `${siteUrl}/${profile.photo.src}`,
    email: profile.contact.email,
    telephone: profile.contact.phone,
    nationality: {
      '@type': 'Country',
      name: 'Philippines',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lipa City',
      addressRegion: 'Batangas',
      addressCountry: 'PH',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Ascendion',
      url: 'https://ascendion.com',
    },
    alumniOf: profile.education.map((edu) => ({
      '@type': 'EducationalOrganization',
      name: edu.school.split(' (')[0],
      description: edu.degree,
    })),
    sameAs: [
      profile.contact.linkedin,
      'https://github.com/chesteragsamosam',
    ],
    knowsAbout: [
      'Vue.js',
      'Vue 3',
      'TypeScript',
      'JavaScript',
      'Svelte',
      'Tailwind CSS',
      'Laravel',
      'Frontend Architecture',
      'Web Application Development',
      'Digital Wallet UI',
      'Web Components',
      'Nuxt.js',
      'Full-Stack Engineering',
      'AI-assisted Software Development',
    ],
    knowsLanguage: profile.languages.map((l) => ({
      '@type': 'Language',
      name: l.name,
    })),
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: `${profile.name} — Portfolio`,
    url: siteUrl,
    description: profile.summary,
    inLanguage: 'en-US',
    publisher: {
      '@id': personId,
    },
    author: {
      '@id': personId,
    },
  }

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: `${profile.name} — Senior Frontend & Web App Developer Portfolio`,
    isPartOf: {
      '@id': websiteId,
    },
    about: {
      '@id': personId,
    },
    mainEntity: {
      '@id': personId,
    },
  }

  function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }
  }

  return {
    personSchema,
    websiteSchema,
    profilePageSchema,
    getBreadcrumbSchema,
    siteUrl,
  }
}
