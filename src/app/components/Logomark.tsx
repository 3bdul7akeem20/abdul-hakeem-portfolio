import { site } from '../../data/site'
import { cx } from '../lib/cx'

const sizes = {
  sm: 'size-8 rounded-[9px] text-[11.5px]',
  md: 'size-12 rounded-[13px] text-[16px]',
  lg: 'size-24 rounded-[22px] text-[31px]',
  xl: 'size-[152px] rounded-[30px] text-[52px]',
} as const

/** The AH monogram: ink tile, paper letters, one accent dot. */
export function Logomark({ size = 'sm', label, className }: { size?: keyof typeof sizes; label?: string; className?: string }) {
  return (
    <span
      {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true })}
      className={cx('relative grid shrink-0 place-items-center bg-fg text-bg', sizes[size], className)}
    >
      <span className="font-display leading-none">{site.monogram}</span>
      <span className={cx('round absolute rounded-full bg-accent', size === 'sm' ? 'right-1 top-1 size-[3px]' : size === 'md' ? 'right-1.5 top-1.5 size-1' : 'right-3 top-3 size-2')} />
    </span>
  )
}
