import { useState } from 'react'
import { Container } from '../../ui/Container'
import { SectionHeader } from '../../ui/SectionHeader'

const capabilities = [
  { id: 'sites', label: 'Сайты', title: 'Страница за минуту', text: 'Передайте документ или ссылку — платформа соберёт структуру, применит компоненты и подготовит редактируемую страницу.', features: ['Результат за один запрос', 'AI или визуальный редактор', 'Адаптация под ЦА'] },
  { id: 'images', label: 'Изображения', title: 'Графика в стиле бренда', text: 'Создавайте иллюстрации, обложки и рекламные материалы по композиционным правилам вашей дизайн-системы.', features: ['Попадание с первой генерации', 'Редактирование объектов', 'Разрешение до 4K'] },
  { id: 'video', label: 'Видео', title: 'Единый стиль от кадра к кадру', text: 'Используйте изображения как ключевые кадры и выпускайте версии для нужных площадок.', features: ['Контроль качества и формата', 'Сохранение композиции', 'Десятки адаптаций'] },
  { id: 'banners', label: 'Баннеры', title: 'Креативы из одной идеи', text: 'Собирайте мастер-баннер и автоматически готовьте размеры для рекламных площадок.', features: ['Все размеры автоматически', 'Текст и графика под контролем', 'Экспорт под площадку'] },
  { id: 'presentations', label: 'Презентации', title: 'История из одного запроса', text: 'Платформа подготовит структуру и черновик слайдов в вашей дизайн-системе.', features: ['Структура презентации', 'Редактирование через AI', 'Экспорт в нужном формате'] },
] as const

export function CapabilitiesSection() {
  const [activeId, setActiveId] = useState<(typeof capabilities)[number]['id']>('sites')
  const active = capabilities.find((item) => item.id === activeId) ?? capabilities[0]

  return (
    <section className="section capabilities" id="capabilities">
      <Container>
        <SectionHeader title="Любой контент в фирменном стиле за считанные минуты" />
        <div className="capabilities__tabs" role="tablist" aria-label="Типы контента">
          {capabilities.map((item) => (
            <button aria-controls={`panel-${item.id}`} aria-selected={item.id === activeId} id={`tab-${item.id}`} key={item.id} onClick={() => setActiveId(item.id)} role="tab" type="button">{item.label}</button>
          ))}
        </div>
        <div aria-labelledby={`tab-${active.id}`} className="capability-panel" id={`panel-${active.id}`} role="tabpanel">
          <div className="capability-panel__copy"><p className="eyebrow">{active.label}</p><h3>{active.title}</h3><p>{active.text}</p><ul>{active.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
          <div className={`capability-preview capability-preview--${active.id}`} aria-hidden="true">
            <div className="capability-preview__chrome"><span /><span /><span /></div>
            <div className="capability-preview__content"><small>SNAPBUILD / {active.label.toUpperCase()}</small><strong>{active.title}</strong><i /></div>
          </div>
        </div>
      </Container>
    </section>
  )
}
