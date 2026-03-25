import { Reveal } from '../ui/Reveal'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Про компанію
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-base leading-relaxed text-slate-200/90">
                Виготовляємо металеві вироби та конструкції на замовлення. Працюємо з індивідуальними
                проєктами, дотримуємося точності виконання та використовуємо якісні матеріали.
                Підготовляємо вироби з урахуванням креслень і вимог об’єкта, щоб монтаж пройшов без
                зайвих затримок.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-base leading-relaxed text-slate-200/90">
                Працюємо в Одесі та по всій Україні: від розробки рішення до виготовлення,
                доставки та встановлення.
              </p>
            </Reveal>

            <Reveal>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Індивідуальні замовлення',
                  'Якісні матеріали',
                  'Точність виконання',
                  'Дотримання термінів',
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="text-sm font-semibold text-white">{t}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-soft">
              <div className="text-xs uppercase tracking-wide text-slate-300">Фокус</div>
              <div className="mt-3 space-y-3">
                {[
                  'Проєктування',
                  'Виготовлення та зварювання',
                  'Підготовка до монтажу',
                  'Контроль якості',
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-orange-400/90" />
                    <div className="text-slate-100">{t}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-graphite-900/30 p-4">
                <div className="text-xs uppercase tracking-wide text-slate-300">
                  Географія
                </div>
                <div className="mt-2 text-sm font-semibold text-white">
                  Одеса + вся Україна
                </div>
                <div className="mt-1 text-sm text-slate-200/80">
                  Доставка та монтаж залежать від обсягу робіт і умов об’єкта.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

