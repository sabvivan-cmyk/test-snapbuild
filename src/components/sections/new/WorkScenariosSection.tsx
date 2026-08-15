import { useEffect, useId, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'

import { SectionHeader } from '../../ui/SectionHeader'

const scenarios = [
  {
    id: 'launch',
    label: 'Запуск продукта',
    task: ['Подготовить коммуникацию', 'к запуску продукта'],
    source: 'Описание продукта и ключевые преимущества',
    action: ['Выстроить сообщение', 'вокруг главной ценности'],
    actionNote: 'Факты превращаются в понятную историю запуска',
    result: ['Материал для первого', 'анонса продукта'],
    resultNote: 'Главная идея, преимущества и следующий шаг собраны вместе',
    visualTitle: 'Новый продукт',
    visualLabel: 'Запуск',
    visualItems: [
      { title: 'Ценность', text: 'Главная идея продукта' },
      { title: 'Преимущества', text: 'Ключевые аргументы' },
      { title: 'Действие', text: 'Следующий шаг' },
    ],
  },
  {
    id: 'campaign',
    label: 'Кампания',
    task: ['Поддержать предложение', 'рекламной кампанией'],
    source: 'Идея кампании и ключевое сообщение',
    action: ['Развернуть идею', 'в набор материалов'],
    actionNote: 'Каждый материал продолжает одну коммуникационную идею',
    result: ['Цельная кампания', 'для точек контакта'],
    resultNote: 'Сообщение узнаётся на каждом этапе коммуникации',
    visualTitle: 'Кампания запуска',
    visualLabel: 'Коммуникация',
    visualItems: [
      { title: 'Анонс', text: 'Первое знакомство' },
      { title: 'Аргументы', text: 'Раскрытие ценности' },
      { title: 'Отклик', text: 'Переход к действию' },
    ],
  },
  {
    id: 'meeting',
    label: 'Встреча с клиентом',
    task: ['Подготовиться к встрече', 'с конкретным клиентом'],
    source: 'Контекст клиента и тезисы предложения',
    action: ['Выстроить аргументы', 'в логичном порядке'],
    actionNote: 'Материал помогает провести клиента от задачи к решению',
    result: ['Готовое предложение', 'для предметной встречи'],
    resultNote: 'Контекст, решение и следующий шаг находятся перед глазами',
    visualTitle: 'Предложение для клиента',
    visualLabel: 'Встреча',
    visualItems: [
      { title: 'Контекст', text: 'Задача клиента' },
      { title: 'Решение', text: 'Релевантные аргументы' },
      { title: 'Продолжение', text: 'Следующий шаг' },
    ],
  },
  {
    id: 'update',
    label: 'Обновление',
    task: ['Актуализировать материал', 'после изменений продукта'],
    source: 'Новые условия и актуальные факты',
    action: ['Пересобрать содержание', 'вокруг новой ценности'],
    actionNote: 'Устаревшие акценты уступают место новой информации',
    result: ['Актуальная версия', 'материала о продукте'],
    resultNote: 'Предложение соответствует текущему состоянию продукта',
    visualTitle: 'Обновлённое предложение',
    visualLabel: 'Новая версия',
    visualItems: [
      { title: 'Условия', text: 'Актуальные данные' },
      { title: 'Ценность', text: 'Новый главный акцент' },
      { title: 'Версия', text: 'Готово к публикации' },
    ],
  },
] as const

type Scenario = (typeof scenarios)[number]

function ScenarioHeading({ lines }: { lines: readonly [string, string] }) {
  return (
    <h3>
      {lines[0]}
      <br className="work-scenario__desktop-break" /> {lines[1]}
    </h3>
  )
}

function ScenarioPanel({
  scenario,
  headingId,
  panelId,
  isActive,
}: {
  scenario: Scenario
  headingId: string
  panelId: string
  isActive: boolean
}) {
  const [sourceLead, ...sourceTail] = scenario.source.split(' и ')

  return (
    <div
      aria-labelledby={headingId}
      aria-hidden={!isActive}
      className={`work-scenario work-scenario--${scenario.id}${isActive ? ' work-scenario--active' : ''}`}
      id={panelId}
      role="tabpanel"
      tabIndex={isActive ? 0 : -1}
    >
      <div className="work-scenario__details">
        <div className="work-scenario__task">
          <span>Задача</span>
          <ScenarioHeading lines={scenario.task} />
          <p>
            <b>На входе:</b> {scenario.source}
          </p>
        </div>
        <div>
          <span>Действие</span>
          <ScenarioHeading lines={scenario.action} />
          <p>{scenario.actionNote}</p>
        </div>
        <div>
          <span>Результат</span>
          <ScenarioHeading lines={scenario.result} />
          <p>{scenario.resultNote}</p>
        </div>
      </div>

      <div className="work-scenario__demonstration">
        <div className="work-scenario__input">
          <div className="work-scenario__meta">
            <span>Исходные данные</span>
          </div>
          <strong>
            {sourceLead}
            {sourceTail.length > 0 && (
              <>
                <br />и {sourceTail.join(' и ')}
              </>
            )}
          </strong>
          <div aria-hidden="true" className="work-scenario__input-lines">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>

        <div aria-hidden="true" className="work-scenario__connector">
          <span>снэпбилд</span>
          <i />
        </div>

        <div className="work-scenario__output" key={scenario.id}>
          <div className="work-scenario__meta">
            <span>{scenario.visualLabel}</span>
            <small className="work-scenario__result-badge">{'Готовый\u00a0результат'}</small>
          </div>
          <strong>{scenario.visualTitle}</strong>
          <div className="work-scenario__visual">
            {scenario.visualItems.map((item) => (
              <span key={item.title}>
                <b>{item.title}</b>
                <small>{item.text}</small>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function WorkScenariosSection() {
  const [activeScenario, setActiveScenario] = useState(0)
  const [scrollIndicator, setScrollIndicator] = useState({ offset: 0, size: 100 })
  const sectionId = useId()
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const tabsRef = useRef<HTMLDivElement | null>(null)

  const updateScrollIndicator = () => {
    const tabs = tabsRef.current
    if (!tabs) return

    const maxScroll = tabs.scrollWidth - tabs.clientWidth
    const size = Math.min(100, (tabs.clientWidth / tabs.scrollWidth) * 100)
    const offset = maxScroll > 0 ? (tabs.scrollLeft / maxScroll) * (100 - size) : 0
    setScrollIndicator({ offset, size })
  }

  useEffect(() => {
    updateScrollIndicator()
    window.addEventListener('resize', updateScrollIndicator)
    return () => window.removeEventListener('resize', updateScrollIndicator)
  }, [])

  const selectScenario = (index: number) => {
    setActiveScenario(index)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()

    let nextIndex = index
    if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = scenarios.length - 1
    else if (event.key === 'ArrowRight') nextIndex = (index + 1) % scenarios.length
    else nextIndex = (index - 1 + scenarios.length) % scenarios.length

    selectScenario(nextIndex)
    buttonRefs.current[nextIndex]?.focus()
  }

  return (
    <section className="section work-scenarios" id="work-scenarios">
      <SectionHeader
        title={
          <>
            Одна платформа —<br className="section-header__mobile-break" />
            {' разные задачи'}
          </>
        }
        description="От запуска продукта до обновления предложения — выбирайте сценарий под конкретную ситуацию"
      />

      <div className="work-scenarios__body">
        <div
          aria-label="Рабочие сценарии"
          aria-orientation="horizontal"
          className="work-scenarios__tabs"
          onScroll={updateScrollIndicator}
          ref={tabsRef}
          role="tablist"
        >
          {scenarios.map((scenario, index) => {
            const isActive = activeScenario === index
            const buttonId = `${sectionId}-${scenario.id}-button`
            const panelId = `${sectionId}-${scenario.id}-panel`

            return (
              <button
                aria-controls={panelId}
                aria-selected={isActive}
                className="work-scenarios__switch"
                id={buttonId}
                key={scenario.id}
                onClick={() => selectScenario(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                ref={(node) => {
                  buttonRefs.current[index] = node
                }}
                role="tab"
                tabIndex={isActive ? 0 : -1}
                type="button"
              >
                <strong>{scenario.label}</strong>
              </button>
            )
          })}
        </div>
        <div aria-hidden="true" className="work-scenarios__scrollbar">
          <i style={{ left: `${scrollIndicator.offset}%`, width: `${scrollIndicator.size}%` }} />
        </div>

        <div className="work-scenarios__panels">
          {scenarios.map((scenario, index) => (
            <ScenarioPanel
              headingId={`${sectionId}-${scenario.id}-button`}
              isActive={activeScenario === index}
              key={scenario.id}
              panelId={`${sectionId}-${scenario.id}-panel`}
              scenario={scenario}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
