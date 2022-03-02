import Nav from "../Nav/Nav";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <a className="header__logo" href="./index.html">dsf</a>
        </div>

        <div className="header__bottom">
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
