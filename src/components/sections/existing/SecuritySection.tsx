import approved from '../../../assets/snapbuild/security-approved-models.webp'
import cloud from '../../../assets/snapbuild/security-private-cloud.webp'
import stack from '../../../assets/snapbuild/security-ai-stack.webp'
import { Container } from '../../ui/Container'
import { SectionHeader } from '../../ui/SectionHeader'

const items = [
  { image: approved, title: 'Только одобренные модели', text: 'Работаем только с&nbsp;российскими и&nbsp;локализованными моделями, без&nbsp;экспортных ограничений' },
  { image: cloud, title: 'Ваш контур, ваша юрисдикция', text: 'Развертывание в&nbsp;частном облаке с&nbsp;полным соответствием 152-ФЗ и&nbsp;внутренними ИБ-требованиями' },
  { image: stack, title: 'Собственный AI-стек', text: 'Вы&nbsp;сами определяете модели, хранилища, доступы и&nbsp;цепочки валидации' },
]

export function SecuritySection() {
  return (
    <section className="section security" id="security">
      <Container>
        <SectionHeader title="Безопасность без компромиссов" />
        <div className="security__grid">
          {items.map((item) => (
            <article className="security-card" key={item.title}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
