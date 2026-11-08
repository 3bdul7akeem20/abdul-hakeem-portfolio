import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router'

import { bySlug, projects, type Project } from '../../data/site'
import { Lines, Reveal } from '../components/motion'
import { cx } from '../lib/cx'
import { NotFound } from './NotFound'
import { WorkExample } from '../components/WorkExample'

export function Work() {
  const { slug } = useParams()
  const project = slug ? bySlug(slug) : undefined
  if (!project) return <NotFound />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Link to="/#work" className="inline-flex h-9 items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-fg">
        <ArrowLeft className="size-4" />
        All work
      </Link>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16">
        <div>
          <p className="eyebrow text-faint">
            {project.category} · {project.index}
          </p>
          <Lines as="h1" className="font-display mt-4 max-w-[20ch] text-balance text-[clamp(34px,6vw,78px)]" lines={[project.title]} />
        </div>
        <Reveal delay={0.15} className="text-pretty text-[16px] leading-relaxed text-muted lg:pb-2">
          {project.summary}
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <dl className="relative overflow-hidden rounded-panel border border-line" style={{ background: project.tint }}>
          <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative grid gap-6 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12">
            <span aria-hidden className="font-display text-[64px] leading-none text-fg/25 sm:text-[88px]">
              {project.index}
            </span>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="eyebrow text-fg/75">Context</dt>
                <dd className="mt-1 max-w-[38ch] text-[14.5px] leading-snug">{project.context}</dd>
              </div>
              <div>
                <dt className="eyebrow text-fg/75">Period</dt>
                <dd className="mt-1 text-[14.5px] leading-snug">{project.period}</dd>
              </div>
            </div>
            {project.tools.length > 0 && (
              <div>
                <dt className="eyebrow text-fg/75">Tools</dt>
                <dd className="mt-2 flex max-w-[280px] flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded-full border border-fg/20 bg-bg/40 px-2.5 py-1 text-[12.5px]">
                      {tool}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </div>
        </dl>
      </Reveal>

      <div className="mt-16">
        <Section title={project.kind === 'account' ? 'Context' : 'Overview'}>
          <div className="flex max-w-2xl flex-col gap-4 text-pretty text-[16.5px] leading-relaxed text-muted">
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        {project.kind !== 'account' && <Section title={project.problemTitle ?? 'Operational problem'}>
          <div className="flex max-w-2xl flex-col gap-4 text-pretty text-[16.5px] leading-relaxed text-muted">
            {project.problem.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>}

        {project.kind !== 'account' && <Section title="Worked example"><WorkExample slug={project.slug} /></Section>}

        <Section title={project.kind === 'account' ? 'Responsibilities' : 'My contribution'}>
          <ul className="grid max-w-3xl gap-x-10 gap-y-3 sm:grid-cols-2">
            {project.contribution.map((item) => (
              <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                <span className="mt-[0.62em] size-1 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={project.kind === 'account' ? 'Working approach' : (project.approachTitle ?? 'Tools and approach')}>
          <div className="max-w-2xl">
            {project.tools.length > 0 && (
              <>
                <p className="eyebrow mb-3 text-faint">Tools</p>
                <ul className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <li key={tool} className="rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] text-muted">
                      {tool}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div
              className={cx(
                'flex flex-col gap-4 text-pretty text-[16.5px] leading-relaxed text-muted',
                project.tools.length > 0 && 'mt-7',
              )}
            >
              {project.approach.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Section>

        {project.kind !== 'account' && <Section title="Delivered">
          <ul className="max-w-2xl divide-y divide-line border-y border-line">
            {project.delivered.map((item) => (
              <li key={item} className="flex gap-3 py-4 text-[15.5px] leading-relaxed">
                <span className="mt-[0.55em] size-1.5 shrink-0 rounded-[2px] bg-fg" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>}

        {project.proposed && project.proposed.length > 0 && (
          <Section title="Planned enhancements">
            <div className="max-w-2xl rounded-card border border-dashed border-line-strong bg-surface/60 p-5">
              <ul className="flex flex-col gap-3 text-[15px] leading-relaxed text-muted">
                {project.proposed.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Section>
        )}

        {project.kind !== 'account' && <Section title="Status">
          <p className="max-w-2xl rounded-card border border-line bg-surface p-5 text-[15px] leading-relaxed">{project.status}</p>
        </Section>}
      </div>

      <NextProject project={next} />
    </article>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 sm:grid-cols-[200px_1fr] sm:gap-12 lg:gap-20">
      <h2 className="eyebrow h-fit text-faint">{title}</h2>
      <div>{children}</div>
    </section>
  )
}

function NextProject({ project }: { project: Project }) {
  return (
    <Link to={`/work/${project.slug}`} className="group mt-20 block border-t border-line pt-8 sm:mt-28">
      <p className="eyebrow text-faint">Next selected work · {project.index}</p>
      <div className="mt-3 flex items-end justify-between gap-6">
        <h2 className="font-display max-w-[22ch] text-balance text-[clamp(28px,5vw,64px)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
          {project.title}
        </h2>
        <span className="mb-2 grid size-11 shrink-0 place-items-center rounded-[13px] border border-line-strong transition-colors group-hover:border-fg group-hover:bg-fg group-hover:text-bg">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  )
}
