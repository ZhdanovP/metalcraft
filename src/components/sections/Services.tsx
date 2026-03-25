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
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Послуги
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-3 max-w-2xl text-slate-200/90">
              Виготовляємо металоконструкції та виконуємо металообробку на замовлення —
              за ескізами, кресленнями або технічним завданням.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = icons[idx] ?? Hammer
            return (
              <Reveal key={s.title} className="">
                <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-orange-500/30 hover:bg-white/7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-graphite-900/30">
                      <Icon className="h-5 w-5 text-orange-300" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-200/85">
                        {s.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
                  <div className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-300">
                    виробництво та контроль якості
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

