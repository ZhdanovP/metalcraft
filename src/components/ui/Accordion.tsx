import { useId, useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function Accordion({
  items,
  defaultOpenId,
}: {
  items: Array<{ id: string; q: string; a: string }>
  defaultOpenId?: string
}) {
  const baseId = useId()
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const rendered = useMemo(
    () =>
      items.map((item) => {
        const isOpen = openId === item.id
        const buttonId = `${baseId}-${item.id}-button`
        const panelId = `${baseId}-${item.id}-panel`

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-frame/40 bg-surface-raised/80"
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-fg-primary">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 text-accent transition-transform ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden px-5 pb-4 text-fg-secondary">
                {item.a}
              </div>
            </div>
          </div>
        )
      }),
    [baseId, items, openId],
  )

  return <div className="grid gap-3 sm:gap-4">{rendered}</div>
}
