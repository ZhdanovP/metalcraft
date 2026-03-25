import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
  leftIcon?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  className = '',
  children,
  type,
  ...rest
}: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-graphite-900'

  const byVariant: Record<NonNullable<Props['variant']>, string> = {
    primary:
      'bg-orange-500 text-white hover:bg-orange-400 shadow-soft',
    secondary:
      'bg-white/5 text-slate-100 border border-white/10 hover:bg-white/10',
    ghost:
      'bg-transparent text-slate-100 hover:bg-white/5 border border-transparent hover:border-white/10',
  }

  const bySize: Record<NonNullable<Props['size']>, string> = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-5 text-base',
  }

  return (
    <button
      type={type ?? 'button'}
      className={`${base} ${byVariant[variant]} ${bySize[size]} ${className}`}
      {...rest}
    >
      {leftIcon ? <span className="flex items-center">{leftIcon}</span> : null}
      {children}
    </button>
  )
}

