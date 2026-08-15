import { useId, useState } from 'react'
import type { KeyboardEvent } from 'react'

import { SectionHeader } from '../../ui/SectionHeader'

const actions = [
  {
    label: 'Изменить заголовок',
    prompt: 'Сделай заголовок короче и конкретнее',
    status: 'Заголовок обновлён',
  },
  {
    label: 'Заменить изображение',
    prompt: 'Подбери другой визуальный акцент для первого экрана',
    status: 'Изображение заменено',
  },
  {
    label: 'Перестроить блок',
    prompt: 'Сделай композицию компактнее, сохранив иерархию',
    status: 'Композиция перестроена',
  },
  {
    label: 'Выбрать другой вариант',
    prompt: 'Покажи ещё один вариант в рамках дизайн-системы',
    status: 'Выбран вариант 02',
  },
]

export function AiControlSection() {
  const [activeAction, setActiveAction] = useState<number | null>(null)
  const groupId = useId()
  const selectedAction = activeAction === null ? null : actions[activeAction]

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key))
      return
    event.preventDefault()

    let next = index
    if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = actions.length - 1
    else if (event.key === 'ArrowDown' || event.key === 'ArrowRight')
      next = (index + 1) % actions.length
    else next = (index - 1 + actions.length) % actions.length

    setActiveAction(next)
    document.getElementById(`${groupId}-${next}`)?.focus()
  }

  const previewTitle =
    activeAction === 0
      ? 'Материалы в фирменном стиле — за считанные минуты'
      : activeAction === 3
        ? 'Один запрос. Несколько готовых вариантов'
        : 'Новый продукт — в стиле вашего бренда'

  return (
    <section className="section ai-control" id="ai-control">
      <SectionHeader
        title={
          <>
            AI предлагает —<br className="section-header__mobile-break" />
            {' вы управляете'}
          </>
        }
        description={
          'Уточняйте результат через AI или редактируйте вручную — в рамках вашей дизайн-системы'
        }
      />

      <div className="ai-control__surface">
        <div className="ai-control__commands">
          <div className="ai-control__command-head">
            <span>AI-команды</span>
            <strong>{selectedAction?.prompt ?? 'Что изменить в материале?'}</strong>
            <p>Выберите действие — результат обновится в макете</p>
          </div>

          <div aria-label="Действия с материалом" className="ai-control__actions" role="group">
            {actions.map((action, index) => (
              <button
                aria-pressed={activeAction === index}
                className={activeAction === index ? 'is-active' : undefined}
                id={`${groupId}-${index}`}
                key={action.label}
                onClick={() => setActiveAction(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                type="button"
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                {action.label}
              </button>
            ))}
          </div>

          <div className="ai-control__command-footer">
            <span aria-live="polite">{selectedAction?.status ?? 'Исходный вариант'}</span>
            <button
              disabled={activeAction === null}
              onClick={() => setActiveAction(null)}
              type="button"
            >
              Отменить
            </button>
          </div>
        </div>

        <div aria-hidden="true" className="control-editor">
          <div className="control-editor__bar">
            <span />
            <span />
            <span />
            <b>Страница продукта</b>
            <div aria-hidden="true">
              <i className="is-active">Desktop</i>
              <i>Tablet</i>
              <i>Mobile</i>
            </div>
          </div>

          <div className="control-editor__workspace">
            <aside aria-hidden="true">
              <span>Секции</span>
              <b>Первый экран</b>
              <span>Преимущества</span>
              <span>Продукт</span>
              <span>Контакты</span>
            </aside>

            <div
              className={`control-preview${activeAction === 2 ? ' is-rebuilt' : ''}${activeAction === 3 ? ' is-variant' : ''}`}
            >
              <div className="control-preview__copy">
                <span>{activeAction === 3 ? 'Вариант 02' : 'Новый продукт'}</span>
                <h3 className={activeAction === 0 ? 'is-selected' : undefined}>{previewTitle}</h3>
                <p>
                  Готовая страница следует правилам бренда и сохраняет единую визуальную систему
                </p>
                <em>Подробнее</em>
              </div>
              <div className={`control-preview__visual${activeAction === 1 ? ' is-selected' : ''}`}>
                <i />
                <i />
                <i />
              </div>
              <div
                className={
                  activeAction === 2
                    ? 'control-preview__layout-mark is-selected'
                    : 'control-preview__layout-mark'
                }
              >
                Композиция
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
