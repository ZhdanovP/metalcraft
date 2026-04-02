import { Fence, Hammer, Package, Ruler, Truck, Wrench } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { services } from '../../constants/content'

const icons = [Hammer, Wrench, Ruler, Fence, Package, Truck]

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-fg-primary sm:text-3xl">
              Послуги
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-3 max-w-2xl text-center text-fg-secondary">
              Виготовляємо металоконструкції та виконуємо металообробку на замовлення —
              за ескізами, кресленнями або технічним завданням.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = icons[idx] ?? Hammer
            return (
              <Reveal key={s.title} className="h-full">
                <div className="group flex h-full flex-col rounded-3xl border border-frame/40 bg-surface-raised/60 p-6 transition-colors hover:border-accent/35 hover:bg-surface-raised/85">
                  <div className="flex flex-1 items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-frame/35 bg-surface-base/40">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-fg-primary">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
