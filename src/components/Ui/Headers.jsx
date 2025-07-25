import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Headers = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    return setShow(!show);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</NavLink>
              </li>
              <li>
                <NavLink to="/country" style={{ textDecoration: 'none', color: 'inherit' }}>Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};