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
