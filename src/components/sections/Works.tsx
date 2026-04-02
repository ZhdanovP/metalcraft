import { Hammer } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { works } from '../../constants/content'

function WorkCard({ category, image }: { category: string; image: string }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-frame/40 bg-surface-raised/55 transition-transform duration-500 hover:scale-[1.02]">
      <div className="relative aspect-[4/3]">
        <img
          src={image}
          alt={`${category} — приклад роботи`}
          className="absolute inset-0 h-full w-full object-cover"
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 rounded-2xl border border-white/25 bg-black/35 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm">
          {category}
        </div>
        <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/30 bg-black/35 text-white backdrop-blur-sm transition-transform duration-300 group-hover:rotate-6">
          <Hammer className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}

export function Works() {
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
              <WorkCard category={w.category} image={w.image} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
