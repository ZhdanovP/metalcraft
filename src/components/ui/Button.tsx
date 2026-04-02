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
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base'

  const byVariant: Record<NonNullable<Props['variant']>, string> = {
    primary:
      'bg-accent text-fg-primary shadow-soft hover:brightness-110 active:brightness-95',
    secondary:
      'border border-frame/50 bg-surface-raised/70 text-fg-primary hover:border-frame/70 hover:bg-surface-raised',
    ghost:
      'border border-transparent bg-transparent text-fg-primary hover:border-frame/40 hover:bg-surface-raised/50',
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
