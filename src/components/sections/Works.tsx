import { Hammer, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { Work } from '../../constants/content'
import { works } from '../../constants/content'
import { Reveal } from '../ui/Reveal'

function WorkCard({
  category,
  image,
  onSelect,
}: {
  category: string
  image: string
  onSelect: () => void
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-frame/40 bg-surface-raised/55 transition-transform duration-500 hover:scale-[1.02]">
      <button
        type="button"
        onClick={onSelect}
        className="relative aspect-[4/3] w-full cursor-zoom-in text-left outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base"
        aria-label={`Збільшити фото: ${category}`}
      >
        <img
          src={image}
          alt={`${category} — приклад роботи`}
          className="absolute inset-0 h-full w-full object-cover"
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />
        <div className="pointer-events-none absolute left-5 top-5 rounded-2xl border border-white/25 bg-black/35 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm">
          {category}
        </div>
        <div className="pointer-events-none absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/30 bg-black/35 text-white backdrop-blur-sm transition-transform duration-300 group-hover:rotate-6">
          <Hammer className="h-5 w-5" />
        </div>
      </button>
    </div>
  )
}

export function Works() {
  const [lightbox, setLightbox] = useState<Work | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!lightbox) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    closeBtnRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [lightbox])

  return (
    <section id="works" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-fg-primary sm:text-3xl">
              Наші роботи
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-3 max-w-2xl text-fg-secondary">
              Фрагменти виконаних робіт за основними напрямами — від типових конструкцій до індивідуальних
              рішень на замовлення.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <Reveal key={w.category}>
              <WorkCard category={w.category} image={w.image} onSelect={() => setLightbox(w)} />
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.category}
          onClick={() => setLightbox(null)}
        >
          <button
            ref={closeBtnRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox(null)
            }}
            className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/25 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:right-5 sm:top-5"
            aria-label="Закрити перегляд"
          >
            <X className="h-6 w-6" strokeWidth={2} />
          </button>

          <div
            className="relative flex max-h-[min(90vh,900px)] w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.image}
              alt={`${lightbox.category} — збільшений перегляд`}
              className="max-h-[min(82vh,820px)] w-full rounded-2xl border border-white/15 object-contain shadow-2xl"
              width={1600}
              height={1200}
              decoding="async"
            />
            <p className="mt-4 text-center text-sm font-medium text-white/90">{lightbox.category}</p>
          </div>
        </div>
      ) : null}
    </section>
  )
}
