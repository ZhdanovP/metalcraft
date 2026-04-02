import { Reveal } from '../ui/Reveal'
import { steps } from '../../constants/content'

export function Steps() {
  return (
    <section id="steps" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-fg-primary sm:text-3xl">
              Етапи роботи
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-3 max-w-2xl text-fg-secondary">
              Зрозумілий процес від заявки до монтажу — щоб ви знали, що відбувається на кожному
              етапі.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <Reveal key={s.title}>
              <div className="relative overflow-hidden rounded-3xl border border-frame/40 bg-surface-raised/60 p-6">
                <div className="absolute right-4 top-4 text-5xl font-semibold text-fg-primary/[0.06]">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="relative">
                  <div className="text-lg font-semibold text-fg-primary">{s.title}</div>
                  <div className="mt-3 text-sm leading-relaxed text-fg-secondary">
                    {s.description}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
