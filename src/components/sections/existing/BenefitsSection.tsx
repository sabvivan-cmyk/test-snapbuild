import { Container } from '../../ui/Container'
import { SectionHeader } from '../../ui/SectionHeader'

const rows = [
  ['Time-to-market', '5 минут', '30–60 минут', '2–3 дня', '1–2 дня', '3–5 недель'],
  ['Дизайн-система', '100% точность', 'Частично, из Figma', 'Шаблоны', 'Вручную в коде', 'Вручную, через ревью'],
  ['Визуальный редактор', '✓ + AI', '—', '✓', '—', '—'],
  ['Требуемые навыки', 'Нет', 'Промпты + код', 'Дизайн', 'Разработка', 'Полная команда'],
]

export function BenefitsSection() {
  return (
    <section className="section benefits" id="benefits">
      <Container>
        <SectionHeader title="Почему команды выбирают Снэпбилд" description="Вы получаете не редактор, а результат: готовые маркетинговые материалы без проблем с настройками." />
        <div className="comparison" role="region" aria-label="Сравнение подходов" tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>Особенности</th>
                <th className="comparison__accent">снэпбилд</th>
                <th>Claude + Figma MCP</th>
                <th>No-code платформа</th>
                <th>Cursor</th>
                <th>Традиционный</th>
              </tr>
            </thead>
            <tbody>{rows.map(([name, ...values]) => (
              <tr key={name}>
                <th>{name}</th>{values.map((value, index) => (
                  <td className={index === 0 ? 'comparison__accent' : undefined} key={`${name}-${index}`}>{value}</td>
                ))}
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}