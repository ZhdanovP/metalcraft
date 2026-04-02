/** 12 цифр: 380 + 9 національних, або null */
export function normalizeUAPhone(phone: string): string | null {
  const d = phone.replace(/\D/g, '')
  if (d.length === 12 && d.startsWith('380')) return d
  if (d.length === 10 && d.startsWith('0')) return '380' + d.slice(1)
  if (d.length === 9) return '380' + d
  return null
}

export function isValidPhone(phone: string): boolean {
  return normalizeUAPhone(phone) !== null
}

/**
 * Для поля після префікса +380: до 9 національних цифр.
 * Підтримує вставку 0669874567, +38 (066) …, 38066…
 */
export function extractUAPhoneSuffix(raw: string): string {
  const d = raw.replace(/\D/g, '')
  if (!d) return ''

  if (d.startsWith('380')) {
    return d.length <= 3 ? '' : d.slice(3, 12)
  }

  if (d.startsWith('0')) {
    return d.slice(1, 10)
  }

  return d.slice(0, 9)
}

export function isValidUAPhoneSuffix(suffix: string): boolean {
  return suffix.length === 9 && /^\d{9}$/.test(suffix)
}
