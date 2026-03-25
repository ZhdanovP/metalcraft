import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { company } from '../../constants/company'
import { isValidPhone } from '../../utils/validatePhone'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

type FormState = {
  name: string
  phone: string
  comment: string
}

function MessengerIcon({ name }: { name: 'Telegram' | 'Viber' | 'WhatsApp' }) {
  const Icon = useMemo(() => {
    if (name === 'Telegram') return Send
    if (name === 'Viber') return Phone
    return MessageCircle
  }, [name])
  return <Icon className="h-5 w-5" />
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    comment: '',
  })
  const [status, setStatus] = useState<{ type: 'idle' | 'success'; message?: string }>({
    type: 'idle',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const submitEnabled = form.name.trim().length > 0 && form.phone.trim().length > 0 && form.comment.trim().length > 0

  const onChange = (key: keyof FormState, value: string) => {
    setForm((p) => ({ ...p, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
    setStatus({ type: 'idle' })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    const nextErrors: typeof errors = {}
    if (form.name.trim().length < 2) nextErrors.name = 'Укажіть ім’я (мінімум 2 символи).'
    if (!isValidPhone(form.phone)) nextErrors.phone = 'Укажіть коректний номер телефону.'
    if (form.comment.trim().length < 8) nextErrors.comment = 'Коротко опишіть завдання (мінімум 8 символів).'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus({ type: 'idle' })
      return
    }

    setStatus({
      type: 'success',
      message: 'Дякуємо! Заявку надіслано (frontend-заглушка). Ми зв’яжемося з вами найближчим часом.',
    })
    setForm({ name: '', phone: '', comment: '' })
    setErrors({})
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Контакти
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-3 max-w-2xl text-slate-200/90">
              Залиште заявку — ми уточнимо завдання, терміни та підготуємо розрахунок. Працюємо в
              Одесі та по всій Україні.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-graphite-900/30 text-orange-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-300">Телефон</div>
                    <div className="mt-1 text-sm font-semibold text-white">{company.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-graphite-900/30 text-orange-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-300">Email</div>
                    <div className="mt-1 text-sm font-semibold text-white">{company.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-graphite-900/30 text-orange-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-300">Адреса</div>
                    <div className="mt-1 text-sm font-semibold text-white">{company.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-graphite-900/30 text-orange-300">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-300">Години роботи</div>
                    <div className="mt-1 text-sm font-semibold text-white">{company.hours}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-white">Месенджери</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {company.messengers.map((m) => (
                  <a
                    key={m.name}
                    href={m.href}
                    onClick={(e) => {
                      if (m.href === '#') e.preventDefault()
                    }}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/90 hover:border-orange-500/30 hover:bg-white/10"
                    aria-label={m.name}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-graphite-900/30 text-orange-300">
                      <MessengerIcon name={m.name} />
                    </div>
                    {m.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                    <div className="text-sm font-semibold text-white">Швидкий старт</div>
                  <div className="mt-1 text-sm text-slate-200/90">
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

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-7">
            <form id="form" onSubmit={onSubmit} className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-white">Заявка на консультацію</div>
                  <div className="mt-1 text-sm text-slate-200/90">
                    Відповімо та уточнимо деталі. Це frontend-заглушка форми.
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-graphite-900/30 px-3 py-2 text-xs text-slate-200/80">
                  Demo
                </div>
              </div>

              {status.type === 'success' ? (
                <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-4 text-sm text-slate-200/95">
                  <div className="font-semibold text-white">Готово</div>
                  <div className="mt-1">{status.message}</div>
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <div className="text-xs uppercase tracking-wide text-slate-300">Ім’я</div>
                  <input
                    value={form.name}
                    onChange={(e) => onChange('name', e.target.value)}
                    className={`h-12 w-full rounded-2xl border bg-graphite-900/20 px-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-orange-500/50 ${
                      errors.name ? 'border-red-500/60' : 'border-white/10'
                    }`}
                    placeholder="Як до вас звертатися?"
                    required
                  />
                  {errors.name ? (
                    <div className="text-xs text-red-300">{errors.name}</div>
                  ) : null}
                </label>

                <label className="space-y-2">
                  <div className="text-xs uppercase tracking-wide text-slate-300">Телефон</div>
                  <input
                    value={form.phone}
                    onChange={(e) => onChange('phone', e.target.value)}
                    className={`h-12 w-full rounded-2xl border bg-graphite-900/20 px-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-orange-500/50 ${
                      errors.phone ? 'border-red-500/60' : 'border-white/10'
                    }`}
                    placeholder="+38 (0XX) XXX-XX-XX"
                    required
                  />
                  {errors.phone ? (
                    <div className="text-xs text-red-300">{errors.phone}</div>
                  ) : null}
                </label>
              </div>

              <label className="space-y-2">
                <div className="text-xs uppercase tracking-wide text-slate-300">Коментар</div>
                <textarea
                  value={form.comment}
                  onChange={(e) => onChange('comment', e.target.value)}
                  className={`min-h-28 w-full resize-y rounded-2xl border bg-graphite-900/20 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-orange-500/50 ${
                    errors.comment ? 'border-red-500/60' : 'border-white/10'
                  }`}
                  placeholder="Опишіть завдання: тип виробу, розміри, бажані терміни, особливості."
                  required
                />
                {errors.comment ? (
                  <div className="text-xs text-red-300">{errors.comment}</div>
                ) : null}
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs text-slate-300/90">
                  Натискаючи “Надіслати заявку”, ви погоджуєтеся на обробку даних (demo).
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={!submitEnabled}
                  className="disabled:opacity-60 disabled:hover:bg-orange-500"
                >
                  Надіслати заявку
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-200/90">
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

