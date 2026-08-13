import { Container } from '../../ui/Container'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top"><a className="brand brand--footer" href="#top"><span className="brand__mark" aria-hidden="true">S</span><span>снэпбилд</span></a><p>Платформа, где всё создаётся в рамках вашего бренда и дизайн-системы.</p></div>
        <div className="site-footer__links"><div><strong>Навигация</strong><a href="#product">Продукт</a><a href="#capabilities">Возможности</a><a href="#security">Безопасность</a></div><div><strong>Документация</strong><a href="#faq">FAQ</a><a href="#roadmap">Роадмап</a></div><div><strong>Контакты</strong><a href="mailto:hey@snapbuild.ru">hey@snapbuild.ru</a><a href="https://t.me/snapbuild">Telegram</a></div></div>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Снэпбилд</span><span>Сгенерировано в Снэпбилде</span></div>
      </Container>
    </footer>
  )
}
