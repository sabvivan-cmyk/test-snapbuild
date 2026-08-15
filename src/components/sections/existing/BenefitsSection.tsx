import { SectionHeader } from '../../ui/SectionHeader'

const rows = [
  ['Time-to-market', '5 минут', '30–60 мин', '2–3 дня', '1–2 дня', '3–5 недель'],
  ['Дизайн-система', '100% точность', 'Частично, из\u00a0Figma', 'Шаблоны', 'Вручную в\u00a0коде', 'Вручную, через ревью'],
  ['Визуальный редактор', '✓ + ИИ', '—', '✓', '—', '—'],
  ['Требуемые навыки', 'Нет', 'Промпты + код', 'Дизайн', 'Разработка', 'Полная команда'],
]

export function BenefitsSection() {
  return <section className="section benefits" id="benefits"><SectionHeader title="Почему команды выбирают Снэпбилд" description={'Вы\u00a0получаете не\u00a0редактор, а\u00a0результат: готовые маркетинговые материалы без\u00a0проблем с\u00a0настройками'} /><div className="comparison" role="region" aria-label="Сравнение подходов" tabIndex={0}><div className="comparison__frame"><div aria-hidden="true" className="comparison__accent-border" /><table><thead><tr><th>Особенности</th><th className="comparison__accent"><span className="comparison__brandname">снэпбилд</span></th><th>Claude + Figma MCP</th><th>No-code платформы</th><th>Cursor</th><th>Традиционный</th></tr></thead><tbody>{rows.map(([name, ...values]) => <tr key={name}><th>{name}</th>{values.map((value, index) => <td className={index === 0 ? 'comparison__accent' : undefined} key={`${name}-${index}`}>{value}</td>)}</tr>)}</tbody></table></div></div></section>
}
