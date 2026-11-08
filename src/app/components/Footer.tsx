import { ArrowUpRight } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { site } from '../../data/site'
import { Logomark } from './Logomark'
import { Lines, Magnetic, Reveal } from './motion'
import { useLocalTime } from './Nav'

const field =
  'h-14 w-full rounded-control border border-line-strong bg-bg/40 px-5 text-[15px] placeholder:text-faint transition-colors focus:border-fg focus:outline-none'

export function Footer() {
  const time = useLocalTime()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [draftPrepared, setDraftPrepared] = useState(false)

  function prepareEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = `Portfolio enquiry from ${form.name.trim()}`
    const body = [
      'Hello Abdul,',
      '',
      form.message.trim(),
      '',
      `Name: ${form.name.trim()}`,
      `Reply email: ${form.email.trim()}`,
    ].join('\n')

    setDraftPrepared(true)
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <footer id="contact" className="mt-28 scroll-mt-16 border-t border-line sm:mt-40">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
          <div>
            <p className="eyebrow text-faint">Contact</p>
            <Lines as="h2" className="font-display mt-5 text-[clamp(42px,7vw,96px)]" lines={['Tell me about', <>the <span className="text-accent">role</span></>]} />
            <Reveal delay={0.15} className="mt-7 max-w-md text-pretty text-[16px] leading-relaxed text-muted">
              <p>
                Hiring for analytics, reporting or CAFM roles? Share the role details to discuss how my experience could support your team.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex h-14 items-center gap-2 rounded-[14px] bg-fg px-6 text-[15.5px] font-medium text-bg transition-colors hover:bg-[#2b2925]"
                >
                  {site.email}
                  <ArrowUpRight className="size-4" />
                </a>
              </Magnetic>
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-14 items-center gap-2 rounded-[14px] border border-line-strong px-6 text-[15.5px] font-medium transition-colors hover:border-fg"
                >
                  {s.label}
                  <ArrowUpRight className="size-4" />
                </a>
              ))}
            </Reveal>

            <Reveal delay={0.25} className="mt-12">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 text-[14px] sm:grid-cols-4 lg:grid-cols-2">
                {[
                  ['Based in', site.location],
                  ['Availability', site.availability],
                  ['Notice period', site.notice],
                  ['Looking across', site.focus],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-faint">{label}</dt>
                    <dd className="mt-1">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
              <form onSubmit={prepareEmail} aria-label="Prepare a contact email" className="flex flex-col gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      maxLength={120}
                      autoComplete="name"
                      placeholder="Your name"
                      className={field}
                      value={form.name}
                      onChange={(e) => { setDraftPrepared(false); setForm({ ...form, name: e.target.value }) }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      Your email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      placeholder="Email"
                      className={field}
                      value={form.email}
                      onChange={(e) => { setDraftPrepared(false); setForm({ ...form, email: e.target.value }) }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    maxLength={2000}
                    placeholder="The role, the team, and what you need reported"
                    aria-describedby="contact-guidance"
                    className={`${field} h-auto min-h-[150px] resize-none py-4`}
                    value={form.message}
                    onChange={(e) => { setDraftPrepared(false); setForm({ ...form, message: e.target.value }) }}
                  />
                </div>
                <button
                  type="submit"
                  className="h-14 rounded-control border border-fg text-[15px] font-medium transition-colors hover:bg-fg hover:text-bg"
                >
                  Open email draft
                </button>
                {draftPrepared && (
                  <p role="status" className="text-[13px] leading-relaxed text-muted">
                    Your email app should open with a draft. Review it and press Send there to complete your enquiry. If nothing opens, use the email link alongside this form.
                  </p>
                )}
                <p id="contact-guidance" className="mt-1 text-[12.5px] leading-relaxed text-faint">
                  This form prepares an email on your device. Your details are not submitted to this website. You review and send the message from your email app.
                </p>
              </form>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 text-[13.5px] sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Logomark size="sm" />
            <span className="text-faint">
              © {new Date().getFullYear()} {site.name}
            </span>
          </div>
          <p className="text-faint">
            {site.location} · {time}
          </p>
        </div>
      </div>
    </footer>
  )
}
