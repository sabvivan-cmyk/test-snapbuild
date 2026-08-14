import { useEffect, useId, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'

import { SectionHeader } from '../../ui/SectionHeader'

const steps = [
  { title: 'Дизайн-система', text: 'Компоненты, цвета и\u00a0типографика бренда' },
  { title: 'Задача', text: 'Короткое описание или\u00a0ссылка на\u00a0продукт' },
  { title: 'Генерация', text: 'Первый вариант материала в\u00a0вашем стиле' },
  { title: 'Редактирование', text: 'Уточнения через AI или\u00a0визуальный редактор' },
  { title: 'Результат', text: 'Готовый материал для\u00a0рабочей задачи' },
]

function WorkflowPreview({ step }: { step: number }) {
  return (
    <div className={`workflow-preview workflow-preview--${step + 1}`}>
      <div className="workflow-preview__bar"><span /><span /><span /><b>снэпбилд</b></div>
      <div className="workflow-preview__body">
        {step === 0 && <><div className="workflow-preview__aside"><small>Дизайн-система</small><strong>Бренд компании</strong><span>Типографика</span><span>Цвета</span><span>Компоненты</span></div><div className="workflow-tokens"><div><small>Основные цвета</small><i /><i /><i /></div><div><small>Компоненты</small><em className="workflow-button">Начать сейчас</em><span /></div></div></>}
        {step === 1 && <div className="workflow-prompt"><small>Новая задача</small><strong>Создай страницу для запуска нового продукта</strong><p>Используй существующую дизайн-систему и&nbsp;материалы продукта</p><span>Ссылка или документ</span></div>}
        {step === 2 && <div className="workflow-generation"><div><span /><strong>Собираем структуру</strong></div><div><span /><strong>Применяем компоненты</strong></div><div><span /><strong>Добавляем контент</strong></div></div>}
        {step === 3 && <><div className="workflow-chat"><small>Уточнение</small><p>Сделай заголовок короче и&nbsp;замени изображение</p><span>AI обновляет выбранный блок</span></div><div className="workflow-canvas"><i /><strong>Новый продукт.<br />В&nbsp;стиле вашего бренда</strong><em className="workflow-button">Подробнее</em></div></>}
        {step === 4 && <div className="workflow-result"><div><small>Готово</small><strong>Страница продукта</strong><p>Собрана по&nbsp;правилам вашей дизайн-системы</p><em className="workflow-button">Открыть результат</em></div><aside><span>Desktop</span><span>Tablet</span><span>Mobile</span></aside></div>}
      </div>
    </div>
  )
}

export function DesignToMaterialSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [previousStep, setPreviousStep] = useState<number | null>(null)
  const [cycle, setCycle] = useState(0)
  const [isInViewport, setIsInViewport] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const tabsId = useId()

  const selectStep = (index: number) => {
    if (index === activeStep) {
      setCycle((value) => value + 1)
      return
    }
    setPreviousStep(activeStep)
    setActiveStep(index)
    setCycle((value) => value + 1)
  }

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting)
    }, { threshold: 0.15 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInViewport || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setTimeout(() => {
      selectStep((activeStep + 1) % steps.length)
    }, 8000)
    return () => window.clearTimeout(timer)
  }, [activeStep, cycle, isInViewport])

  useEffect(() => {
    if (previousStep === null) return
    const timer = window.setTimeout(() => setPreviousStep(null), 720)
    return () => window.clearTimeout(timer)
  }, [activeStep, previousStep])

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    let next = index
    if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = steps.length - 1
    else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % steps.length
    else next = (index - 1 + steps.length) % steps.length
    selectStep(next)
    document.getElementById(`${tabsId}-${next}`)?.focus()
  }

  return (
    <section className="section design-workflow" id="workflow" ref={sectionRef}>
      <SectionHeader title={'От дизайн-системы до\u00a0готового материала'} description={'Пять понятных этапов — от\u00a0правил бренда до\u00a0результата, готового к\u00a0работе'} />
      <div className="design-workflow__surface">
        <div className="design-workflow__steps" role="tablist" aria-label="Этапы создания материала">
          <div aria-hidden="true" className={`design-workflow__progress${isInViewport ? ' is-running' : ''}${activeStep === steps.length - 1 ? ' is-finishing' : ''}`} key={`${activeStep}-${cycle}`}>{steps.map((_, index) => <span className={index < activeStep ? 'is-complete' : index === activeStep ? 'is-current' : ''} key={index} />)}</div>
          {steps.map((step, index) => <button aria-controls={`${tabsId}-panel`} aria-selected={activeStep === index} className={activeStep === index ? 'is-active' : index < activeStep ? 'is-complete' : ''} id={`${tabsId}-${index}`} key={step.title} onClick={() => selectStep(index)} onKeyDown={(event) => handleKeyDown(event, index)} role="tab" tabIndex={activeStep === index ? 0 : -1} type="button"><span>{String(index + 1).padStart(2, '0')}</span><strong>{step.title}</strong><small>{step.text}</small></button>)}
        </div>
        <div aria-labelledby={`${tabsId}-${activeStep}`} className="design-workflow__panel" id={`${tabsId}-panel`} role="tabpanel">
          <div className="design-workflow__panel-copy" key={`copy-${activeStep}`}><span>Этап {activeStep + 1} из {steps.length}</span><h3>{steps[activeStep].title}</h3><p>{steps[activeStep].text}</p></div>
          <div aria-hidden="true" className="workflow-preview-stack">
            {previousStep !== null && <div className="workflow-preview-layer is-leaving"><WorkflowPreview step={previousStep} /></div>}
            <div className={`workflow-preview-layer${previousStep !== null ? ' is-entering' : ''}`}><WorkflowPreview step={activeStep} /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
