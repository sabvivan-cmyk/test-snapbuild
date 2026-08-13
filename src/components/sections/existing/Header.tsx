import { ButtonLink } from '../../ui/ButtonLink'
import { Container } from '../../ui/Container'

const navigation = [
  { href: '#product', label: 'Продукт' },
  { href: '#capabilities', label: 'Возможности' },
  { href: '#benefits', label: 'Преимущества' },
  { href: '#security', label: 'Безопасность' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="brand" href="#top" aria-label="Snapbuild — на главную">
          <span className="brand__mark" aria-hidden="true">S</span>
          <span>снэпбилд</span>
        </a>
        <nav className="site-nav" aria-label="Основная навигация">
          {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <ButtonLink className="site-header__cta" href="https://builder.snapbuild.ru/">Начать сейчас</ButtonLink>
      </Container>
    </header>
  )
}
