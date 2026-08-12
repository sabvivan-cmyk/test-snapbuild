import { Container } from '../ui/Container'

type SectionPlaceholderProps = {
  id: string
  label: string
  kind: 'existing' | 'new'
}

export function SectionPlaceholder({ id, label, kind }: SectionPlaceholderProps) {
  return (
    <section className="section section--placeholder" id={id} aria-labelledby={`${id}-title`}>
      <Container>
        <p className="section-placeholder__kind">{kind === 'new' ? 'Новая секция' : 'Существующая секция'}</p>
        <h2 className="section-placeholder__title" id={`${id}-title`}>
          {label}
        </h2>
      </Container>
    </section>
  )
}
