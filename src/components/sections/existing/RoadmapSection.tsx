import { useEffect, useRef } from 'react'

const releases = [
  [
    'Декабрь,\u00a02025',
    'Сайты за\u00a05 минут',
    'Генерация корпоративных сайтов по\u00a0вашей дизайн-системе — 100% консистентность, без\u00a0разработчиков',
  ],
  [
    'Январь,\u00a02026',
    'Консистентные AI-иллюстрации',
    'Настраиваете фирменный стиль один раз — графика для\u00a0каждой секции сайта в\u00a0едином виде через стилевые пресеты',
  ],
  [
    'Февраль,\u00a02026',
    'Дизайн-система из\u00a0вашего сайта',
    'Сканируем существующие страницы и\u00a0собираем из\u00a0них готовую дизайн-систему; AI сам выстраивает структуру',
  ],
  [
    'Март,\u00a02026',
    'Режим изображений',
    'Брендовая графика в\u00a0один клик: управление стилями и\u00a0темами, десятки параметров редактирования',
  ],
  [
    'Апрель,\u00a02026',
    'Генерация видео',
    'Видео из\u00a0ваших изображений с\u00a0ключевыми кадрами; AI точнее на\u00a078%, панель рассуждений и\u00a0управление правами',
  ],
  [
    'Май,\u00a02026',
    'Ресайзы изображений',
    'Одна фокус-точка → все форматы (16:9, 9:16, 1:1 и\u00a0другие) с\u00a0автоматическим бюджетом веса на\u00a0экспорт',
  ],
  [
    'Июнь,\u00a02026',
    'Расширенный редактор, как\u00a0в\u00a0Figma',
    'Слои, изменение размеров любого контейнера, превью структуры в\u00a0чате, версии промптов и\u00a0ветвление диалогов',
  ],
  [
    'Июль,\u00a02026',
    'Канвас, баннеры и\u00a0презентации',
    'Канвас во\u00a0всех режимах; новые режимы — генерация рекламных баннеров и\u00a0корпоративных презентаций',
  ],
  [
    'Август,\u00a02026',
    'ИИ-маркетолог',
    'Следит за\u00a0данными, сам обновляет ваши материалы и\u00a0собирает кампанию целиком — от\u00a0изображений до\u00a0сайта',
  ],
  [
    'Сентябрь,\u00a02026',
    'Компонентный подход',
    'AI сам компонует секции сайтов из\u00a0элементов вашей дизайн-библиотеки',
  ],
  [
    'Октябрь,\u00a02026',
    'Предиктивные рекомендации',
    'Платформа сама предлагает, что\u00a0обновить в\u00a0кампаниях — от\u00a0секций сайта до\u00a0баннеров',
  ],
  ['Ноябрь,\u00a02026', 'Инфраструктура', 'Развертывание в\u00a0вашей сети и\u00a0контуре'],
]

export function RoadmapSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return
    let dragging = false
    let startX = 0
    let startScrollLeft = 0
    const down = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return
      dragging = true
      startX = event.pageX
      startScrollLeft = scroller.scrollLeft
      scroller.classList.add('is-dragging')
      event.preventDefault()
    }
    const move = (event: PointerEvent) => {
      if (dragging) scroller.scrollLeft = startScrollLeft - (event.pageX - startX)
    }
    const release = () => {
      dragging = false
      scroller.classList.remove('is-dragging')
    }
    scroller.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', release)
    window.addEventListener('pointercancel', release)
    window.addEventListener('blur', release)
    return () => {
      scroller.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', release)
      window.removeEventListener('pointercancel', release)
      window.removeEventListener('blur', release)
    }
  }, [])

  return (
    <section className="section roadmap" id="roadmap">
      <header className="section-header">
        <h2>Каждый день — новый релиз</h2>
        <p>{'Приоритизируем бэклог для\u00a0ваших целей'}</p>
      </header>
      <div
        className="roadmap__scroller"
        ref={scrollerRef}
        tabIndex={0}
        role="region"
        aria-label="Дорожная карта"
      >
        <ol className="roadmap__list">
          {releases.map(([date, title, text], index) => (
            <li className={index < 8 ? 'is-reached' : ''} key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              <time>{date}</time>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
