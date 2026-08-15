import type { ReactNode } from 'react'

type SectionHeaderProps = {
  title: ReactNode
  description?: string
  align?: 'start' | 'center'
}

export function SectionHeader({ title, description, align = 'start' }: SectionHeaderProps) {
  return (
    <header className={`section-header section-header--${align}`}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  )
}
