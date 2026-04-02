export type Messenger = {
  name: 'Telegram' | 'Viber' | 'Instagram'
  href: string
}

/** Без + та пробілів, для посилання Viber */
const phoneDigits = '380974534693'

export const company = {
  name: 'SolidMetal Odesa',
  city: 'Одеса',
  country: 'Україна',
  phone: '+38 (097) 453-46-93',
  email: 'platinagontar@gmail.com',
  address: 'Одеса, Україна',
  hours: 'Пн–Сб 9:00–18:00',
  messengers: [
    { name: 'Telegram', href: 'https://t.me/SolidMetalOd' },
    { name: 'Viber', href: `viber://chat?number=${phoneDigits}` },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/solidmetalod?igsh=MXg4eDRmc25saGdhbg%3D%3D&utm_source=qr',
    },
  ] satisfies Messenger[],
} as const

