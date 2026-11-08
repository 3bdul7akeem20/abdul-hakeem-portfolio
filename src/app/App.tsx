import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'

import { routeMetadata } from '../data/metadata'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Preloader } from './components/Preloader'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Work } from './pages/Work'

function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    // The app handles scrolling on navigation, including repeated visits to /.
    // Letting the browser also restore an old scroll position can hide the hero.
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => {
      window.history.scrollRestoration = previous
    }
  }, [])

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let attempts = 0
    let timer = 0
    // The target may mount a frame or two after the route change, so retry
    // briefly instead of giving up and leaving the user at the top.
    const attempt = () => {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
        return
      }
      if (attempts++ < 24) timer = window.setTimeout(attempt, 50)
    }
    attempt()
    return () => window.clearTimeout(timer)
  }, [pathname, hash, key])

  return null
}

function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = routeMetadata(pathname)
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', meta.canonical)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', meta.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[name="robots"]')?.setAttribute('content', meta.found ? 'index, follow' : 'noindex, follow')
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', meta.canonical)
  }, [pathname])

  return null
}

function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        id="main"
        tabIndex={-1}
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="outline-none"
      >
        <Routes location={location}>
          <Route index element={<Home />} />
          <Route path="work/:slug" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  )
}

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[110] -translate-y-[200%] rounded-control bg-fg px-4 py-2.5 text-[14px] font-medium text-bg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Preloader />
        <ScrollManager />
        <RouteMeta />
        <Nav />
        <Pages />
        <Footer />
      </BrowserRouter>
    </MotionConfig>
  )
}
