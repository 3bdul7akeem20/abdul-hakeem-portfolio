import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

import { Lines, Reveal } from '../components/motion'

export function NotFound() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-[1400px] flex-col justify-center px-5 pb-20 pt-36 sm:px-8">
      <p className="eyebrow text-faint">404 · Page not found</p>
      <Lines as="h1" className="font-display mt-5 text-balance text-[clamp(48px,9vw,112px)]" lines={['This page', 'is not here.']} />
      <Reveal className="mt-6 max-w-lg text-pretty text-[17px] leading-relaxed text-muted">
        The link may have changed, or the address may have been mistyped. You can return to the portfolio or browse selected work.
      </Reveal>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link to="/" className="inline-flex min-h-12 items-center gap-2 rounded-control bg-fg px-6 text-[15px] font-medium text-bg">
          <ArrowLeft className="size-4" /> Home
        </Link>
        <Link to="/#work" className="inline-flex min-h-12 items-center gap-2 rounded-control border border-line-strong px-6 text-[15px] font-medium">
          Selected work <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
