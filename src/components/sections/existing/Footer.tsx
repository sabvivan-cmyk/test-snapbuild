import logo from '../../../assets/snapbuild/582db07d8ccd60da.svg'
import { Container } from '../../ui/Container'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <a href="#top">
              <img src={logo} alt="Снэпбилд" />
            </a>
            <p>Платформа, где всё создаётся в рамках вашего бренда и дизайн-системы</p>
          </div>
          <div className="site-footer__links">
            <div>
              <strong>Навигация</strong>
              <a href="#product">Продукт</a>
              <a href="#capabilities">Возможности</a>
              <a href="#benefits">Преимущества</a>
              <a href="#security">Безопасность</a>
              <a href="#roadmap">Роадмап</a>
              <a href="#faq">Частые вопросы</a>
            </div>
            <div>
              <strong>Документация</strong>
              <a href="#product">Политика конфиденциальности</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <strong>Контакты</strong>
              <a href="mailto:hey@snapbuild.ru">Запросить демо</a>
              <a href="https://t.me/snapbuild">Telegram</a>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© Спроектировано в Снэпбилд. Все права защищены.</span>
          <a href="mailto:hey@snapbuild.ru">hey@snapbuild.ru</a>
        </div>
      </Container>
    </footer>
  );
}