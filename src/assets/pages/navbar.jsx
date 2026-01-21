import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About Us", "Services", "Contact Us", "Our Purpose"];

  return (
    <div className="navbar">
      {/* LOGO (always left) */}
      <div className="navbar-logo">
        <img src="/logo.png" alt="BrandDigitalHub Logo" />
      </div>

      {/* Desktop Links */}
      <div className="navbar-links">
        {links.map((item) => (
          <a key={item} href="#" className="nav-link">
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button (right side) */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        {links.map((item) => (
          <a
            key={item}
            href="#"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
