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
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center lg:max-w-4xl">
          <div className="flex w-full flex-col items-center space-y-6 lg:space-y-8">
            <div className="space-y-6">
              <Reveal className="flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-frame/40 bg-surface-raised/70 px-4 py-2 text-sm text-fg-secondary">
                  <Wrench className="h-4 w-4 shrink-0 text-accent" />
                  Виробництво металоконструкцій на замовлення
                </div>
              </Reveal>

              <Reveal className="">
                <h1 className="text-balance text-3xl font-semibold leading-tight text-fg-primary sm:text-4xl lg:text-5xl">
                  Металоконструкції та вироби з металу на замовлення в {company.cityLocative}
                </h1>
              </Reveal>

              <Reveal>
                <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-fg-secondary sm:text-lg">
                  Проєктування, виготовлення, зварювання, монтаж. Працюємо з приватними клієнтами та
                  бізнесом в Одесі й по всій Україні.
                </p>
              </Reveal>

              <Reveal className="flex justify-center">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button variant="primary" size="md" onClick={onConsult}>
                    Отримати консультацію
                  </Button>
                  <Button variant="secondary" size="md" onClick={onWorks}>
                    Наші роботи
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal className="w-full">
              <div className="mx-auto grid w-full max-w-3xl gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-frame/40 bg-surface-raised/75 p-4 text-center">
                  <div className="text-xs uppercase tracking-wide text-fg-muted">
                    Матеріали
                  </div>
                  <div className="mt-1 text-sm font-semibold text-fg-primary">Перевірені</div>
                  <div className="mt-1 text-sm text-fg-secondary">
                    від погодження до результату
                  </div>
                </div>
                <div className="rounded-2xl border border-frame/40 bg-surface-raised/75 p-4 text-center">
                  <div className="text-xs uppercase tracking-wide text-fg-muted">
                    Виконання
                  </div>
                  <div className="mt-1 text-sm font-semibold text-fg-primary">Точно за проєктом</div>
                  <div className="mt-1 text-sm text-fg-secondary">
                    контроль якості на етапах
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
