
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <NavLink to="/" className="logo" onClick={closeMobileMenu}>
<h1 >
  WorldSeek
</h1>          </NavLink>

          <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/About" onClick={closeMobileMenu}>About</NavLink>
            <NavLink to="/Country" onClick={closeMobileMenu}>Country</NavLink>
            <NavLink to="/Contact" onClick={closeMobileMenu}>Contact</NavLink>
          </nav>

          <div className={`ham-menu ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};
