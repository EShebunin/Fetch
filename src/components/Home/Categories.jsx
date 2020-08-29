import React from "react";

function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories__inner">
          <div className="categories__text">
            <p>
              <span className="categories__text--title">Фетч</span> —
              мультибрендовый магазин модной одежды.
            </p>
            <p>Следим за трендами и часто обновляем ассортимент.</p>
            <p>Доставляем по Москве за день, по России — за неделю.</p>
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
    </section>
  );
}

export default Categories;
