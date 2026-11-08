import { bySlug, site } from './site'

// Change this when the public portfolio moves to a permanent domain.
export const publicOrigin = 'https://site-f862bfa273d54b218d860d0b254b686e.freebuff.page'

export interface RouteMetadata {
  title: string
  description: string
  canonical: string
  found: boolean
}

export function routeMetadata(pathname: string): RouteMetadata {
  const path = pathname.replace(/\/+$/, '') || '/'
  const project = path.startsWith('/work/') ? bySlug(path.slice('/work/'.length)) : undefined

  if (project) {
    return {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      canonical: `${publicOrigin}/work/${project.slug}`,
      found: true,
    }
  }

  if (path === '/about') {
    return {
      title: `About — ${site.name}, ${site.role}`,
      description: `${site.name} is a CAFM Planner in Dubai with experience in IBM Maximo, data processing, Power BI and Excel reporting, and workflow automation.`,
      canonical: `${publicOrigin}/about`,
      found: true,
    }
  }

  if (path === '/') {
    return {
      title: `${site.name} — ${site.role}, Dubai`,
      description: `${site.name} — data and MIS analyst in Dubai. Operational reporting, Power BI and Excel, maintenance planning in IBM Maximo, and workflow automation.`,
      canonical: `${publicOrigin}/`,
      found: true,
    }
  }

  return {
    title: `Page not found — ${site.name}`,
    description: 'The requested portfolio page could not be found. Return home or browse selected work.',
    canonical: `${publicOrigin}/`,
    found: false,
  }
}
