import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import logo from "../assets/logo.jpg";
import "./Navbar.css";


function NavBar() {

    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
    <div className="navbar-left">
    <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
    </div>
    <div className="navbar-cta">
          <p>Speak Freely, Anonymously</p>
        </div>

    </div>
    <div className="menu-toggle" onClick={toggleMenu}>
        <i className="bx bx-menu"></i> {/* Hamburger icon */}
      </div>
      

<div className="navbar-search">
  <input type="text" placeholder="Search..." className="search-input" />
  <button className="search-btn">
  <i className="bx bx-search-alt" style={{ color: "#fff" }}></i>
  </button>
</div>

            <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
