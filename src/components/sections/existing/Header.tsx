import logo from '../../../assets/snapbuild/582db07d8ccd60da.svg'
import { ButtonLink } from '../../ui/ButtonLink'

const navigation = [{ href: '#product', label: 'Продукт' }, { href: '#capabilities', label: 'Возможности' }, { href: '#security', label: 'Безопасность' }, { href: '#faq', label: 'FAQ' }]

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="Снэпбилд — на главную">
          <img src={logo} alt="Снэпбилд" />
        </a>
        <nav className="site-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <ButtonLink className="site-header__cta" href="https://builder.snapbuild.ru/">Начать сейчас</ButtonLink>
      </div>
    </header>
  );
}