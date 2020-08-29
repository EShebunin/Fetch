import React from 'react';

import promoImg from '../../assets/img/promo_1.png';
import promoImg2 from '../../assets/img/promo_2.png';
import promoImg3 from '../../assets/img/promo_3.jpg';
import promoImg4 from '../../assets/img/promo_4.jpg';
import promoImg5 from '../../assets/img/promo_5.jpg';

function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__inner">
          <div className="promo__block promo__block--1">
            <div className="promo__content">
              <h2 className="promo__title promo__title--1">Лукбук, лето 2019</h2>
              <p className="promo__subtitle promo__subtitle--1">
                Стильные образы для тёплых деньков
              </p>

              <div className="promo__img">
                <div className="promo__img--1">
                <img src={promoImg} alt="Promo" />
                </div>
              </div>
            </div>
          </div>

          <div className="promo__block promo__block--2">
            <div className="promo__content">
              <h2 className="promo__title promo__title--2">Выбор редакции: часы</h2>
              <p className="promo__subtitle promo__subtitle--2">
                ТОП-5 лучших предложений по версии администрации Фетч
              </p>
            </div>
          </div>

          <div className="promo__block promo__block--3">
            <div className="promo__content">
              <h2 className="promo__title promo__title--3">
                Новая коллекция adidas Originals
              </h2>
              <p className="promo__subtitle promo__subtitle--3">
                Десять крутейших кроссовок
              </p>

              <div className="promo__img">
                <div className="promo__img--3">
                  <img src={promoImg2} alt="Promo" />
                </div>
              </div>
            </div>
          </div>

          <div className="promo__block promo__block--4">
            <div className="promo__content">
              <h2 className="promo__title promo__title--4">
                Предзаказ: Maison Margiela Fusion
              </h2>
              <p className="promo__subtitle promo__subtitle--4">От 92 000 ₽</p>

              <div className="promo__img">
                <div className="promo__img--4">
                  <img src={promoImg3} alt="Promo" />

                  <img src={promoImg4} alt="Promo" />

                  <img src={promoImg5} alt="Promo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
