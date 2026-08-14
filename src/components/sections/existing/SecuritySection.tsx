import approved from '../../../assets/snapbuild/security-approved-models.webp'
import cloud from '../../../assets/snapbuild/security-private-cloud.webp'
import stack from '../../../assets/snapbuild/security-ai-stack.webp'

const items = [
  { image: approved, title: 'Только одобренные модели', text: 'Работаем только с российскими и локализованными моделями, без экспортных ограничений' },
  { image: cloud, title: 'Ваш контур, ваша юрисдикция', text: 'Развертывание в\u00a0частном облаке с\u00a0полным соответствием 152-ФЗ и\u00a0внутренними ИБ-требованиями' },
  { image: stack, title: 'Собственный AI-стек', text: 'Вы сами определяете модели, хранилища, доступы и цепочки валидации' },
]

export function SecuritySection() {
  return <section className="section security" id="security"><header className="section-header"><h2>{'Безопасность без\u00a0компромиссов'}</h2></header><div className="security__grid">{items.map((item) => <article className="security-card" key={item.title}><img src={item.image} alt="" /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
}
