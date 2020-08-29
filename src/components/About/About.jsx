import React from "react";

function About() {
  return (
    <section className="about">
      <div className="container">
        <h1 className="about__title">О магазине Фетч</h1>
        <div className="about__inner">
          <div className="about__text">
            <div className="about__description">
              <p>
                В магазине Фетч представлено более 100 ведущих мировых
                производителей одежды и обуви.
              </p>
              <p>
                Разнообразие ассортимента обеспечивают товары культовых брендов
                современности: Barbour, Fred Perry, Norse Projects, Edwin и
                капсульные коллекции компаний, делающих ставку на эксклюзивность
                и премиальный статус своей продукции — Stone Island, Polo Ralph
                Lauren, C.P. Company.
              </p>
              <p>
                Приобрести последние можно лишь в нескольких торговых точках
                по всему миру, включая Фетч.
              </p>
              <p>
                Особый повод для гордости — обширная подборка редких и культовых
                кроссовок adidas Originals, Nike, New Balance, ASICS, Reebok и
                другие.
              </p>
            </div>
          </div>
          <div className="about__card">
            <div className="about__information">
              <p className="address">Москва, Тимирязевская, 3</p>

              <ul className="contacts">
                <li className="contacts__email">
                  <a href="/" className="contacts__link">
                    shop@fetch.ru
                  </a>
                </li>

                <li className="contacts__phone">
                  <a href="/" className="phone contacts__link">
                    <span className="phone__number">8 800 912-11-42</span>

                    <span className="phone__subtitle">Звонок бесплатный</span>
                  </a>
                </li>
              </ul>
              <p className="payment">
                ИНН/КПП: 2901152637 / 290101001 <br />
                ОГРН: 1062901063576 <br />
                БИК: 041117601, к/с 30101810100000000601
              </p>
              <p className="payment">
                Расчетный счет: 40702810004000103812 в отделении N8637
                <br />
                Сбербанка России, Архангельск
              </p>
              <p className="director">
                Генеральный директор — Василенко Артём Викторович
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
