import type { RouteMetadata } from './metadata'

const htmlEscape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

// Search crawlers and link previews get the correct metadata before JavaScript.
export function injectMetadata(html: string, meta: RouteMetadata): string {
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
