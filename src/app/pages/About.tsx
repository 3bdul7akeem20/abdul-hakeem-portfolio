import { ArrowUpRight, Award } from 'lucide-react'
import { Link } from 'react-router'

import { certification, education, experience, interestedIn, languages, learning, recognition, site, skillGroups } from '../../data/site'
import { Logomark } from '../components/Logomark'
import { Lines, Reveal } from '../components/motion'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <p className="eyebrow text-faint">About</p>
      <Lines as="h1" className="font-display mt-4 text-balance text-[clamp(48px,9.5vw,120px)]" lines={[site.name]} />
      <Lines
        as="p"
        delay={0.08}
        className="font-display mt-3 text-balance text-[clamp(24px,3.8vw,46px)] leading-[1.06] text-muted"
        lines={['Data and reporting,', 'from the floor up']}
      />

      <Reveal className="mt-10 flex max-w-3xl flex-col gap-4 text-pretty text-[19px] leading-relaxed sm:text-[23px]">
        <p>
          I am a CAFM Planner at Dubai Hills Mall, working with IBM Maximo, operational reporting and performance data. I build Excel and Power BI views that help teams see what needs attention.
        </p>
        <p className="text-[16px] text-muted sm:text-[18px]">
          Before that, I worked in data processing at NielsenIQ, where accuracy, quality checks and timely client delivery shaped my approach.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-14 lg:grid-cols-[300px_1fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <Logomark size="lg" label="Abdul Hakeem monogram" />
          <p className="mt-4 text-[20px] font-medium tracking-[-0.02em] sm:text-[22px]">{site.name}</p>
          <p className="mt-1 text-[13.5px] leading-snug text-muted">{site.title}</p>
          <dl className="mt-6 grid gap-4 border-t border-line pt-6 text-[14px]">
            {[
              ['Based in', site.location],
              ['Availability', site.availability],
              ['Notice period', site.notice],
              ['Focus', site.focus],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="eyebrow text-faint">{label}</dt>
                <dd className="mt-1 leading-snug">{value}</dd>
              </div>
            ))}
            <div>
              <dt className="eyebrow text-faint">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="link-draw break-all">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-faint">Elsewhere</dt>
              <dd className="mt-1">
                {site.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer noopener" className="link-draw inline-flex items-center gap-1">
                    {s.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <div>
          <Reveal className="flex flex-col gap-6 text-pretty text-[17px] leading-relaxed text-muted sm:text-[18px]">
            <p>
              My Business Analytics studies strengthened the reporting side of my work. At Dubai Hills Mall I combine that with facilities management experience: maintenance planning, service-level monitoring, data checks and daily operational reporting.
            </p>
            <p className="text-fg">
              I work across the process, from Maximo queries and planned maintenance scheduling to Power BI reporting for performance reviews.
            </p>
            <p>
              I automate repeatable steps with Power Automate Desktop and build Flask tools for paper-based workflows, so people can focus on validation, exceptions and decisions.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 border-t border-line pt-6">
            <p className="eyebrow text-faint">Open to</p>
            <div className="mt-4 grid gap-5">
              {interestedIn.map((group) => (
                <div key={group.heading}>
                  <p className="text-[13px] font-medium">{group.heading}</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {group.roles.map((role) => (
                      <li key={role} className="rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] text-muted">
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <section id="experience" className="mt-24 scroll-mt-16 sm:mt-32">
        <h2 className="eyebrow text-faint">Experience</h2>
        <div className="mt-6 border-t border-line">
          {experience.map((job) => (
            <div key={job.employer} className="grid gap-5 border-b border-line py-8 sm:grid-cols-[240px_1fr] sm:gap-12">
              <div>
                <p className="text-[16px] font-medium">{job.employer}</p>
                {job.context && <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{job.context}</p>}
              </div>
              <div className="flex flex-col gap-9">
                {job.roles.map((role) => (
                  <div key={role.title}>
                    <p className="text-[12.5px] tabular-nums text-faint">{role.period}</p>
                    <h3 className="mt-1 text-[19px] font-medium">{role.title}</h3>
                    <p className="mt-2 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted">{role.summary}</p>
                    {role.points.length > 0 && (
                      <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                        {role.points.map((point) => (
                          <li key={point} className="flex gap-2.5 text-[14px] leading-relaxed text-muted">
                            <span className="mt-[0.6em] size-1 shrink-0 rounded-full bg-line-strong" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {role.accounts && (
                      <div className="mt-5 rounded-card border border-line bg-surface/70 p-4">
                        <p className="eyebrow text-faint">Client account</p>
                        <ul className="mt-2 flex flex-col gap-3">
                          {role.accounts.map((account) => (
                            <li key={account.name}>
                              {account.href ? (
                                <Link to={account.href} className="link-draw inline-flex items-center gap-1 text-[14.5px] font-medium">
                                  {account.name}
                                  <ArrowUpRight className="size-3.5" />
                                </Link>
                              ) : (
                                <p className="text-[14.5px] font-medium">{account.name}</p>
                              )}
                              <p className="mt-1 max-w-xl text-pretty text-[13px] leading-relaxed text-muted">{account.note}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {role.recognition && (
                      <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[12.5px] text-muted">
                        <Award className="size-3.5 text-accent" />
                        {role.recognition}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <h2 className="eyebrow text-faint">Skills</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-card border border-line bg-surface p-6">
                <h3 className="text-[16px] font-medium">{group.title}</h3>
                {group.note && <p className="mt-1 text-[13px] text-faint">{group.note}</p>}
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-line px-2.5 py-1 text-[12.5px] text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <h2 className="eyebrow text-faint">Education and learning</h2>
        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <ul className="divide-y divide-line border-y border-line">
              {education.map((item) => (
                <li key={item.title} className="py-5">
                  <p className="text-[12.5px] tabular-nums text-faint">{item.period}</p>
                  <p className="mt-1 text-[16px] font-medium">{item.title}</p>
                  <p className="mt-0.5 text-[14px] text-muted">{item.org}</p>
                  {item.note && <p className="mt-1 text-[13px] text-faint">{item.note}</p>}
                </li>
              ))}
              <li className="py-5">
                <p className="text-[12.5px] tabular-nums text-faint">{certification.period}</p>
                <p className="mt-1 text-[16px] font-medium">{certification.title}</p>
                <p className="mt-0.5 text-[14px] text-muted">Certification · {certification.org}</p>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[14px] text-muted">Continuing learning</p>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {learning.map((item) => (
                <li key={item.title} className="py-5">
                  <p className="text-[12.5px] tabular-nums text-faint">{item.period}</p>
                  <p className="mt-1 text-[15.5px] font-medium">{item.title}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <h2 className="eyebrow text-faint">Languages</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {languages.map((language) => (
            <li key={language.name} className="rounded-card border border-line bg-surface p-5">
              <p className="text-[16px] font-medium">{language.name}</p>
              <p className="mt-0.5 text-[13.5px] text-muted">{language.level}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-24 sm:mt-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="eyebrow text-faint">Recognition</h2>
          <Link to="/#contact" className="link-draw inline-flex items-center gap-1.5 text-[14px] font-medium">
            Get in touch
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {recognition.map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-card border border-line bg-surface p-6">
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
          ))}
        </div>
      </section>
    </article>
  )
}
