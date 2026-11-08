import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

import type { Project } from '../../data/site'
import { cx } from '../lib/cx'

export function WorkCard({ project, index = 0, headingLevel = 3 }: { project: Project; index?: number; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.85, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cx('h-full', project.featured && 'md:col-span-2')}
    >
      <Link
        to={`/work/${project.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface p-6 transition-colors duration-500 hover:border-line-strong sm:p-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-65 transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: `radial-gradient(115% 85% at 100% 0%, ${project.tint}, transparent 60%)` }}
        />

        <div className="relative flex items-baseline justify-between gap-4">
          <span className="eyebrow tabular-nums text-faint">{project.index}</span>
          <span className="eyebrow text-right text-muted">{project.category}</span>
        </div>

        <Heading className={cx('font-display relative mt-6 text-balance', project.featured ? 'text-[30px] sm:text-[44px] lg:max-w-[24ch]' : 'text-[26px] sm:text-[31px]')}>
          {project.title}
        </Heading>

        <p className={cx('relative mt-4 text-pretty text-[15px] leading-relaxed text-muted', project.featured && 'lg:max-w-[62ch]')}>{project.summary}</p>

        {project.tools.length > 0 && (
          <ul className="relative mt-7 mb-8 flex flex-wrap gap-1.5">
            {project.tools.slice(0, project.featured ? 5 : 3).map((tool) => (
              <li key={tool} className="rounded-full border border-line bg-bg/50 px-2.5 py-1 text-[12.5px] text-muted">
                {tool}
              </li>
            ))}
            {project.tools.length > (project.featured ? 5 : 3) && (
              <li className="rounded-full border border-line px-2.5 py-1 text-[12.5px] text-faint">+{project.tools.length - (project.featured ? 5 : 3)}</li>
            )}
          </ul>
        )}

        <div className="relative mt-auto flex items-center justify-between gap-4 border-t border-line pt-5">
          <span className="text-[13px] tabular-nums text-faint">{project.period}</span>
          <span className="inline-flex items-center gap-1.5 text-[14px] font-medium">
            {project.cardCta ?? 'Case study'}
            <ArrowUpRight className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
