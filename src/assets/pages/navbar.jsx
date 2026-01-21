import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../logo.png";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);
      if (!mobile) setOpenMenu(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpenMenu(false);
  };

  return (
    <nav className="navbar">
      {/* LEFT: LOGO */}
      <div className="navbar-left" onClick={() => handleScroll("home")}>
        <img src={logo} alt="BrandDigitalHub Logo" className="navbar-logo" />
      </div>

      {/* RIGHT: Desktop Links */}
      {!isMobile && (
        <div className="navbar-links">
          <button className="nav-link" onClick={() => handleScroll("home")}>
            Home
          </button>

          <button className="nav-link" onClick={() => handleScroll("about")}>
            About Us
          </button>

          <button className="nav-link" onClick={() => handleScroll("services")}>
            Services
          </button>

          <button className="nav-link" onClick={() => handleScroll("contact")}>
            Contact Us
          </button>

          <button className="nav-link" onClick={() => handleScroll("purpose")}>
            Our Purpose
          </button>
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
          <button className="mobile-link" onClick={() => handleScroll("home")}>
            Home
          </button>

          <button className="mobile-link" onClick={() => handleScroll("about")}>
            About Us
          </button>

          <button
            className="mobile-link"
            onClick={() => handleScroll("services")}
          >
            Services
          </button>

          <button className="mobile-link" onClick={() => handleScroll("contact")}>
            Contact Us
          </button>

          <button
            className="mobile-link"
            onClick={() => handleScroll("purpose")}
          >
            Our Purpose
          </button>
        </div>
      )}
    </nav>
  );
}
