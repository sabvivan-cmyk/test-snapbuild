import { useEffect, useRef, useState } from 'react'

import heroImage from '../../../assets/snapbuild/hero-snapbuild-2026-08-07-v2.webp'
import logoAvito from '../../../assets/snapbuild/logo-avito.svg'
import logoCian from '../../../assets/snapbuild/logo-cian.svg'
import logoLenta from '../../../assets/snapbuild/logo-lenta.svg'
import logoOzon from '../../../assets/snapbuild/logo-ozon.svg'
import logoT2 from '../../../assets/snapbuild/logo-t2.svg'
import { ButtonLink } from '../../ui/ButtonLink'

const logos = [{ src: logoOzon, alt: 'OZON' }, { src: logoT2, alt: 't2' }, { src: logoAvito, alt: 'Авито' }, { src: logoCian, alt: 'Циан' }, { src: logoLenta, alt: 'Лента' }]

export function HeroSection() {
  const logosRef = useRef<HTMLElement>(null)
  const [logosRevealed, setLogosRevealed] = useState(false)

  useEffect(() => {
    const section = logosRef.current
    if (!section) return

    if (!('IntersectionObserver' in window)) {
      setLogosRevealed(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setLogosRevealed(true)
      observer.disconnect()
    }, { threshold: 0.18 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return <><section className="hero" id="top"><div className="hero__card"><div className="hero__inner"><div className="hero__copy"><h1>Платформа, где все создается в&nbsp;рамках вашего бренда и&nbsp;дизайн-системы</h1><p>Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды мог создавать профессиональные материалы в фирменном стиле за минуты, а не дни.</p><ButtonLink href="https://builder.snapbuild.ru/">Начать сейчас</ButtonLink></div><div className="hero__media"><img className="hero__visual" src={heroImage} alt="" /></div></div></div></section><section className={`client-logos${logosRevealed ? ' is-revealed' : ''}`} aria-label="Компании, использующие Снэпбилд" ref={logosRef}><div className="client-logos__track">{[0, 1].map((copy) => <div className="client-logos__set" aria-hidden={copy === 1} key={copy}>{logos.map((item) => <img src={item.src} alt={copy === 0 ? item.alt : ''} key={item.alt} />)}</div>)}</div><p>С&nbsp;платформой работают команды, для&nbsp;которых бренд&nbsp;— закон</p></section></>
}
