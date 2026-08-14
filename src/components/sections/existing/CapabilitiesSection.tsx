import { useState } from 'react'
import sitePreview from '../../../assets/snapbuild/use-cases-tab1-item1-v2.webp'
import imagePreview from '../../../assets/snapbuild/use-cases-img-01.webp'
import videoPreview from '../../../assets/snapbuild/use-cases-vid-01.webp'
import bannerPreview from '../../../assets/snapbuild/use-cases-tab4-item1.webp'
import presentationPreview from '../../../assets/snapbuild/use-cases-pres-01.jpg'
import { Container } from '../../ui/Container'
import { SectionHeader } from '../../ui/SectionHeader'

const capabilities = [
  { id: 'sites', label: 'Сайты', image: sitePreview, features: ['Результат за один запрос', 'Страница за минуту', 'AI или визуальный редактор', 'Адаптация под целевую аудиторию'] },
  { id: 'images', label: 'Изображения', image: imagePreview, features: ['Изображения как ключевые кадры', 'Контроль качества и формата', 'Сохранение стиля и композиции', 'Один сценарий — десятки адаптаций'] },
  { id: 'video', label: 'Видео', image: videoPreview, features: ['Изображения как ключевые кадры', 'Контроль качества и формата', 'Сохранение стиля и композиции', 'Версии для разных площадок'] },
  { id: 'banners', label: 'Баннеры', image: bannerPreview, features: ['Все размеры автоматически', 'Текст и графика под контролем', 'Компоненты дизайн-системы', 'Экспорт под площадку'] },
  { id: 'presentations', label: 'Презентации', image: presentationPreview, features: ['Структура за один запрос', 'Фирменные шаблоны слайдов', 'Редактирование через AI', 'Экспорт в нужном формате'] },
] as const

export function CapabilitiesSection() {
  const [activeId, setActiveId] = useState<(typeof capabilities)[number]['id']>('sites')
  const active = capabilities.find((item) => item.id === activeId) ?? capabilities[0]
  return (
    <section className="section capabilities" id="capabilities">
      <Container>
        <SectionHeader title="Любой контент в фирменном стиле за считанные минуты" />
        <div className="capabilities__tabs" role="tablist" aria-label="Типы контента">{capabilities.map((item) => <button aria-controls={`panel-${item.id}`} aria-selected={item.id === activeId} id={`tab-${item.id}`} key={item.id} onClick={() => setActiveId(item.id)} role="tab" type="button">{item.label}</button>)}</div>
        <div aria-labelledby={`tab-${active.id}`} className="capability-panel" id={`panel-${active.id}`} role="tabpanel">
          <ul>{active.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          <img src={active.image} alt={`Интерфейс создания материала: ${active.label.toLowerCase()}`} />
        </div>
      </Container>
    </section>
  )
}
