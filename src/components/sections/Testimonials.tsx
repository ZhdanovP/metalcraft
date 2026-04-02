import { Reveal } from '../ui/Reveal'
import { testimonials } from '../../constants/content'
import { company } from '../../constants/company'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-fg-primary sm:text-3xl">
              Відгуки
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-frame/40 bg-surface-raised/60 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-2xl border border-frame/35 bg-surface-base/40">
                    <img
                      src={t.photo}
                      alt=""
                      className="h-full w-full object-cover"
                      width={40}
                      height={40}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-fg-primary">{t.name}</div>
                    <div className="text-xs text-fg-muted">клієнт {company.name}</div>
                  </div>
                </div>
                <div className="mt-5 text-sm leading-relaxed text-fg-secondary">{t.text}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
