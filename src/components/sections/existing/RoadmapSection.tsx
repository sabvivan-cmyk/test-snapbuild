import { Container } from '../../ui/Container'
import { SectionHeader } from '../../ui/SectionHeader'

const releases = [
  { date: 'Декабрь 2025', title: 'Сайты за 5 минут', text: 'Корпоративные страницы по вашей дизайн-системе.' },
  { date: 'Январь 2026', title: 'Консистентные AI-иллюстрации', text: 'Единый стиль графики через фирменные пресеты.' },
  { date: 'Март 2026', title: 'Режим изображений', text: 'Управление стилями, темами и объектами.' },
  { date: 'Апрель 2026', title: 'Генерация видео', text: 'Видео из изображений с ключевыми кадрами.' },
  { date: 'Июль 2026', title: 'Баннеры и презентации', text: 'Новые режимы на едином визуальном канвасе.' },
  { date: 'Август 2026', title: 'AI-маркетолог', text: 'Кампания целиком — от изображения до сайта.' },
]

export function RoadmapSection() {
  return (
    <section className="section roadmap" id="roadmap">
      <Container>
        <SectionHeader title="Каждый день — новый релиз" description="Приоритизируем бэклог для ваших целей и последовательно соединяем все форматы в одну платформу." />
        <ol className="roadmap__list">
          {releases.map((release, index) => <li key={release.title}><span>{String(index + 1).padStart(2, '0')}</span><div><time>{release.date}</time><h3>{release.title}</h3><p>{release.text}</p></div></li>)}
        </ol>
      </Container>
    </section>
  )
}
