import { Eye, Hammer } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { works } from '../../constants/content'

function WorkCard({ category }: { category: string }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="relative aspect-[4/3]">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-graphite-900/30 px-3 py-2 text-xs font-medium text-slate-200/90">
          Заглушка / {category}
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
          <div className="text-sm font-semibold text-white">{category}</div>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-orange-300 transition-transform duration-300 group-hover:rotate-6">
            <Hammer className="h-5 w-5" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute right-4 top-4 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-slate-200/90 flex items-center gap-2">
            <Eye className="h-4 w-4 text-orange-300" />
            Попередній перегляд
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-white">{category}</div>
            <div className="text-xs text-slate-300/90">виготовлення на замовлення</div>
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
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Наші роботи
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-3 max-w-2xl text-slate-200/90">
              Приклади категорій. Використовуємо заглушки зображень, але картки вже готові до
              заміни на реальні фото проєктів.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <Reveal key={w.category}>
              <div className="transition-transform duration-500 group-hover:scale-[1.02]">
                <WorkCard category={w.category} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

