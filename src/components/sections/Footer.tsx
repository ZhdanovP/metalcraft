import { navItems } from '../../constants/content'
import { company } from '../../constants/company'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <div className="text-lg font-semibold text-white">{company.name}</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-200/90">
              Виробництво металевих виробів та металоконструкцій на замовлення в Одесі та по
              всій Україні.
            </div>
          </div>

          <div className="md:justify-self-center">
            <div className="text-sm font-semibold text-white">Швидкі посилання</div>
            <div className="mt-4 grid gap-2">
              {navItems.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className="text-sm text-slate-200/80 hover:text-white transition-colors"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="text-sm font-semibold text-white">Контакти</div>
            <div className="mt-4 space-y-2 text-sm text-slate-200/90">
              <div>
                <span className="text-slate-300/90">Телефон:</span> {company.phone}
              </div>
              <div>
                <span className="text-slate-300/90">Email:</span> {company.email}
              </div>
              <div>
                <span className="text-slate-300/90">Адреса:</span> {company.address}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-200/70">
            © {year} {company.name}. Усі права захищено.
          </div>
          <div className="text-xs text-slate-400">
            Demo-сайт-візитка для прикладу. Дані замінюються в константах.
          </div>
        </div>
      </div>
    </footer>
  )
}

