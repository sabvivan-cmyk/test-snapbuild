import { Container } from '../../ui/Container'
import { SectionHeader } from '../../ui/SectionHeader'

const securityItems = [
  { icon: '✓', title: 'Только одобренные модели', text: 'Работаем с российскими и локализованными моделями без экспортных ограничений.' },
  { icon: '⌂', title: 'Ваш контур, ваша юрисдикция', text: 'Развёртывание в частном облаке с учётом 152-ФЗ и внутренних ИБ-требований.' },
  { icon: '◇', title: 'Собственный AI-стек', text: 'Вы сами определяете модели, хранилища, доступы и цепочки валидации.' },
]

export function SecuritySection() {
  return (
    <section className="section security" id="security">
      <Container>
        <SectionHeader title="Безопасность без компромиссов" />
        <div className="security__grid">
          {securityItems.map((item) => <article className="security-card" key={item.title}><span aria-hidden="true">{item.icon}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </Container>
    </section>
  )
}
