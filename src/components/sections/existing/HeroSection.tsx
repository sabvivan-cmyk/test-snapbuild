import { ButtonLink } from '../../ui/ButtonLink'
import { Container } from '../../ui/Container'

const teams = ['МТС', 'ВТБ', 'Kaspersky', 'Ростелеком', 'X5 Group']

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <Container>
        <div className="hero__copy">
          <p className="eyebrow">Маркетинг в рамках бренда</p>
          <h1>Платформа, где всё создаётся в рамках вашего бренда и дизайн-системы</h1>
          <p className="hero__lead">Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды мог создавать профессиональные материалы за минуты, а не дни.</p>
          <ButtonLink href="https://builder.snapbuild.ru/">Начать сейчас</ButtonLink>
        </div>
        <div className="product-window hero__visual" aria-label="Предварительный просмотр интерфейса Snapbuild">
          <div className="product-window__bar"><span /><span /><span /><p>Новая кампания</p></div>
          <div className="hero-builder">
            <div className="hero-builder__sidebar"><i /><i /><i /><i /></div>
            <div className="hero-builder__canvas">
              <span className="mock-label">Новый продукт</span>
              <strong>Запуск без компромиссов с брендом</strong>
              <span className="mock-button">Узнать больше</span>
            </div>
            <div className="hero-builder__chat">
              <p>Собери промостраницу для нового продукта</p>
              <span>Страница готова</span>
            </div>
          </div>
        </div>
        <div className="social-proof">
          <p>С платформой работают команды, для которых бренд — закон</p>
          <ul aria-label="Компании, использующие платформу">
            {teams.map((team) => <li key={team}>{team}</li>)}
          </ul>
        </div>
      </Container>
    </section>
  )
}
