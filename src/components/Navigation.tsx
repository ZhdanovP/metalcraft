import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import type { NavItem } from '../constants/content'
import { company } from '../constants/company'
import { scrollToId } from '../utils/scrollToId'

function NavLogo({ companyName, className }: { companyName: string; className: string }) {
  return (
    <img
      src="/logo.png"
      alt={`${companyName} — металоконструкції на замовлення`}
      className={className}
      width={220}
      height={72}
      loading="eager"
      decoding="async"
    />
  )
}

export function Navigation({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? 'about')

  const ids = useMemo(() => items.map((i) => i.id), [items])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const headerOffset = window.innerWidth >= 1024 ? 100 : 96
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top - headerOffset <= y) current = id
      }
      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])

  const go = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-3 rounded-2xl border border-frame/45 bg-surface-raised/92 backdrop-blur-md">
          {/* Mobile: один ряд — бренд + бургер */}
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-5 lg:hidden">
            <button
              type="button"
              className="flex min-w-0 items-center text-left"
              onClick={() => go('top')}
              aria-label="На головну"
            >
              <NavLogo
                companyName={company.name}
                className="h-9 w-auto max-h-9 max-w-[min(100%,200px)] object-contain object-left sm:h-10 sm:max-h-10 sm:max-w-[220px]"
              />
            </button>

            <div>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-frame/45 bg-surface-base/50 text-fg-primary"
                aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Desktop: один ряд — логотип зліва, навігація праворуч */}
          <div className="hidden min-h-[4rem] items-center gap-4 px-4 py-2.5 sm:px-5 lg:flex xl:gap-6">
            <button
              type="button"
              className="flex shrink-0 items-center text-left"
              onClick={() => go('top')}
              aria-label="На головну"
            >
              <NavLogo
                companyName={company.name}
                className="h-9 w-auto max-h-9 max-w-[200px] object-contain object-left xl:h-10 xl:max-h-10 xl:max-w-[220px]"
              />
            </button>
            <nav
              aria-label="Навігація"
              className="min-w-0 flex-1 overflow-x-auto overscroll-x-contain py-0.5 [scrollbar-width:thin]"
            >
              <div className="flex w-max min-w-full items-center justify-end gap-2 xl:gap-3 2xl:gap-4">
                {items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => go(item.id)}
                    className={`shrink-0 whitespace-nowrap text-[13px] font-medium leading-tight tracking-tight transition-colors xl:text-sm ${
                      activeId === item.id
                        ? 'text-fg-primary'
                        : 'text-fg-secondary hover:text-fg-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {open ? (
            <div className="border-t border-frame/40 px-4 pb-4 pt-3 lg:hidden">
              <div className="grid gap-2">
                {items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => go(item.id)}
                    className={`rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors ${
                      activeId === item.id
                        ? 'bg-surface-base/60 text-fg-primary'
                        : 'text-fg-secondary hover:bg-surface-base/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
