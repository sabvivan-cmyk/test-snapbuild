import { Container } from '../../ui/Container'
import { SectionHeader } from '../../ui/SectionHeader'

const principles = [
  { number: '01', title: 'Дизайн-система — ядро платформы', text: 'Ваши компоненты, цвета и шрифты становятся единственным источником стиля.' },
  { number: '02', title: 'Гибкая конфигурация', text: 'Правила бренда задаются один раз и работают в каждой генерации.' },
  { number: '03', title: 'Соответствие по умолчанию', text: 'AI создаёт материалы строго по вашим правилам, без ручной проверки каждого макета.' },
]

export function PlatformSection() {
  return (
    <section className="section platform" id="product">
      <Container>
        <SectionHeader title="Одна платформа — весь маркетинг" description="Сайты, изображения, видео, баннеры и презентации — из одной идеи, в вашем стиле." />
        <div className="platform__visual" aria-hidden="true">
          <div className="platform__source"><span>ИДЕЯ</span><strong>Запуск нового продукта</strong></div>
          <div className="platform__line" />
          <div className="platform__outputs"><span>Сайт</span><span>Видео</span><span>Баннер</span><span>Презентация</span></div>
        </div>
        <div className="principles">
          {principles.map((item) => (
            <article className="principle" key={item.number}>
              <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
