import { Reveal } from '../ui/Reveal'
import { company } from '../../constants/company'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-fg-primary sm:text-3xl">
                Про компанію
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-base leading-relaxed text-fg-secondary">
                Виготовляємо металеві вироби та конструкції на замовлення. Працюємо з індивідуальними
                проєктами, дотримуємося точності виконання та використовуємо якісні матеріали.
                Підготовляємо вироби з урахуванням креслень і вимог об’єкта, щоб монтаж пройшов без
                зайвих затримок.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-base leading-relaxed text-fg-secondary">
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
                    className="rounded-2xl border border-frame/40 bg-surface-raised/70 px-4 py-3"
                  >
                    <div className="text-sm font-semibold text-fg-primary">{t}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-frame/40 bg-surface-base/35 p-4">
                <div className="text-xs uppercase tracking-wide text-fg-muted">Географія</div>
                <div className="mt-2 text-sm font-semibold text-fg-primary">
                  Одеса + вся Україна
                </div>
                <div className="mt-1 text-sm text-fg-secondary">
                  Доставка та монтаж залежать від обсягу робіт і умов об’єкта.
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-frame/40 bg-surface-raised/45 shadow-soft">
              <div className="pointer-events-none absolute inset-0 opacity-50">
                <div className="absolute -right-16 top-1/4 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
              </div>
              <img
                src="/ceo.jpg"
                alt={`Керівник компанії — ${company.name}`}
                className="relative h-auto w-full max-h-[min(520px,70vh)] object-cover object-top"
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
