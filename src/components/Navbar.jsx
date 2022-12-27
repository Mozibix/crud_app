import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#!">
          CRUD APP
        </a>

        <div id="navbarColor01">
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate("/create-employee")}
          >
            Create Employee
          </button>
        </div>
      </div>
    </nav>
  );
};
