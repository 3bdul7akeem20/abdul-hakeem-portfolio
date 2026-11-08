import { Hono } from 'hono'

import { routeMetadata, type RouteMetadata } from '../data/metadata'

type Env = { ASSETS: Fetcher }

const app = new Hono<{ Bindings: Env }>()

app.get('/api/health', (c) => c.json({ ok: true }))

// Email delivery is not configured. Never acknowledge an enquiry as sent.
// The public contact form opens an email draft in the visitor's email app.
app.post('/api/contact', (c) =>
  c.json({ error: 'Online message delivery is unavailable. Please email abdhakeem20@gmail.com directly.' }, 503),
)

const htmlEscape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

// Search crawlers and link previews get the correct metadata before JavaScript.
function injectMetadata(html: string, meta: RouteMetadata): string {
  const fields: Array<[RegExp, string]> = [
    [/<title>[^<]*<\/title>/i, `<title>${htmlEscape(meta.title)}</title>`],
    [/<meta\s+name="description"[^>]*>/i, `<meta name="description" content="${htmlEscape(meta.description)}" />`],
    [/<meta\s+property="og:title"[^>]*>/i, `<meta property="og:title" content="${htmlEscape(meta.title)}" />`],
    [/<meta\s+property="og:description"[^>]*>/i, `<meta property="og:description" content="${htmlEscape(meta.description)}" />`],
    [/<meta\s+property="og:url"[^>]*>/i, `<meta property="og:url" content="${htmlEscape(meta.canonical)}" />`],
    [/<meta\s+name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${htmlEscape(meta.title)}" />`],
    [/<meta\s+name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${htmlEscape(meta.description)}" />`],
    [/<meta\s+name="robots"[^>]*>/i, `<meta name="robots" content="${meta.found ? 'index, follow' : 'noindex, follow'}" />`],
    [/<link\s+rel="canonical"[^>]*>/i, `<link rel="canonical" href="${htmlEscape(meta.canonical)}" />`],
  ]

  return fields.reduce((document, [pattern, replacement]) => document.replace(pattern, replacement), html)
}

app.get('*', async (c) => {
  const url = new URL(c.req.url)
  const pathname = url.pathname
  const lastSegment = pathname.split('/').pop() ?? ''

  // JS, CSS, fonts and Vite's extensionless dev-module URLs must bypass the
  // SPA fallback. Otherwise /@vite/client and /@react-refresh receive HTML
  // with a 404, preventing React from mounting in local development.
  if (lastSegment.includes('.') || pathname.startsWith('/@') || pathname.startsWith('/__vite')) {
    return c.env.ASSETS.fetch(c.req.raw)
  }

  const meta = routeMetadata(pathname)
  // Request the root document to avoid host redirects for /index.html.
  const indexUrl = new URL('/', url)
  const asset = await c.env.ASSETS.fetch(new Request(indexUrl))
  if (!asset.ok) return asset

  const headers = new Headers(asset.headers)
  headers.set('content-type', 'text/html; charset=utf-8')
  headers.set('cache-control', 'no-cache')
  headers.delete('etag')
  headers.delete('content-length')
  headers.delete('content-encoding')

  return new Response(injectMetadata(await asset.text(), meta), {
    status: meta.found ? 200 : 404,
    headers,
  })
})

app.all('*', (c) => c.env.ASSETS.fetch(c.req.raw))

export default app
