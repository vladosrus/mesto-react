import header__logo from "../images/header__logo.svg";

function Header() {
  return (
    <header className="header">
      <a href="#">
        <img
          src={header__logo}
          alt="Логотип проекта Место Россия"
          className="header__logo"
        />
      </a>
    </header>
  );
}

export default Header;