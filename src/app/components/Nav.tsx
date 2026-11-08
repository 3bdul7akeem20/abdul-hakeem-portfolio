import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'

import { site } from '../../data/site'
import { cx } from '../lib/cx'
import { Logomark } from './Logomark'

export function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: site.timezone }).format(new Date()))
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

export function Nav() {
  const time = useLocalTime()
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > 140)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cx('fixed inset-x-0 top-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]', hidden && '-translate-y-full')}>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" aria-label={`${site.name} — home`} className="flex min-w-0 shrink items-center gap-2 sm:gap-2.5">
          <Logomark size="sm" />
          <span className="min-w-0 truncate text-[13px] font-medium tracking-[-0.01em] sm:text-[15px]">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-3.5 sm:gap-7">
          <Link to="/#work" className="link-draw inline-flex min-h-11 items-center px-0.5 text-[13.5px] text-muted transition-colors hover:text-fg sm:text-[14px]">
            Work
          </Link>
          <NavLink to="/about" className={({ isActive }) => cx('link-draw inline-flex min-h-11 items-center px-0.5 text-[13.5px] transition-colors sm:text-[14px]', isActive ? 'text-fg' : 'text-muted hover:text-fg')}>
            About
          </NavLink>
          <Link to="/#contact" className="link-draw inline-flex min-h-11 items-center px-0.5 text-[13.5px] text-muted transition-colors hover:text-fg sm:text-[14px]">
            Contact
          </Link>
          <span className="hidden text-[13px] tabular-nums text-muted md:inline">
            {site.city} {time}
          </span>
        </nav>
      </div>
    </header>
  )
}
