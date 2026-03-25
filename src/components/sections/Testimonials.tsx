import { Quote } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { testimonials } from '../../constants/content'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Відгуки
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-3 max-w-2xl text-slate-200/90">
              Коротко про якість і ставлення до завдання. Заглушки — замініть на реальні відгуки
              клієнтів.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-graphite-900/30 text-orange-300">
                    <Quote className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-300/90">клієнт MetalCraft Odesa</div>
                  </div>
                </div>
                <div className="mt-5 text-sm leading-relaxed text-slate-200/85">{t.text}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

