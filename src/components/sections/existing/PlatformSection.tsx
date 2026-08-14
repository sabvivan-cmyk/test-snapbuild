import designSystem from '../../../assets/snapbuild/84a4450b3827bc21.webp'
import configuration from '../../../assets/snapbuild/process-flexible-configuration.webp'
import compliance from '../../../assets/snapbuild/afe03eb4a67d5dfb.webp'

const principles = [
  { image: designSystem, desktopTitle: 'Дизайн-система — ядро платформы', mobileTitle: 'Дизайн-система Снэпбилд', text: 'Ваши компоненты, цвета и\u00a0шрифты — единственный источник стиля' },
  { image: configuration, desktopTitle: 'Гибкая конфигурация', mobileTitle: 'Гибкая конфигурация', text: 'Правила бренда задаются один раз — работают в\u00a0каждой генерации' },
  { image: compliance, desktopTitle: 'Соответствие по\u00a0умолчанию', mobileTitle: 'Соответствие по\u00a0умолчанию', text: 'AI не\u00a0может нарушить бренд: сайты, изображения, видео, баннеры и\u00a0презентации — строго по\u00a0вашим правилам' },
]

export function PlatformSection() {
  return <section className="section platform" id="product"><header className="section-header"><h2><span className="wide-copy">Одна платформа — весь маркетинг</span><span className="narrow-copy">Одна платформа —<br />весь маркетинг</span></h2><p>{'Сайты, изображения, видео, баннеры и\u00a0презентации — из\u00a0одной идеи, в\u00a0вашем стиле'}</p></header><div className="principles">{principles.map((item) => <article className="principle" key={item.desktopTitle}><img src={item.image} alt="" /><h3><span className="wide-copy">{item.desktopTitle}</span><span className="narrow-copy">{item.mobileTitle}</span></h3><p>{item.text}</p></article>)}</div></section>
}
