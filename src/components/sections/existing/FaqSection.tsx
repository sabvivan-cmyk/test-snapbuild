import { Container } from '../../ui/Container'
import { SectionHeader } from '../../ui/SectionHeader'

const questions = [
  { question: 'Что можно создавать в Снэпбилде?', answer: 'Сайты, изображения, видео, баннеры и презентации — в едином фирменном стиле и с возможностью редактирования результата.' },
  { question: 'Как работает анализ бренда?', answer: 'Платформа анализирует интерфейсы, графические материалы и компоненты: цвета, типографику, сетки, отступы и архитектуру элементов.' },
  { question: 'Можно ли экспортировать результат?', answer: 'Да. Результат можно подготовить для существующей среды разработки и корпоративных процессов публикации.' },
  { question: 'Чем Снэпбилд отличается от универсальных AI-инструментов?', answer: 'Генерация строится вокруг корпоративной дизайн-системы. Правила бренда применяются по умолчанию, поэтому результат остаётся управляемым и предсказуемым.' },
  { question: 'Возможна ли работа в закрытом контуре?', answer: 'Да. Платформа предусматривает развёртывание в изолированной корпоративной инфраструктуре.' },
]

export function FaqSection() {
  return (
    <section className="section faq" id="faq">
      <Container className="faq__layout">
        <SectionHeader title="Часто задаваемые вопросы" description="Ответы, которые помогут принять решение уверенно — без рисков для бренда и безопасности." />
        <div className="faq__items">
          {questions.map((item, index) => <details key={item.question} open={index === 0}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}
        </div>
      </Container>
    </section>
  )
}
