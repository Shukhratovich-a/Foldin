import "./Footer.scss";
import Socials from "../Socials/Socials";

import FooterLogo from "../../Assets/Images/Logo-footer.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__left">
            <a className="footer__link" href="./index.html">
              <img
                className="footer__logo__image"
                src={FooterLogo}
                alt="Site logo"
                width={280}
                height={57}
              />
            </a>

            <Socials />
          </div>

          <div className="footer__right">
            <ul className="footer__list">
              <li className="footer__item">
                <p className="footer__item__text">Продукция</p>

                <ul className="footer__sublist">
                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Раздвижные стены
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Раздвижные перегородки
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Материалы отделки
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Новинки
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Калькулятор
                    </a>
                  </li>
                </ul>
              </li>

              <li className="footer__item">
                <p className="footer__item__text">Области применения</p>

                <ul className="footer__sublist">
                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Офисные помещения
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Бизнес центры
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Банки
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Торговые центры
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Автосалоны
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      ... И еще 12
                    </a>
                  </li>
                </ul>
              </li>

              <li className="footer__item">
                <p className="footer__item__text">О компании</p>

                <ul className="footer__sublist">
                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      История
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Наши лица
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Новости
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Статьи
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      Почему мы
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <a className="footer__sublist__link" href="#link">
                      FAQ
                    </a>
                  </li>
                </ul>
              </li>

              <li className="footer__item">
                <p className="footer__item__text">Не теряйте нас</p>

                <ul className="footer__sublist">
                  <li className="footer__sublist__item">
                    <span className="footer__sublist__text">Россия</span>
                    <a className="footer__sublist__link" href="tel:88007752691">
                      8 (800) 775-26-91
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <span className="footer__sublist__text">Москва</span>
                    <a className="footer__sublist__link" href="tel:+74950850580">
                      +7 (495) 085-05-80
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <span className="footer__sublist__text">Санкт-Петербург</span>
                    <a className="footer__sublist__link" href="tel:+78126046051">
                      +7 (812) 604-60-51
                    </a>
                  </li>

                  <li className="footer__sublist__item">
                    <span className="footer__sublist__text">Почта</span>
                    <a className="footer__sublist__link" href="mailto:info@foldin.ru">
                      info@foldin.ru
                    </a>
                  </li>
                </ul>
              </li>

              <li className="footer__item">
                <p className="footer__item__text">Оставьте заявку</p>

                <form className="footer__form">
                  <span className="footer__form__inner">
                    <input
                      className="footer__input"
                      type="text"
                      name="user_name"
                      placeholder="Имя"
                    />
                    <input
                      className="footer__input"
                      type="tel"
                      name="user_tel"
                      placeholder="Телефон"
                    />
                  </span>
                  <button className="footer__button"></button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__text">Политика конфиденциальности</p>
          <p className="footer__text">
            Copyright © «Компания «ФОЛДИН» раздвижные перегородки», 2003-2021
          </p>
          <p className="footer__text">made by azart.tech</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
