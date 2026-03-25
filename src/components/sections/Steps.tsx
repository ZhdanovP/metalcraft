import { Reveal } from '../ui/Reveal'
import { steps } from '../../constants/content'

export function Steps() {
  return (
    <section id="steps" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Етапи роботи
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-3 max-w-2xl text-slate-200/90">
              Зрозумілий процес від заявки до монтажу — щоб ви знали, що відбувається на кожному
              етапі.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <Reveal key={s.title}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="absolute right-4 top-4 text-5xl font-semibold text-white/5">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="relative">
                  <div className="text-lg font-semibold text-white">{s.title}</div>
                  <div className="mt-3 text-sm leading-relaxed text-slate-200/85">
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

