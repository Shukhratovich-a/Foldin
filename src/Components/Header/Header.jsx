import Nav from "../Nav/Nav";
import "./Header.scss";
import Logo from "../../Assets/Images/Logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <button className="header__burger"></button>
        <a className="header__link" href="#link">
          <img
            className="header__logo"
            src={Logo}
            alt="Site logo"
            width={40}
            height={40}
          />
        </a>

        <Nav />

        <a className="header__link-account" href="#link" title="Log-in"></a>
      </div>
    </header>
  );
}

export default Header;
