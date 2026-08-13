import { Container } from '../../ui/Container'
import { SectionHeader } from '../../ui/SectionHeader'

const rows = [
  ['Time-to-market', '5 минут', '30–60 мин', '2–3 дня', '3–5 недель'],
  ['Дизайн-система', '100% точность', 'Частично', 'Шаблоны', 'Через ревью'],
  ['Редактирование', 'Визуально + AI', 'Через промпт', 'Вручную', 'Через команду'],
  ['Требуемые навыки', 'Нет', 'Промпты + код', 'Дизайн', 'Полная команда'],
]

export function BenefitsSection() {
  return (
    <section className="section benefits" id="benefits">
      <Container>
        <SectionHeader title="Почему команды выбирают Снэпбилд" description="Вы получаете не редактор, а результат: готовые маркетинговые материалы без проблем с настройками." />
        <div className="comparison" role="region" aria-label="Сравнение подходов" tabIndex={0}>
          <table>
            <thead><tr><th>Особенности</th><th>Снэпбилд</th><th>AI + Figma</th><th>No-code</th><th>Традиционно</th></tr></thead>
            <tbody>{rows.map(([name, ...values]) => <tr key={name}><th>{name}</th>{values.map((value, index) => <td className={index === 0 ? 'comparison__accent' : undefined} key={value}>{value}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
