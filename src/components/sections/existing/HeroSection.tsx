import heroImage from '../../../assets/snapbuild/hero-snapbuild-2026-08-07-v2.webp'
import logoAvito from '../../../assets/snapbuild/logo-avito.svg'
import logoCian from '../../../assets/snapbuild/logo-cian.svg'
import logoLenta from '../../../assets/snapbuild/logo-lenta.svg'
import { ButtonLink } from '../../ui/ButtonLink'
import { Container } from '../../ui/Container'

export function HeroSection() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero__card">
          <Container>
            <div className="hero__copy">
              <h1>Платформа, где все создается в&nbsp;рамках вашего бренда и&nbsp;дизайн-системы</h1>
              <p>Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды мог создавать профессиональные материалы в фирменном стиле за минуты, а не дни.</p>
              <ButtonLink href="https://builder.snapbuild.ru/">Начать сейчас</ButtonLink>
            </div>
            <img className="hero__visual" src={heroImage} alt="Интерфейс платформы Снэпбилд" />
          </Container>
        </div>
      </section>
      <section className="client-logos" aria-label="Компании, использующие Снэпбилд">
        <Container>
          <p>С платформой работают команды, для которых бренд — закон</p>
          <div className="client-logos__row">
            <strong>OZON</strong><strong>T2</strong><img src={logoAvito} alt="Авито" /><img src={logoCian} alt="Циан" /><img src={logoLenta} alt="Лента" />
          </div>
        </Container>
      </section>
    </>
  )
}
