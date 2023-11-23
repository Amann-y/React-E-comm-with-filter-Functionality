import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/productContext";

const Navbarcomp = () => {
  const [searchItem, setSearchItem] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchItem}`);
    setSearchItem("");
  };

  const { cartItems } = useGlobalContext();
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand fs-3" to="/">
            E-Comm
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                E-Comm
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link text-danger" : "nav-link"
                    }
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item position-relative">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link text-danger" : "nav-link"
                    }
                    to="/cart"
                  >
                    Cart
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartItems.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </NavLink>
                </li>
              </ul>
              <form
                className="d-flex mt-3"
                role="search"
                onSubmit={handleSubmit}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbarcomp;
