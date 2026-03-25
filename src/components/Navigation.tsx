import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import type { NavItem } from '../constants/content'
import { scrollToId } from '../utils/scrollToId'

export function Navigation({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? 'about')

  const ids = useMemo(() => items.map((i) => i.id), [items])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const headerOffset = 110
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
        <div className="mt-3 rounded-2xl border border-white/10 bg-graphite-900/70 backdrop-blur">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-5">
            <button
              type="button"
              className="text-left"
              onClick={() => go('top')}
              aria-label="На головну"
            >
              <div className="text-sm font-semibold text-white">MetalCraft Odesa</div>
              <div className="text-xs text-slate-300/90">Металоконструкції на замовлення</div>
            </button>

            <div className="hidden items-center gap-7 lg:flex">
              <nav aria-label="Навігація" className="flex items-center gap-5">
                {items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => go(item.id)}
                    className={`text-sm font-medium transition-colors ${
                      activeId === item.id ? 'text-white' : 'text-slate-200/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <Button
                variant="primary"
                size="md"
                onClick={() => go('contact')}
                className="shrink-0"
              >
                Отримати консультацію
              </Button>
            </div>

            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100"
                aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {open ? (
            <div className="border-t border-white/10 px-4 pb-4 pt-3 lg:hidden">
              <div className="grid gap-2">
                {items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => go(item.id)}
                    className={`rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors ${
                      activeId === item.id ? 'bg-white/10 text-white' : 'text-slate-200/90 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => go('contact')}
                  className="mt-2 w-full"
                >
                  Отримати консультацію
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

