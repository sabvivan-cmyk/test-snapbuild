import { useLayoutEffect, type PropsWithChildren } from 'react'
import { Footer } from '../sections/existing/Footer'
import { Header } from '../sections/existing/Header'

export function PageLayout({ children }: PropsWithChildren) {
  useLayoutEffect(() => {
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior
    const previousScrollRestoration = window.history.scrollRestoration
    let resetFrame = 0
    let restoreFrame = 0

    const resetScroll = () => {
      if (window.location.hash) return

      window.scrollTo(0, 0)
      resetFrame = window.requestAnimationFrame(() => window.scrollTo(0, 0))
    }

    const finishRestoration = () => {
      resetScroll()
      restoreFrame = window.requestAnimationFrame(() => {
        root.style.scrollBehavior = previousScrollBehavior
      })
    }

    window.history.scrollRestoration = 'manual'
    root.style.scrollBehavior = 'auto'
    resetScroll()
    window.addEventListener('pageshow', finishRestoration)

    if (document.readyState === 'complete') {
      finishRestoration()
    } else {
      window.addEventListener('load', finishRestoration, { once: true })
    }

    return () => {
      window.removeEventListener('load', finishRestoration)
      window.removeEventListener('pageshow', finishRestoration)
      window.cancelAnimationFrame(resetFrame)
      window.cancelAnimationFrame(restoreFrame)
      window.history.scrollRestoration = previousScrollRestoration
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [])

  useLayoutEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return
    }

    const sections = document.querySelectorAll<HTMLElement>(
      'main > section:not(.hero), .site-footer',
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('section-reveal--visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    sections.forEach((section) => {
      section.classList.add('section-reveal')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
