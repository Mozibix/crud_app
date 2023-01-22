import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#!">
          <a className="logo-link" href="/">
            {" "}
            NAIL SHOP
          </a>
        </a>

        <div className="links">
          <ul className="flex_links">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/services">
              <li>Services</li>
            </a>
          </ul>
        </div>

        <div id="navbarColor01">
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate("/create-employee")}
          >
            Place Order{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};
