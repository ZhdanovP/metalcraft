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
  /** Для картки та карти в блоці Контакти */
  address: 'Одеса, Приморський район, Україна',
  /** OpenStreetMap embed (при потребі змініть bbox / marker у редакторі OSM) */
  mapEmbedSrc:
    'https://www.openstreetmap.org/export/embed.html?bbox=30.715%2C46.465%2C30.785%2C46.498&layer=mapnik&marker=46.4825%2C30.751',
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

