import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="brand-icon">⚛</span>
          ReactStore
        </div>
        <div className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
