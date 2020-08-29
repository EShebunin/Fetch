import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__content">
            <h2 className="footer__title">Фетч</h2>
            <ul className="footer__links">
              <li>
                <a href="/">Магазин</a>
              </li>
              <li>
                <a href="/">Блог</a>
              </li>
              <li>
                <a href="/">Доставка и оплата</a>
              </li>

              <ul className="contacts contacts--footer">
                <li className="contacts__email">
                  <a href="/" className="contacts__link">
                    shop@fetch.ru
                  </a>
                </li>

                <li className="contacts__phone contacts__phone--footer">
                  <a href="/" className="phone contacts__link">
                    <span className="phone__number">8 800 912-11-42</span>

                    <span className="phone__subtitle--footer">
                      Звонок бесплатный
                    </span>
                  </a>
                </li>
              </ul>
            </ul>
          </div>

          <div className="menu__content">
            <div className="menu__content--group">
              <h4 className="menu__content--title">
                <a href="/" className="menu__link">
                  Для мужчин
                </a>
              </h4>
              <ul className="menu__content--items">
                <li>
                  <a href="/" className="menu__link">
                    Верхняя одежда
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Рубашки и поло
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Трикотаж
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Брюки и джинсы
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Бельё и носки
                  </a>
                </li>
              </ul>
            </div>

            <div className="menu__content--group">
              <h4 className="menu__content--title">
                <a href="/" className="menu__link">
                  Для женщин
                </a>
              </h4>
              <ul className="menu__content--items">
                <li>
                  <a href="/" className="menu__link">
                    Верхняя одежда
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Рубашки и поло
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Трикотаж
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Платья и юбки
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Бельё и носки
                  </a>
                </li>
              </ul>
            </div>

            <div className="menu__content--group">
              <h4 className="menu__content--title">
                <a href="/" className="menu__link">
                  Обувь
                </a>
              </h4>
              <ul className="menu__content--items">
                <li>
                  <a href="/" className="menu__link">
                    Кроссовки и кеды
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Ботинки
                  </a>
                </li>
              </ul>
            </div>

            <div className="menu__content--group">
              <h4 className="menu__content--title">
                <a href="/" className="menu__link">
                  Аксессуары
                </a>
              </h4>
              <ul className="menu__content--items">
                <li>
                  <a href="/" className="menu__link">
                    Сумки и рюкзаки
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Часы
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Бижутерия
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Средства для ухода
                  </a>
                </li>
              </ul>
            </div>

            <div className="menu__content--group">
              <h4 className="menu__content--title">
                <a href="/" className="menu__link">
                  Скидки
                </a>
              </h4>
              <ul className="menu__content--items">
                <li>
                  <a href="/" className="menu__link">
                    Летняя распродажа
                  </a>
                </li>

                <li>
                  <a href="/" className="menu__link">
                    Коллекция 2018
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
