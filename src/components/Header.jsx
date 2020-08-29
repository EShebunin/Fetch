import React from 'react'

function Header() {
  return (
    <header className="header" data-theme="white">
      <div className="container">
        <div className="header__inner">
          <a href="/" className="header__logo" >
            <h3>Фетч</h3>
          </a>
          <div className="header__nav">
            <a href="catalog.html" className="header__link" title="Одежда">Одежда</a>
            <a href="catalog.html" className="header__link" title="Обувь">Обувь</a>
            <a href="catalog.html" className="header__link" title="Аксессуары">Аксессуары</a>
            <a href="about.html" className="header__link" title="Блог">Блог</a>
            <a href="about.html" className="header__link" title="Магазин">Магазин</a>
            <a href="about.html" className="header__link" title="Доставка и оплата">Доставка и оплата</a>
          </div>
          <a href="checkout.html" className="header__cart" title="Оформить заказ">
            <span className="header__icon icon-cart">
              <span className="header__cart--count">4</span>
            </span>
            <p className="header__cart--text">Оформить заказ</p>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
