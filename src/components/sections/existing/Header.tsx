import { useEffect, useState } from 'react'
import logo from '../../../assets/snapbuild/582db07d8ccd60da.svg'
import { ButtonLink } from '../../ui/ButtonLink'

const navigation = [
  { href: '#capabilities', label: 'Возможности' },
  { href: '#product', label: 'Продукт' },
  { href: '#security', label: 'Безопасность' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="site-header__bar">
        <a className="brand" href="#top" aria-label="Снэпбилд — на главную"><img src={logo} alt="Снэпбилд" /></a>
        <nav className="site-nav" aria-label="Основная навигация">{[navigation[1], navigation[0], navigation[2], navigation[3]].map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>
        <div className="site-header__actions"><ButtonLink className="site-header__cta" href="https://builder.snapbuild.ru/">Начать сейчас</ButtonLink><button className="site-header__burger" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Закрыть меню' : 'Открыть меню'} onClick={() => setOpen((value) => !value)}><span /></button></div>
      </div>
      <nav className="mobile-menu" id="mobile-menu" aria-hidden={!open}>{navigation.map((item) => <a href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<ButtonLink href="https://builder.snapbuild.ru/">Начать сейчас</ButtonLink></nav>
    </header>
  )
}
