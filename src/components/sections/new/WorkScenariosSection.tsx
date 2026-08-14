import { useId, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'

import { SectionHeader } from '../../ui/SectionHeader'

const scenarios = [
  {
    id: 'marketing',
    label: 'Маркетинг',
    task: 'Запустить кампанию для нового предложения',
    source: 'Оффер и сегменты аудитории',
    action: 'Адаптировать сообщение под каждый сегмент',
    actionNote: 'Акценты меняются под контекст аудитории',
    result: 'Материалы кампании в едином стиле',
    resultNote: 'Готовые варианты связаны одной визуальной системой',
    visualTitle: 'Новое предложение',
    visualLabel: 'Кампания',
    visualItems: [
      { title: 'Новая\u00a0аудитория', text: 'Знакомство с\u00a0предложением' },
      { title: 'Текущие\u00a0клиенты', text: 'Акцент на\u00a0новых возможностях' },
      { title: 'Партнёры', text: 'Аргументы для\u00a0коммуникации' },
    ],
  },
  {
    id: 'design',
    label: 'Дизайн',
    task: 'Закрепить правила бренда для новых материалов',
    source: 'Компоненты, цвета и типографика',
    action: 'Собрать визуальные правила в дизайн-системе',
    actionNote: 'Правила становятся основой для новых материалов',
    result: 'Единая основа для следующих запусков',
    resultNote: 'Команда работает с согласованными элементами бренда',
    visualTitle: 'Дизайн-система',
    visualLabel: 'Правила бренда',
    visualItems: [
      { title: 'Компоненты', text: 'Единые элементы' },
      { title: 'Типографика', text: 'Заданные стили текста' },
      { title: 'Цвета', text: 'Палитра бренда' },
    ],
  },
  {
    id: 'product',
    label: 'Продукт',
    task: 'Быстро представить новое предложение',
    source: 'Описание продукта и ключевые преимущества',
    action: 'Собрать структуру и уточнить содержание',
    actionNote: 'Информация выстраивается вокруг главной ценности',
    result: 'Готовый материал для запуска',
    resultNote: 'Предложение понятно показывает продукт и следующий шаг',
    visualTitle: 'Новый продукт',
    visualLabel: 'Запуск',
    visualItems: [
      { title: 'Ценность', text: 'Главная идея предложения' },
      { title: 'Преимущества', text: 'Ключевые аргументы' },
      { title: 'Действие', text: 'Следующий\u00a0шаг пользователя' },
    ],
  },
  {
    id: 'sales',
    label: 'Продажи',
    task: 'Подготовиться к встрече с клиентом',
    source: 'Контекст клиента и тезисы предложения',
    action: 'Расставить акценты под разговор',
    actionNote: 'Содержание учитывает контекст конкретного клиента',
    result: 'Материал для конкретной встречи',
    resultNote: 'Основные аргументы собраны в логичную последовательность',
    visualTitle: 'Предложение\u00a0для\u00a0клиента',
    visualLabel: 'Встреча',
    visualItems: [
      { title: 'Контекст', text: 'Задача клиента' },
      { title: 'Решение', text: 'Релевантные преимущества' },
      { title: 'Следующий\u00a0шаг', text: 'Продолжение разговора' },
    ],
  },
] as const

type Scenario = (typeof scenarios)[number]

function ScenarioPanel({ scenario, headingId, panelId, isActive }: {
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
          <h3>{scenario.task}</h3>
          <p><b>На входе:</b> {scenario.source}</p>
        </div>
        <div>
          <span>Действие</span>
          <strong>{scenario.action}</strong>
          <p>{scenario.actionNote}</p>
        </div>
        <div>
          <span>Результат</span>
          <strong>{scenario.result}</strong>
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
            {sourceTail.length > 0 && <><br />и {sourceTail.join(' и ')}</>}
          </strong>
          <div aria-hidden="true" className="work-scenario__input-lines">
            <i /><i /><i /><i /><i />
          </div>
        </div>

        <div aria-hidden="true" className="work-scenario__connector">
          <span>Снэпбилд</span>
          <i />
        </div>

        <div className="work-scenario__output">
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
  const sectionId = useId()
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([])

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
        title="Одна платформа — разные рабочие задачи"
        description="От запуска кампании до встречи с клиентом — каждый сценарий начинается с конкретной задачи"
      />

      <div className="work-scenarios__body">
        <div
          aria-label="Рабочие сценарии"
          aria-orientation="horizontal"
          className="work-scenarios__tabs"
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
                ref={(node) => { buttonRefs.current[index] = node }}
                role="tab"
                tabIndex={isActive ? 0 : -1}
                type="button"
              >
                <strong>{scenario.label}</strong>
              </button>
            )
          })}
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
