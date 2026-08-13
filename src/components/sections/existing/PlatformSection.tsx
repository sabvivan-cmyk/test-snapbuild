import { Container } from '../../ui/Container'
import { SectionHeader } from '../../ui/SectionHeader'

const principles = [
  { visual: 'system', title: 'Дизайн-система — ядро платформы', text: 'Ваши компоненты, цвета и шрифты — единственный источник стиля.' },
  { visual: 'config', title: 'Гибкая конфигурация', text: 'Правила бренда задаются один раз — работают в каждой генерации.' },
  { visual: 'match', title: 'Соответствие по умолчанию', text: 'AI не может нарушить бренд: материалы создаются строго по вашим правилам.' },
]

export function PlatformSection() {
  return (
    <section className="section platform" id="product">
      <Container>
        <SectionHeader title="Одна платформа — весь маркетинг" description="Сайты, изображения, видео, баннеры и презентации — из одной идеи, в вашем стиле." />
        <div className="principles">
          {principles.map((item) => (
            <article className="principle" key={item.title}>
              <div className={`principle__visual principle__visual--${item.visual}`} aria-hidden="true"><i /><i /><i /><i /></div>
              <h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
