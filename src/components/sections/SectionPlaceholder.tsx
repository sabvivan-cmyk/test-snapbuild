import { Container } from '../ui/Container'

type SectionPlaceholderProps = {
  id: string
  label: string
  kind: 'existing' | 'new'
  headingLevel?: 1 | 2
}

export function SectionPlaceholder({ id, label, kind, headingLevel = 2 }: SectionPlaceholderProps) {
  const Heading = headingLevel === 1 ? 'h1' : 'h2'

  return (
    <section className="section section--placeholder" id={id} aria-labelledby={`${id}-title`}>
      <Container>
        <p className="section-placeholder__kind">{kind === 'new' ? 'Новая секция' : 'Существующая секция'}</p>
        <Heading className="section-placeholder__title" id={`${id}-title`}>
          {label}
        </Heading>
      </Container>
    </section>
  )
}
