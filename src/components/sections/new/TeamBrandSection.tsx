import { useEffect, useRef, useState } from 'react'

import logo from '../../../assets/snapbuild/582db07d8ccd60da.svg'
import { SectionHeader } from '../../ui/SectionHeader'

const roles = [
  {
    className: 'is-marketing',
    label: 'Маркетолог',
    task: 'Отвечает за сообщение и акценты',
    marker: 'Смысл',
  },
  {
    className: 'is-product',
    label: 'Продакт-менеджер',
    task: 'Отвечает за факты и ценность продукта',
    marker: 'Продукт',
  },
  {
    className: 'is-design',
    label: 'Дизайнер',
    task: 'Отвечает за композицию и визуальную иерархию',
    marker: 'Визуал',
  },
  {
    className: 'is-brand',
    label: 'Бренд-менеджер',
    task: 'Отвечает за тон и целостность бренда',
    marker: 'Бренд',
  },
] as const

function TeamMaterial({ role }: { role?: (typeof roles)[number] }) {
  return (
    <div className={`team-brand__material-content ${role?.className ?? 'is-all'}`}>
      <div className="team-brand__material-body">
        <span className="team-brand__material-label">Новый продукт</span>
        <h3>Всё необходимое для уверенного старта</h3>
        <p>Главные преимущества продукта собраны в понятную историю</p>
        <div aria-hidden="true" className="team-brand__material-visual">
          <i />
          <i />
          <i />
        </div>
        <strong>Узнать больше</strong>
        <small>В стиле бренда</small>
      </div>
    </div>
  )
}

export function TeamBrandSection() {
  const [activeRole, setActiveRole] = useState(0)
  const [cycle, setCycle] = useState(0)
  const [isInViewport, setIsInViewport] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const selectedRole = roles[activeRole]

  const selectRole = (index: number) => {
    setActiveRole(index)
    setCycle((value) => value + 1)
  }

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting)
      },
      { threshold: 0.15 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInViewport || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setTimeout(() => {
      selectRole((activeRole + 1) % (roles.length + 1))
    }, 8000)

    return () => window.clearTimeout(timer)
  }, [activeRole, cycle, isInViewport])

  return (
    <section className="section team-brand" id="team-brand" ref={sectionRef}>
      <SectionHeader
        title={
          <>
            Одна команда —<br className="section-header__mobile-break" />
            {' единый бренд'}
          </>
        }
        description="У каждой роли своя задача. Дизайн-система сохраняет общий визуальный язык"
      />

      <div className="team-brand__surface">
        <div className="team-brand__diagram">
          <article
            aria-label="Показать общий материал без выделения отдельной роли"
            aria-pressed={activeRole === roles.length}
            className={`team-brand__core${activeRole === roles.length ? ' is-active' : ''}`}
            id="team-brand-material"
            onClick={() => selectRole(roles.length)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                selectRole(roles.length)
              }
            }}
            role="button"
            tabIndex={0}
          >
            <span>Один общий материал</span>
            <img src={logo} alt="Снэпбилд" />
            <div className="team-brand__material">
              <div className="team-brand__material-bar">
                <i />
                <i />
                <i />
                <small>Страница продукта</small>
              </div>
              <TeamMaterial role={selectedRole} />
            </div>
          </article>

          {roles.map((role, index) => (
            <button
              aria-controls="team-brand-material"
              aria-pressed={activeRole === index}
              className={`team-brand__role ${role.className}${activeRole === index ? ' is-active' : ''}`}
              key={role.label}
              onClick={() => selectRole(index)}
              type="button"
            >
              <span className="team-brand__role-marker">{role.marker}</span>
              <span className="team-brand__role-title">{role.label}</span>
              <p>{role.task}</p>
            </button>
          ))}
        </div>

        <div className="team-brand__result">
          <span>Общий результат</span>
          <strong>
            Вклад каждой роли работает{' '}
            <span className="team-brand__result-line">на один узнаваемый образ бренда</span>
          </strong>
          <div aria-hidden="true" className="team-brand__swatches">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </section>
  )
}
