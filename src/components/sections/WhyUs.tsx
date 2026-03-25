import { Clock, FileText, ShieldCheck, Truck, User, Wrench } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { benefits } from '../../constants/content'

const icons = [User, Clock, Wrench, ShieldCheck, FileText, Truck]

export function WhyUs() {
  return (
    <section id="why" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Чому обирають нас
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-3 max-w-2xl text-slate-200/90">
              Робимо метал так, щоб він був безпечним, точним і готовим до монтажу.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, idx) => {
            const Icon = icons[idx] ?? ShieldCheck
            return (
              <Reveal key={b.title}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-graphite-900/30">
                      <Icon className="h-5 w-5 text-orange-300" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-lg font-semibold text-white">{b.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-200/85">
                      {b.description}
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

