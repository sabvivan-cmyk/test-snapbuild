import { useEffect, useId, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import tab11 from '../../../assets/snapbuild/use-cases-tab1-item1-v2.webp'
import tab12 from '../../../assets/snapbuild/use-cases-tab1-item2.webp'
import tab13 from '../../../assets/snapbuild/use-cases-tab1-item3.webp'
import tab14 from '../../../assets/snapbuild/use-cases-web-04.webp'
import tab21 from '../../../assets/snapbuild/use-cases-img-01.webp'
import tab22 from '../../../assets/snapbuild/use-cases-tab2-item2.webp'
import tab23 from '../../../assets/snapbuild/use-cases-tab2-item3.webp'
import tab24 from '../../../assets/snapbuild/use-cases-tab2-item4.webp'
import tab31 from '../../../assets/snapbuild/use-cases-vid-01.webp'
import tab32 from '../../../assets/snapbuild/use-cases-tab3-item2.webp'
import tab33 from '../../../assets/snapbuild/use-cases-tab3-item3.webp'
import tab34 from '../../../assets/snapbuild/use-cases-tab3-item4.webp'
import tab41 from '../../../assets/snapbuild/use-cases-tab4-item1.webp'
import tab42 from '../../../assets/snapbuild/use-cases-tab4-item2.webp'
import tab43 from '../../../assets/snapbuild/use-cases-tab4-item3.webp'
import tab44 from '../../../assets/snapbuild/use-cases-tab4-item4.webp'
import tab51 from '../../../assets/snapbuild/use-cases-pres-01.jpg'
import tab52 from '../../../assets/snapbuild/use-cases-tab5-item2.webp'
import tab53 from '../../../assets/snapbuild/use-cases-tab5-item3.webp'
import tab54 from '../../../assets/snapbuild/use-cases-tab5-item4.webp'

type Item = { title: string; text: string; image: string }
type Capability = { id: string; label: string; items: Item[] }

const capabilities: Capability[] = [
  {
    id: 'sites',
    label: 'Сайты',
    items: [
      {
        title: 'Результат за\u00a0один запрос',
        text: 'Отправляйте документ или ссылку на\u00a0описание продукта — платформа собирает структуру',
        image: tab11,
      },
      {
        title: 'Страница за\u00a0минуту',
        text: 'В\u00a0вашей дизайн-системе, с\u00a0вашими шрифтами, сеткой и\u00a0компонентами',
        image: tab12,
      },
      {
        title: 'AI или визуальный редактор',
        text: 'Меняйте контент через чат или редактируйте вручную',
        image: tab13,
      },
      {
        title: 'Адаптация под\u00a0ЦА за\u00a0один клик',
        text: 'Версия сайта под\u00a0новый сегмент без\u00a0работы дизайнеров и\u00a0копирайтеров',
        image: tab14,
      },
    ],
  },
  {
    id: 'images',
    label: 'Изображения',
    items: [
      {
        title: 'В\u00a0стиле и\u00a0цвете бренда',
        text: 'Изображения по\u00a0композиционным правилам вашей дизайн-системы',
        image: tab21,
      },
      {
        title: 'Попадание с\u00a0первой генерации',
        text: 'Без\u00a0часов промптинга и\u00a0поиска на\u00a0стоках',
        image: tab22,
      },
      {
        title: 'Редактирование объектов',
        text: 'Меняйте композицию и\u00a0удаляйте элементы прямо на\u00a0изображении',
        image: tab23,
      },
      {
        title: 'Любой стиль и\u00a0формат',
        text: 'Портреты, иллюстрации, обложки — в\u00a0нужном соотношении, до\u00a04K',
        image: tab24,
      },
    ],
  },
  {
    id: 'video',
    label: 'Видео',
    items: [
      {
        title: 'Изображения как\u00a0ключевые кадры',
        text: 'Используйте графику из\u00a0модуля изображений напрямую',
        image: tab31,
      },
      {
        title: 'Контроль качества и\u00a0формата',
        text: 'Длительность, соотношение, качество — под\u00a0площадку',
        image: tab32,
      },
      {
        title: 'Сохранение стиля и\u00a0композиции',
        text: 'AI удерживает визуальную целостность ролика',
        image: tab33,
      },
      {
        title: 'Один сценарий — десятки адаптаций',
        text: 'Версии под\u00a0популярные форматы соцсетей и\u00a0рекламные площадки',
        image: tab34,
      },
    ],
  },
  {
    id: 'banners',
    label: 'Баннеры',
    items: [
      {
        title: 'Креативы из\u00a0одной идеи',
        text: 'Готовые баннеры в\u00a0фирменном стиле для\u00a0любой кампании',
        image: tab41,
      },
      {
        title: 'Все размеры автоматически',
        text: 'Выбирайте готовые размеры для\u00a0популярных площадок или\u00a0задавайте собственные — без\u00a0ручной пересборки',
        image: tab42,
      },
      {
        title: 'Текст и\u00a0графика под\u00a0контролем',
        text: 'Редактируйте оффер, композицию и\u00a0визуальные акценты',
        image: tab43,
      },
      {
        title: 'Экспорт под\u00a0площадку',
        text: 'Форматы и\u00a0вес файлов соответствуют требованиям размещения',
        image: tab44,
      },
    ],
  },
  {
    id: 'presentations',
    label: 'Презентации',
    items: [
      {
        title: 'Презентация из\u00a0запроса',
        text: 'Платформа собирает структуру и\u00a0черновик слайдов',
        image: tab51,
      },
      {
        title: 'В\u00a0вашей дизайн-системе',
        text: 'Шрифты, сетки и\u00a0компоненты применяются автоматически',
        image: tab52,
      },
      {
        title: 'Редактирование через AI',
        text: 'Меняйте отдельный слайд или всю историю через чат',
        image: tab53,
      },
      {
        title: 'Экспорт в\u00a0нужном формате',
        text: 'Собирайте презентации для\u00a0встречи, рассылки или публикации',
        image: tab54,
      },
    ],
  },
]

export function CapabilitiesSection() {
  const [tabIndex, setTabIndex] = useState(0)
  const [itemIndex, setItemIndex] = useState(0)
  const [cycle, setCycle] = useState(0)
  const sectionId = useId()
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const active = capabilities[tabIndex]
  const item = active.items[itemIndex]
  const selectTab = (index: number) => {
    setTabIndex(index)
    setItemIndex(0)
    setCycle((value) => value + 1)
  }
  const selectItem = (index: number) => {
    setItemIndex(index)
    setCycle((value) => value + 1)
  }

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()

    let nextIndex = index
    if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = capabilities.length - 1
    else if (event.key === 'ArrowRight') nextIndex = (index + 1) % capabilities.length
    else nextIndex = (index - 1 + capabilities.length) % capabilities.length

    selectTab(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setTimeout(() => {
      if (itemIndex < active.items.length - 1) setItemIndex(itemIndex + 1)
      else {
        setTabIndex((tabIndex + 1) % capabilities.length)
        setItemIndex(0)
      }
    }, 8000)
    return () => window.clearTimeout(timer)
  }, [active.items.length, cycle, itemIndex, tabIndex])

  return (
    <section className="section capabilities" id="capabilities">
      <header className="capabilities__header">
        <h2>
          <span className="wide-copy">
            {'Любой контент в\u00a0фирменном стиле'}
            <br />
            {'за\u00a0считанные минуты'}
          </span>
          <span className="narrow-copy">
            Любой контент
            <br />
            {'в\u00a0фирменном стиле'}
            <br />
            {'за\u00a0считанные минуты'}
          </span>
        </h2>
        <div aria-label="Типы контента" className="capabilities__tabs" role="tablist">
          {capabilities.map((tab, index) => {
            const isActive = index === tabIndex

            return (
              <button
                aria-controls={`${sectionId}-panel`}
                aria-selected={isActive}
                id={`${sectionId}-${tab.id}-tab`}
                key={tab.id}
                onClick={() => selectTab(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                role="tab"
                tabIndex={isActive ? 0 : -1}
                type="button"
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </header>

      <div
        aria-labelledby={`${sectionId}-${active.id}-tab`}
        className="capability-panel"
        id={`${sectionId}-panel`}
        role="tabpanel"
      >
        <div className="capability-panel__items">
          {active.items.map((entry, index) => (
            <button
              aria-pressed={index === itemIndex}
              className={index === itemIndex ? 'is-active dds-tabs-card--active' : ''}
              key={entry.title}
              onClick={() => selectItem(index)}
              type="button"
            >
              <strong>{entry.title}</strong>
              <span>{entry.text}</span>
              {index === itemIndex && <i key={`${tabIndex}-${itemIndex}-${cycle}`} />}
            </button>
          ))}
        </div>
        <div className="capability-panel__media">
          <img src={item.image} alt="" />
        </div>
      </div>
    </section>
  )
}
