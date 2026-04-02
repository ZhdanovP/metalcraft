import { Reveal } from '../ui/Reveal'
import { Accordion } from '../ui/Accordion'
import { faqs } from '../../constants/content'

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-fg-primary sm:text-3xl">
              Поширені запитання
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-3 max-w-2xl text-fg-secondary">
              Відповіді на часті питання перед тим, як ви надішлете заявку.
            </p>
          </Reveal>
        </div>

        <Accordion
          items={faqs.map((x, idx) => ({
            id: `faq-${idx}`,
            q: x.q,
            a: x.a,
          }))}
          defaultOpenId="faq-0"
        />
      </div>
    </section>
  )
}
