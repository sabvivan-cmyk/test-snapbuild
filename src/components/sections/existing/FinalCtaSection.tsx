import { ButtonLink } from '../../ui/ButtonLink'
import { Container } from '../../ui/Container'

export function FinalCtaSection() {
  return (
    <section className="section final-cta">
      <Container className="final-cta__inner">
        <div><p className="eyebrow">Начните с вашей дизайн-системы</p><h2>Профессиональные материалы в фирменном стиле за минуты, а не дни</h2><p>Выстройте маркетинг в единый поток — от первой идеи до финального взаимодействия с клиентом.</p></div>
        <ButtonLink href="https://builder.snapbuild.ru/">Начать сейчас</ButtonLink>
      </Container>
    </section>
  )
}
