import { Clock, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react'
import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { company } from '../../constants/company'
import { extractUAPhoneSuffix, isValidUAPhoneSuffix } from '../../utils/validatePhone'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

type FormState = {
  name: string
  phone: string
  comment: string
}

function MessengerIcon({ name }: { name: 'Telegram' | 'Viber' | 'Instagram' }) {
  const Icon = useMemo(() => {
    if (name === 'Telegram') return Send
    if (name === 'Viber') return Phone
    return Instagram
  }, [name])
  return <Icon className="h-5 w-5" />
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    comment: '',
  })
  const [status, setStatus] = useState<
    { type: 'idle' } | { type: 'success'; message: string } | { type: 'error'; message: string }
  >({ type: 'idle' })
  const [submitting, setSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const submitEnabled =
    form.name.trim().length > 0 &&
    isValidUAPhoneSuffix(form.phone) &&
    form.comment.trim().length > 0

  const onChange = (key: keyof FormState, value: string) => {
    setForm((p) => ({ ...p, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
    setStatus({ type: 'idle' })
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const nextErrors: typeof errors = {}
    if (form.name.trim().length < 2) nextErrors.name = 'Укажіть ім’я (мінімум 2 символи).'
    if (!isValidUAPhoneSuffix(form.phone)) {
      nextErrors.phone = 'Введіть 9 цифр номера після +380 (можна вставити 0669874567 — розпізнаємо автоматично).'
    }
    if (form.comment.trim().length < 8) nextErrors.comment = 'Коротко опишіть завдання (мінімум 8 символів).'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus({ type: 'idle' })
      return
    }

    setSubmitting(true)
    setStatus({ type: 'idle' })

    const phoneE164 = `+380${form.phone}`
    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(company.email)}`

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: phoneE164,
          message: form.comment.trim(),
          _subject: `Заявка з сайту — ${company.name}`,
          _template: 'table',
          _captcha: false,
        }),
      })

      const data = (await res.json().catch(() => null)) as
        | { success?: boolean | string; message?: string }
        | null

      const ok =
        res.ok &&
        data &&
        data.success !== false &&
        data.success !== 'false'

      if (!ok) {
        throw new Error(data?.message || 'Не вдалося надіслати заявку. Спробуйте пізніше або зателефонуйте.')
      }

      setStatus({
        type: 'success',
        message: 'Дякуємо! Заявку надіслано на email. Ми зв’яжемося з вами найближчим часом.',
      })
      setForm({ name: '', phone: '', comment: '' })
      setErrors({})
    } catch {
      setStatus({
        type: 'error',
        message:
          'Не вдалося надіслати заявку. Перевірте з’єднання або напишіть на email / зателефонуйте — контакти ліворуч.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const fieldBase =
    'h-12 w-full rounded-2xl border px-4 text-sm text-fg-primary placeholder:text-fg-muted outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/25'

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-fg-primary sm:text-3xl">
              Контакти
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-3 max-w-2xl text-fg-secondary">
              Залиште заявку — ми уточнимо завдання, терміни та підготуємо розрахунок. Працюємо в
              Одесі та по всій Україні.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <div className="rounded-3xl border border-frame/40 bg-surface-raised/65 p-6">
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-frame/35 bg-surface-base/40 text-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-fg-muted">Телефон</div>
                    <div className="mt-1 text-sm font-semibold text-fg-primary">{company.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-frame/35 bg-surface-base/40 text-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-fg-muted">Email</div>
                    <div className="mt-1 text-sm font-semibold text-fg-primary">{company.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-frame/35 bg-surface-base/40 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-fg-muted">Адреса</div>
                    <div className="mt-1 text-sm font-semibold text-fg-primary">{company.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-frame/35 bg-surface-base/40 text-accent">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-fg-muted">Години роботи</div>
                    <div className="mt-1 text-sm font-semibold text-fg-primary">{company.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-frame/40 bg-surface-raised/65 p-6">
              <div className="text-sm font-semibold text-fg-primary">Месенджери</div>
              <div className="mt-4 flex flex-wrap gap-3">
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

            <div className="rounded-3xl border border-accent/30 bg-accent/10 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-fg-primary">Швидкий старт</div>
                  <div className="mt-1 text-sm text-fg-secondary">
                    Якщо є креслення — додайте інформацію в коментарі.
                  </div>
                  <div className="mt-4">
                    <Button variant="secondary" size="md" onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}>
                      Перейти до форми
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-frame/40 bg-surface-raised/65 p-6 lg:p-7">
            <form id="form" onSubmit={onSubmit} className="space-y-5">
              <div>
                <div className="text-sm font-semibold text-fg-primary">Заявка на консультацію</div>
                <div className="mt-1 text-sm text-fg-secondary">
                  Відповімо та уточнимо деталі найближчим часом.
                </div>
              </div>

              {status.type === 'success' ? (
                <div className="rounded-2xl border border-accent/35 bg-accent/12 p-4 text-sm text-fg-secondary">
                  <div className="font-semibold text-fg-primary">Готово</div>
                  <div className="mt-1">{status.message}</div>
                </div>
              ) : null}
              {status.type === 'error' ? (
                <div className="rounded-2xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-fg-secondary">
                  <div className="font-semibold text-fg-primary">Помилка відправки</div>
                  <div className="mt-1">{status.message}</div>
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <div className="text-xs uppercase tracking-wide text-fg-muted">Ім’я</div>
                  <input
                    value={form.name}
                    onChange={(e) => onChange('name', e.target.value)}
                    className={`${fieldBase} bg-surface-base/35 ${
                      errors.name ? 'border-red-400/70' : 'border-frame/45'
                    }`}
                    placeholder="Як до вас звертатися?"
                    required
                  />
                  {errors.name ? (
                    <div className="text-xs text-red-300">{errors.name}</div>
                  ) : null}
                </label>

                <label className="space-y-2">
                  <div className="text-xs uppercase tracking-wide text-fg-muted">Телефон</div>
                  <div
                    className={`flex h-12 w-full overflow-hidden rounded-2xl border bg-surface-base/35 outline-none focus-within:border-accent/60 focus-within:ring-1 focus-within:ring-accent/25 ${
                      errors.phone ? 'border-red-400/70' : 'border-frame/45'
                    }`}
                  >
                    <span
                      className="flex shrink-0 items-center border-r border-frame/45 bg-surface-base/50 px-3 text-sm tabular-nums text-fg-secondary"
                      aria-hidden
                    >
                      +380
                    </span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      aria-label="Номер без коду країни: 9 цифр після +380"
                      value={form.phone}
                      onChange={(e) => onChange('phone', extractUAPhoneSuffix(e.target.value))}
                      className="min-w-0 flex-1 border-0 bg-transparent px-3 text-sm text-fg-primary outline-none placeholder:text-fg-muted"
                      placeholder="66 987 45 67"
                      required
                    />
                  </div>
                  {errors.phone ? (
                    <div className="text-xs text-red-300">{errors.phone}</div>
                  ) : null}
                </label>
              </div>

              <label className="space-y-2">
                <div className="text-xs uppercase tracking-wide text-fg-muted">Коментар</div>
                <textarea
                  value={form.comment}
                  onChange={(e) => onChange('comment', e.target.value)}
                  className={`min-h-28 w-full resize-y rounded-2xl border bg-surface-base/35 px-4 py-3 text-sm text-fg-primary placeholder:text-fg-muted outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/25 ${
                    errors.comment ? 'border-red-400/70' : 'border-frame/45'
                  }`}
                  placeholder="Опишіть завдання: тип виробу, розміри, бажані терміни, особливості."
                  required
                />
                {errors.comment ? (
                  <div className="text-xs text-red-300">{errors.comment}</div>
                ) : null}
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs text-fg-muted">
                  Натискаючи “Надіслати заявку”, ви погоджуєтеся на обробку персональних даних.
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={!submitEnabled || submitting}
                  className="disabled:opacity-50 disabled:hover:brightness-100"
                >
                  {submitting ? 'Надсилаємо…' : 'Надіслати заявку'}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-fg-secondary">
            Потрібно терміново? Телефонуйте або напишіть у месенджер — уточнимо деталі щодо завдання.
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" size="md" onClick={() => window.location.href = `tel:${company.phone.replace(/[^\d+]/g, '')}`}>
              Зателефонувати
            </Button>
            <Button variant="primary" size="md" onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}>
              Отримати консультацію
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
