import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faThLarge,
  faBox,
  faShoppingCart,
  faUser,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "navbar-slide-in" : ""}`}>
      <div className="navbar-brand">
        <Link to="/">Khareed Ly</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link
          to="/categories"
          className={location.pathname === "/categories" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faThLarge} /> Categories
        </Link>
        <Link
          to="/products"
          className={location.pathname === "/products" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faBox} /> Products
        </Link>
        <Link
          to="/cart"
          className={location.pathname === "/cart" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faUser} /> About
        </Link>
        <Link
          to="/feedback"
          className={location.pathname === "/feedback" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faQuestionCircle} /> Feedback
        </Link>
      </div>

      <div className="navbar-buttons">
        <Link to="/categories" className="shop-more-button">
          Shop More
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
