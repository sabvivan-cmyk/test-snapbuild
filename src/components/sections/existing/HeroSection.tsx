import { ButtonLink } from '../../ui/ButtonLink'
import { Container } from '../../ui/Container'

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <Container>
        <div className="hero__copy">
          <h1>Платформа, где всё создаётся в рамках вашего бренда и дизайн-системы</h1>
          <p className="hero__lead">Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды мог создавать профессиональные материалы за минуты, а не дни.</p>
          <ButtonLink href="https://builder.snapbuild.ru/">Начать сейчас</ButtonLink>
        </div>
        <div className="product-window hero__visual" aria-label="Предварительный просмотр интерфейса Snapbuild">
          <div className="hero-builder">
            <div className="hero-builder__sidebar"><strong>снэпбилд</strong><i /><i /><i /><i /><i /><i /></div>
            <div className="hero-builder__canvas">
              <strong>Алексей, создадим что-то новое?</strong>
              <div className="hero-builder__prompt">Опишите, что вы хотите сгенерировать… <span>→</span></div>
              <div className="hero-builder__modes"><span>Веб-сайт</span><span>Изображение</span><span>Видео</span><span>Презентация</span></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
