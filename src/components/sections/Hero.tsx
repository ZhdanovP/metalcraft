import { Wrench } from 'lucide-react'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { company } from '../../constants/company'

export function Hero({
  onConsult,
  onWorks,
}: {
  onConsult: () => void
  onWorks: () => void
}) {
  return (
    <section id="top" className="relative pt-28 sm:pt-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200/90">
                <Wrench className="h-4 w-4 text-orange-300" />
                Виробництво металоконструкцій на замовлення
              </div>
            </Reveal>

            <Reveal className="">
              <h1 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Металоконструкції та вироби з металу на замовлення в {company.city}
              </h1>
            </Reveal>

            <Reveal>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-slate-200/90 sm:text-lg">
                Проєктування, виготовлення, зварювання, монтаж. Працюємо з приватними клієнтами та
                бізнесом в Одесі й по всій Україні.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button variant="primary" size="md" onClick={onConsult}>
                  Отримати консультацію
                </Button>
                <Button variant="secondary" size="md" onClick={onWorks}>
                  Наші роботи
                </Button>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-300">
                    Матеріали
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">Перевірені</div>
                  <div className="mt-1 text-sm text-slate-200/80">
                    від погодження до результату
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-300">
                    Виконання
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">Точно за проєктом</div>
                  <div className="mt-1 text-sm text-slate-200/80">
                    контроль якості на етапах
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
              <div className="pointer-events-none absolute inset-0 opacity-50">
                <div className="absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-orange-500/15 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-slate-100">Керівник компанії</div>
                    <div className="mt-0.5 text-xs text-slate-400">{company.name}</div>
                  </div>
                  <div className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/90">
                    {company.city}
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/30">
                  <img
                    src="/ceo.png"
                    alt={`Керівник ${company.name}`}
                    className="h-auto w-full max-h-[420px] object-cover object-top sm:max-h-[480px]"
                    width={800}
                    height={1000}
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { k: 'Проєктування', v: 'за кресленнями' },
                    { k: 'Зварювання', v: 'контроль швів' },
                    { k: 'Обробка', v: 'точність розмірів' },
                    { k: 'Монтаж', v: 'з дотриманням термінів' },
                  ].map((item) => (
                    <div
                      key={item.k}
                      className="rounded-2xl border border-white/10 bg-graphite-900/30 p-4"
                    >
                      <div className="text-xs uppercase tracking-wide text-slate-300">
                        {item.k}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-white">{item.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-orange-500/15 flex items-center justify-center border border-orange-500/20">
                      <span className="text-orange-300 font-semibold">MC</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Терміни та якість</div>
                      <div className="text-sm text-slate-200/80">
                        Узгодимо завдання та підготуємо виробництво без зайвих затримок.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

