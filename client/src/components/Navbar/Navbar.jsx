import "./Navbar.scss";

import Logo from "../../assets/logo.webp";

export default function Navbar() {
  return (
    <section className="navbar-container">
      <div className="inner-container">
        <div className="left">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="right">
          <ul className="menu-container">
            <li className="menu-item">Flight</li>
            <li className="menu-item">Hotel</li>
            <li className="menu-item">Visa</li>
            <li className="menu-item">Holiday</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
