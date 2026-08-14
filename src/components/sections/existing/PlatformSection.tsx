import designSystem from '../../../assets/snapbuild/84a4450b3827bc21.webp'
import configuration from '../../../assets/snapbuild/process-flexible-configuration.webp'
import compliance from '../../../assets/snapbuild/afe03eb4a67d5dfb.webp'
import { Container } from '../../ui/Container'
import { SectionHeader } from '../../ui/SectionHeader'

const principles = [
  { image: designSystem, title: 'Дизайн-система — ядро платформы', text: 'Ваши компоненты, цвета и шрифты — единственный источник стиля.' },
  { image: configuration, title: 'Гибкая конфигурация', text: 'Правила бренда задаются один раз — и работают в каждой генерации.' },
  { image: compliance, title: 'Соответствие по умолчанию', text: 'AI не может нарушить бренд: сайты, изображения, видео, баннеры и презентации — строго по вашим правилам.' },
]

export function PlatformSection() {
  return (
    <section className="section platform" id="product">
      <Container>
        <SectionHeader title="Одна платформа — весь маркетинг" description="Сайты, изображения, видео, баннеры и презентации — из одной идеи, в вашем стиле." />
        <div className="principles">
          {principles.map((item) => (
            <article className="principle" key={item.title}>
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
