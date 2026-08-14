import { useState } from 'react'

import logo from '../../../assets/snapbuild/582db07d8ccd60da.svg'
import { SectionHeader } from '../../ui/SectionHeader'

const roles = [
  {
    className: 'is-marketing',
    label: 'Маркетолог',
    task: 'Отвечает за сообщение и акценты',
    focus: 'Сообщение',
    marker: 'Смысл',
  },
  {
    className: 'is-design',
    label: 'Дизайнер',
    task: 'Отвечает за композицию и визуальную иерархию',
    focus: 'Композиция',
    marker: 'Визуал',
  },
  {
    className: 'is-product',
    label: 'Продакт-менеджер',
    task: 'Отвечает за факты и ценность продукта',
    focus: 'Факты о продукте',
    marker: 'Продукт',
  },
  {
    className: 'is-brand',
    label: 'Бренд-менеджер',
    task: 'Отвечает за тон и целостность бренда',
    focus: 'Соответствие бренду',
    marker: 'Бренд',
  },
] as const

export function TeamBrandSection() {
  const [activeRole, setActiveRole] = useState(0)
  const selectedRole = roles[activeRole]

  return (
    <section className="section team-brand" id="team-brand">
      <SectionHeader
        title="Одна команда — единый бренд"
        description="У каждой роли своя задача. Дизайн-система сохраняет общий визуальный язык"
      />

      <div className="team-brand__surface">
        <div className="team-brand__diagram">
          <article className="team-brand__core" id="team-brand-material">
            <span>Один общий материал</span>
            <img src={logo} alt="Снэпбилд" />
            <div className={`team-brand__material ${roles[activeRole].className}`}>
              <div className="team-brand__material-bar"><i /><i /><i /><small>Страница продукта</small></div>
              <div className="team-brand__material-body">
                <span className="team-brand__material-label">Новый продукт</span>
                <h3>Всё необходимое для уверенного старта</h3>
                <p>Главные преимущества продукта собраны в понятную историю</p>
                <div aria-hidden="true" className="team-brand__material-visual"><i /><i /><i /></div>
                <strong>Узнать больше</strong>
                <small>В стиле бренда</small>
              </div>
            </div>
            <p aria-atomic="true" aria-live="polite" className="team-brand__focus">
              <span>{selectedRole.label}</span>
              <span className="team-brand__focus-detail"> — в фокусе «{selectedRole.focus}»</span>
            </p>
          </article>

          {roles.map((role, index) => (
            <button
              aria-controls="team-brand-material"
              aria-pressed={activeRole === index}
              className={`team-brand__role ${role.className}${activeRole === index ? ' is-active' : ''}`}
              key={role.label}
              onClick={() => setActiveRole(index)}
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
          <strong>Вклад каждой роли работает <span className="team-brand__result-line">на один узнаваемый образ бренда</span></strong>
          <div aria-hidden="true" className="team-brand__swatches"><i /><i /><i /><i /></div>
        </div>
      </div>
    </section>
  )
}
