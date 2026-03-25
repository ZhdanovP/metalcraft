export function isValidPhone(phone: string) {
  const p = phone.replace(/\s+/g, '').trim()
  // Разрешаем варианты: +38XXXXXXXXX или 38XXXXXXXXX или с пробелами/скобками.
  return /^\+?3?8\d{9}$/.test(p) || /^\+?380\d{9}$/.test(p)
}

