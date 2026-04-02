import { Clock, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react'
import { useMemo } from 'react'
import { company } from '../../constants/company'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

function MessengerIcon({ name }: { name: 'Telegram' | 'Viber' | 'Instagram' }) {
  const Icon = useMemo(() => {
    if (name === 'Telegram') return Send
    if (name === 'Viber') return Phone
    return Instagram
  }, [name])
  return <Icon className="h-5 w-5" />
}

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-fg-primary sm:text-3xl">
              Контакти
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-3 max-w-2xl text-fg-secondary">
              Зв’яжіться з нами — уточнимо завдання, терміни та умови. Працюємо в Одесі та по всій
              Україні.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto flex max-w-lg flex-col items-center gap-6">
          <div className="w-full rounded-3xl border border-frame/40 bg-surface-raised/65 p-6">
            <div className="grid gap-6">
              <div className="flex items-start gap-3 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-frame/35 bg-surface-base/40 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wide text-fg-muted">Телефон</div>
                  <div className="mt-1 text-sm font-semibold text-fg-primary">{company.phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-frame/35 bg-surface-base/40 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0 break-words">
                  <div className="text-xs uppercase tracking-wide text-fg-muted">Email</div>
                  <div className="mt-1 text-sm font-semibold text-fg-primary">{company.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-frame/35 bg-surface-base/40 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wide text-fg-muted">Адреса</div>
                  <div className="mt-1 text-sm font-semibold text-fg-primary">{company.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-frame/35 bg-surface-base/40 text-accent">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wide text-fg-muted">Години роботи</div>
                  <div className="mt-1 text-sm font-semibold text-fg-primary">{company.hours}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-frame/35 pt-6">
              <div className="text-xs uppercase tracking-wide text-fg-muted">На карті</div>
              <div className="mt-1 text-sm font-medium text-fg-primary">{company.address}</div>
              <div className="mt-3 overflow-hidden rounded-2xl border border-frame/40 bg-surface-base/30">
                <iframe
                  title="Карта: Одеса, Приморський район"
                  src={company.mapEmbedSrc}
                  className="h-40 w-full border-0 sm:h-48"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=46.4825&mlon=30.751&zoom=13"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs text-fg-muted underline-offset-2 hover:text-fg-secondary hover:underline"
              >
                Відкрити карту в OpenStreetMap
              </a>
            </div>
          </div>

          <div className="w-full rounded-3xl border border-frame/40 bg-surface-raised/65 p-6">
            <div className="text-center text-sm font-semibold text-fg-primary">Месенджери</div>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {company.messengers.map((m) => (
                <a
                  key={m.name}
                  href={m.href}
                  target={m.href.startsWith('https://') ? '_blank' : undefined}
                  rel={m.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-2xl border border-frame/40 bg-surface-base/35 px-4 py-3 text-sm text-fg-secondary transition-colors hover:border-accent/40 hover:bg-surface-raised/80"
                  aria-label={m.name}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-frame/35 bg-surface-base/40 text-accent">
                    <MessengerIcon name={m.name} />
                  </div>
                  {m.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <div className="max-w-md text-sm text-fg-secondary">
            Потрібно терміново? Телефонуйте або напишіть у месенджер — уточнимо деталі щодо завдання.
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              variant="secondary"
              size="md"
              onClick={() => {
                window.location.href = `tel:${company.phone.replace(/[^\d+]/g, '')}`
              }}
            >
              Зателефонувати
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                window.location.href = `mailto:${company.email}`
              }}
            >
              Написати на email
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
