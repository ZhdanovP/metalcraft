export type Messenger = {
  name: 'Telegram' | 'Viber' | 'WhatsApp'
  href: string
}

export const company = {
  name: 'MetalCraft Odesa',
  city: 'Одеса',
  country: 'Україна',
  phone: '+38 (093) 123-45-67',
  email: 'info@metalcraft.od.ua',
  address: 'Одеса, Україна',
  hours: 'Пн–Сб 9:00–18:00',
  messengers: [
    { name: 'Telegram', href: '#' },
    { name: 'Viber', href: '#' },
    { name: 'WhatsApp', href: '#' },
  ] satisfies Messenger[],
} as const

