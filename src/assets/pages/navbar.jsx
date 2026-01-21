import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../logo.png"; // ✅ this is the correct path

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);

      // if user switches to desktop, close menu
      if (!mobile) setOpenMenu(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = ["Home", "About Us", "Services", "Contact Us", "Our Purpose"];

  return (
    <nav className="navbar">
      {/* LEFT: LOGO */}
      <div className="navbar-left">
        <img src={logo} alt="BrandDigitalHub Logo" className="navbar-logo" />
      </div>

      {/* RIGHT: Desktop Links */}
      {!isMobile && (
        <div className="navbar-links">
          {navLinks.map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </div>
      )}

      {/* RIGHT: Mobile Menu Button */}
      {isMobile && (
        <button className="menu-btn" onClick={() => setOpenMenu(!openMenu)}>
          ☰
        </button>
      )}

      {/* Mobile Dropdown */}
      {isMobile && openMenu && (
        <div className="mobile-dropdown">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="mobile-link"
              onClick={() => setOpenMenu(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
