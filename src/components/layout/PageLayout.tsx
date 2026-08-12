import type { PropsWithChildren } from 'react'

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="site-header" aria-label="Шапка сайта" />
      <main>{children}</main>
      <footer className="site-footer" aria-label="Подвал сайта" />
    </>
  )
}
