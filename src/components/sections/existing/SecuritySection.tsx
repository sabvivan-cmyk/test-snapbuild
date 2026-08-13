import { Container } from '../../ui/Container'
import { SectionHeader } from '../../ui/SectionHeader'

const securityItems = [
  { visual: 'shield', title: 'Только одобренные модели', text: 'Работаем только с российскими и локализованными моделями, без экспортных ограничений.' },
  { visual: 'cloud', title: 'Ваш контур, ваша юрисдикция', text: 'Развёртывание в частном облаке с полным соответствием 152-ФЗ и внутренним ИБ-требованиям.' },
  { visual: 'stack', title: 'Собственный AI-стек', text: 'Вы сами определяете модели, хранилища, доступы и цепочки валидации.' },
]

export function SecuritySection() {
  return (
    <section className="section security" id="security">
      <Container>
        <SectionHeader title="Безопасность без компромиссов" />
        <div className="security__grid">
          {securityItems.map((item) => <article className="security-card" key={item.title}><div className={`security-card__visual security-card__visual--${item.visual}`} aria-hidden="true"><i /><i /><i /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </Container>
    </section>
  )
}
