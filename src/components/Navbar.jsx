import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="nav">
      <a href="#home" className="logo">
        A<span>E</span>
      </a>

      <button className="menu" onClick={() => setMenu((prev) => !prev)}>
        <span className={!menu ? "menu_line" : "rotate-left"}></span>
        <span className={!menu ? "menu_line" : "none"}></span>
        <span className={!menu ? "menu_line" : "rotate-right"}></span>
      </button>

      <ul className={menu ? "navLinks active" : "navLinks"}>
        <li>
          <a
            className="navlinks_link"
            href="#home"
            onClick={() => setMenu((prev) => !prev)}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="navlinks_link"
            href="#about"
            onClick={() => setMenu((prev) => !prev)}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="navlinks_link"
            href="#projects"
            onClick={() => setMenu((prev) => !prev)}
          >
            Work
          </a>
        </li>
        <li>
          <a
            className="navlinks_link"
            href="#contact"
            onClick={() => setMenu((prev) => !prev)}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
