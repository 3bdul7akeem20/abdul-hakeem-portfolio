import { AnimatePresence, motion } from 'motion/react'
import { ArrowDown, ArrowUpRight, Award, Plus } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

import { capabilities, experience, projects, recognition, site } from '../../data/site'
import { Logomark } from '../components/Logomark'
import { Lines, Reveal } from '../components/motion'
import { WorkCard } from '../components/WorkCard'
import { cx } from '../lib/cx'

const ease = [0.22, 1, 0.36, 1] as const

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <HeroField />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-28">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="eyebrow max-w-[70ch] text-balance text-faint">
            Dubai · Portfolio
          </motion.p>

          <h1 className="font-display mt-4 text-balance text-[clamp(48px,11.5vw,168px)]">
            {site.name.split(' ').map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.2 + i * 0.1, ease }}>
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
            className="mt-4 max-w-[38ch] text-pretty text-[clamp(16px,2.2vw,24px)] font-medium leading-snug tracking-[-0.015em] text-muted sm:max-w-none"
          >
            Data &amp; MIS Analyst <span className="text-line-strong" aria-hidden>|</span> CAFM Planner <span className="text-line-strong" aria-hidden>|</span> Reporting &amp; Automation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
            className="mt-9 grid gap-10 border-t border-fg/20 pt-7 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-20"
          >
            <div>
              <h2 className="font-display max-w-[26ch] text-balance text-[26px] leading-[1.05] sm:text-[34px] lg:text-[40px]">{site.headline}</h2>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/#work"
                  className="group inline-flex h-13 items-center gap-2 rounded-[13px] bg-fg px-6 text-[15px] font-medium text-bg transition-colors hover:bg-[#2b2925]"
                >
                  View selected work
                  <ArrowDown className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0.5" />
                </Link>
                <Link to="/#contact" className="inline-flex h-13 items-center gap-2 rounded-[13px] border border-line-strong px-6 text-[15px] font-medium transition-colors hover:border-fg">
                  Contact me
                  <ArrowUpRight className="size-4" />
                </Link>
                <a className="inline-flex min-h-11 items-center px-2 text-sm underline" href={`mailto:${site.email}?subject=CV%20request`}>Request my CV</a>
              </div>
              <p className="mt-7 max-w-xl text-pretty text-[15.5px] leading-relaxed text-muted sm:text-[16.5px]">{site.intro}</p>
            </div>

            <div className="flex items-start justify-between gap-8 lg:justify-self-end">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-6 text-[14px] lg:w-[330px]">
                {[
                  ['Based in', site.location],
                  ['Availability', site.availability],
                  ['Notice period', site.notice],
                  ['Looking across', site.focus],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="eyebrow text-faint">{label}</dt>
                    <dd className="mt-1.5 leading-snug">{value}</dd>
                  </div>
                ))}
              </dl>
              <Logomark size="lg" label="Abdul Hakeem monogram" className="hidden sm:grid" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-line py-4" aria-hidden>
        <ul className="font-display flex w-max animate-marquee items-center gap-9 whitespace-nowrap text-[22px] text-fg/65 sm:text-[30px]">
          {[...site.marquee, ...site.marquee].map((item, i) => (
            <li key={i} className="flex items-center gap-9">
              {item}
              <span className="round size-1.5 rounded-full bg-accent/70" />
            </li>
          ))}
        </ul>
      </div>

      <section id="work" className="mx-auto max-w-[1400px] scroll-mt-16 px-5 pt-20 sm:px-8 sm:pt-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-faint">Selected work</p>
            <Lines as="h2" className="font-display mt-3 text-[38px] sm:text-[56px]" lines={['Case studies']} />
          </div>
          <Reveal className="text-[13.5px] text-muted">
            {projects.filter((p) => p.kind !== 'account').length} operational case studies ·{' '}
            {projects.filter((p) => p.kind === 'account').length} client account experience
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 sm:mt-12 lg:gap-5">
          {projects.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-36">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <p className="eyebrow text-faint">What I do</p>
            <Lines as="h2" className="font-display mt-3 text-[38px] sm:text-[52px]" lines={['Core', 'capabilities']} />
            <Reveal delay={0.1} className="mt-5 max-w-xs text-pretty text-[15px] leading-relaxed text-muted">
              One loop: the operation produces the data, the data produces the report, and the report changes what the operation does next.
            </Reveal>
          </div>
          <Capabilities />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-36">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-faint">Experience</p>
            <Lines as="h2" className="font-display mt-3 text-[38px] sm:text-[52px]" lines={['Where I have worked']} />
          </div>
          <Reveal>
            <Link to="/about" className="link-draw inline-flex items-center gap-1.5 text-[14.5px] font-medium">
              Full experience
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        <ol className="mt-10 divide-y divide-line border-y border-line">
          {experience.map((job) => {
            const [current, ...earlier] = job.roles
            return (
              <li key={job.employer} className="grid gap-2 py-6 sm:grid-cols-[190px_1fr] sm:gap-8">
                <span className="text-[13.5px] tabular-nums text-faint">{current.period}</span>
                <div>
                  <p className="text-[17px] font-medium">{current.title}</p>
                  <p className="mt-0.5 text-[15px]">{job.employer}</p>
                  {job.context && <p className="mt-1 text-[14px] text-muted">{job.context}</p>}
                  {earlier.map((role) => (
                    <p key={role.title} className="mt-3 border-l border-line-strong pl-3 text-[13.5px] text-muted">
                      Previously {role.title} · {role.period}
                    </p>
                  ))}
                </div>
              </li>
            )
          })}
        </ol>

        <div className="mt-16">
          <p className="eyebrow text-faint">Recognition</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {recognition.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-card border border-line bg-surface p-6">
                  <span className="grid size-10 shrink-0 place-items-center rounded-[12px] border border-line-strong text-accent">
                    <Award className="size-4" />
                  </span>
                  <div>
                    <p className="text-[16px] font-medium">{item.title}</p>
                    <p className="mt-0.5 text-[14px] text-muted">
                      {item.org} · {item.date}
                    </p>
                    {item.note && <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{item.note}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Slow colour fields behind the hero: indigo, teal, violet and a warm sand,
// blurred and drifting, fading into the paper. The grain keeps it from
// reading as a flat gradient.
function HeroField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_30%,transparent_88%)]">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, ease }} className="absolute inset-0">
        <div className="round absolute -top-[30%] right-[-10%] h-[80%] w-[62%] animate-drift-a rounded-full bg-[radial-gradient(closest-side,rgb(47_59_255/0.17),transparent)] blur-3xl" />
        <div className="round absolute -top-[18%] left-[-14%] h-[70%] w-[56%] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(20_140_130/0.13),transparent)] blur-3xl" />
        <div className="round absolute top-[6%] left-[26%] h-[62%] w-[50%] animate-drift-c rounded-full bg-[radial-gradient(closest-side,rgb(255_186_120/0.22),transparent)] blur-3xl" />
        <div className="round absolute top-[24%] right-[14%] h-[46%] w-[36%] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(150_128_255/0.16),transparent)] blur-3xl" />
      </motion.div>
      <div className="grain absolute inset-0" />
    </div>
  )
}

function Capabilities() {
  const [open, setOpen] = useState(0)
  return (
    <ul className="border-t border-line">
      {capabilities.map((item, i) => {
        const isOpen = open === i
        return (
          <li key={item.title} className="border-b border-line">
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)} className="group flex w-full items-center gap-5 py-6 text-left">
              <span className="w-7 shrink-0 text-[13px] tabular-nums text-faint">0{i + 1}</span>
              <span className={cx('font-display flex-1 text-[25px] transition-colors sm:text-[34px]', isOpen ? 'text-fg' : 'text-fg/55 group-hover:text-fg')}>{item.title}</span>
              <span className={cx('grid size-9 shrink-0 place-items-center rounded-[10px] border border-line-strong transition-colors duration-300', isOpen && 'border-fg bg-fg text-bg')}>
                <Plus className={cx('size-4 transition-transform duration-500', isOpen && 'rotate-45')} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease }} className="overflow-hidden">
                  <p className="max-w-2xl pb-7 pl-12 text-pretty text-[15.5px] leading-relaxed text-muted">{item.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}
