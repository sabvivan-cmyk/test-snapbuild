import type { PropsWithChildren } from 'react'
import { Footer } from '../sections/existing/Footer'
import { Header } from '../sections/existing/Header'

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
