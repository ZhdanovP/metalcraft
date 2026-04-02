import { navItems } from '../../constants/content'
import { company } from '../../constants/company'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-frame/40 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <div className="text-lg font-semibold text-fg-primary">{company.name}</div>
            <div className="mt-2 text-sm leading-relaxed text-fg-secondary">
              Виробництво металевих виробів та металоконструкцій на замовлення в Одесі та по
              всій Україні.
            </div>
          </div>

          <div className="md:justify-self-center">
            <div className="text-sm font-semibold text-fg-primary">Швидкі посилання</div>
            <div className="mt-4 grid gap-2">
              {navItems.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="text-sm font-semibold text-fg-primary">Контакти</div>
            <div className="mt-4 space-y-2 text-sm text-fg-secondary">
              <div>
                <span className="text-fg-muted">Телефон:</span> {company.phone}
              </div>
              <div>
                <span className="text-fg-muted">Email:</span> {company.email}
              </div>
              <div>
                <span className="text-fg-muted">Адреса:</span> {company.address}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-frame/40 pt-6">
          <div className="text-sm text-fg-secondary">
            © {year} {company.name}. Усі права захищено.
          </div>
        </div>
      </div>
    </footer>
  )
}
