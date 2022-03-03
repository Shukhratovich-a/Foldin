import "./Nav.scss";

function Nav() {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="#link">
              Продукция
            </a>

            <div className="nav__item__inner">
              <div className="nav__item__aside">
                <ul className="nav__sublist">
                  <li className="nav__sublist__item">
                    <p className="nav__submenu__title">Раздвижные стены</p>

                    <ul className="nav__submenu">
                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link" href="#link">
                          Раздвижная стена NORMA
                        </a>
                      </li>

                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link" href="#link">
                          Огнеупорные стены NORMA
                        </a>
                      </li>

                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link" href="#link">
                          Стеклянные раздвижные стены President
                        </a>
                      </li>

                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link nav__submenu__link--new" href="#link">
                          Полуавтоматические стены NORMA
                        </a>
                      </li>

                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link nav__submenu__link--new" href="#link">
                          Разборные раздвижные стены NORMA
                        </a>
                      </li>

                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link" href="#link">
                          Раздвижные стены Parthos
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav__sublist__item">
                    <p className="nav__submenu__title">Раздвижные перегородки</p>

                    <ul className="nav__submenu">
                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link" href="#link">
                          Перегородки Winab
                        </a>
                      </li>

                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link" href="#link">
                          Стеклянные перегородки Scan-Mikael
                        </a>
                      </li>

                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link" href="#link">
                          Перегородки Norma
                        </a>
                      </li>

                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link" href="#link">
                          Перегородки Norma с Потолочным треком
                        </a>
                      </li>

                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link" href="#link">
                          Перегородки Norma с Напольно-потолочным треком
                        </a>
                      </li>

                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link" href="#link">
                          Перегородки Norma огнеупорные
                        </a>
                      </li>

                      <li className="nav__submenu__item">
                        <a className="nav__submenu__link" href="#link">
                          Раздвижные стены Parthos
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav__sublist__item">
                    <p className="nav__submenu__title">Материалы отделки</p>
                    <p className="nav__submenu__title">Новинки</p>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#link">
              Области применения
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#link">
              Калькулятор
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#link">
              Проекты
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#link">
              Информация
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#link">
              Новости
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#link">
              О компании
            </a>
          </li>

          <li className="nav__item">
            <a className="nav__link" href="#link">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
