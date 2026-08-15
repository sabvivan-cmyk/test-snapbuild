import { useEffect, useId, useRef, useState } from 'react'
import type { AnimationEvent, KeyboardEvent } from 'react'

import { SectionHeader } from '../../ui/SectionHeader'

const audiences = [
  {
    id: 'small-business',
    label: 'Малый бизнес',
    context: 'Быстрый старт',
    eyebrow: 'Для небольшой команды',
    title: 'Запустите работу без сложной настройки',
    offer: 'Всё необходимое для первого запуска — в одном материале',
    supportingText: 'Понятный следующий шаг и акцент на быстром начале работы',
  },
  {
    id: 'enterprise',
    label: 'Крупный бизнес',
    context: 'Единый стандарт',
    eyebrow: 'Для большой компании',
    title: 'Один стандарт для всех подразделений',
    offer: 'Согласованная подача продукта для разных команд и направлений',
    supportingText: 'В центре сообщения — единый подход и последовательность коммуникации',
  },
  {
    id: 'partners',
    label: 'Партнёры',
    context: 'Совместное предложение',
    eyebrow: 'Для партнёрской сети',
    title: 'Новое предложение для ваших клиентов',
    offer: 'Главные преимущества собраны для партнёрской коммуникации',
    supportingText: 'Акцент смещается на ценность совместного предложения',
  },
] as const

export function AudienceAdaptationSection() {
  const [activeAudience, setActiveAudience] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionId = useId()
  const sectionRef = useRef<HTMLElement | null>(null)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleProgressEnd = (event: AnimationEvent<HTMLButtonElement>, index: number) => {
    if (event.animationName !== 'audience-border-progress' || index !== activeAudience) return
    setActiveAudience((index + 1) % audiences.length)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const isVertical = window.matchMedia('(min-width: 1024px)').matches
    const previousKey = isVertical ? 'ArrowUp' : 'ArrowLeft'
    const nextKey = isVertical ? 'ArrowDown' : 'ArrowRight'

    if (![previousKey, nextKey, 'Home', 'End'].includes(event.key)) return
    event.preventDefault()

    let nextIndex = index
    if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = audiences.length - 1
    else if (event.key === nextKey) nextIndex = (index + 1) % audiences.length
    else nextIndex = (index - 1 + audiences.length) % audiences.length

    setActiveAudience(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section
      className={`section audience-adaptation${isVisible ? ' is-visible' : ''}`}
      id="audience-adaptation"
      ref={sectionRef}
    >
      <SectionHeader
        title={<>Один материал —<br className="section-header__mobile-break" />{' разные аудитории'}</>}
        description="Меняйте смысловые акценты под контекст аудитории, сохраняя визуальный язык бренда"
      />

      <div className="audience-adaptation__surface">
        <div className="audience-adaptation__source">
          <span>Исходный материал</span>
          <strong>Страница нового продукта</strong>
          <small>Одна структура и дизайн-система</small>
        </div>

        <div className="audience-adaptation__workspace">
          <div
            aria-label="Выберите аудиторию"
            className="audience-adaptation__selector"
            role="tablist"
          >
            <span className="audience-adaptation__selector-label">Аудитория</span>
            {audiences.map((audience, index) => {
              const isActive = activeAudience === index

              return (
                <button
                  aria-controls={`${sectionId}-${audience.id}-panel`}
                  aria-selected={isActive}
                  className={isActive ? 'is-active' : undefined}
                  id={`${sectionId}-${audience.id}-tab`}
                  key={audience.id}
                  onAnimationEnd={(event) => handleProgressEnd(event, index)}
                  onClick={() => setActiveAudience(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  ref={(node) => { tabRefs.current[index] = node }}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                >
                  <strong>{audience.label}</strong>
                  <span>{audience.context}</span>
                </button>
              )
            })}
          </div>

          <div className="audience-preview">
            <div aria-hidden="true" className="audience-preview__bar">
              <i /><i /><i />
              <span>Страница продукта</span>
              <small>Preview</small>
            </div>

            <div className="audience-preview__canvas">
              <div className="audience-preview__content">
                {audiences.map((audience, index) => {
                  const isActive = activeAudience === index

                  return (
                    <div
                      aria-hidden={!isActive}
                      aria-labelledby={`${sectionId}-${audience.id}-tab`}
                      className={`audience-preview__panel${isActive ? ' is-active' : ''}`}
                      id={`${sectionId}-${audience.id}-panel`}
                      key={audience.id}
                      role="tabpanel"
                      tabIndex={isActive ? 0 : -1}
                    >
                      <span className="audience-preview__eyebrow">{audience.eyebrow}</span>
                      <h3>{audience.title}</h3>
                      <strong>{audience.offer}</strong>
                      <p>{audience.supportingText}</p>
                      <span className="audience-preview__cta">Узнать больше</span>
                    </div>
                  )
                })}
              </div>

              <div aria-hidden="true" className="audience-preview__visual">
                <div><i /><i /><i /></div>
                <span>Единый стиль</span>
              </div>
            </div>

            <div className="audience-preview__status">
              <span><i />Меняются текст и акценты</span>
              <span><i />Сохраняется дизайн-система</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
