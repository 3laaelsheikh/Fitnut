import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import imag1 from "../../Images/Main logo 1.svg";
import { authcontext } from "./../Context/authentication";

const Navbar = () => {
  const { token, setToken } = useContext(authcontext);

  const navRef = useRef();

  const navFunc = useNavigate();

  function logout() {
    localStorage.removeItem("tkn");
    setToken(null);
    navFunc("/login");
  }

  let arr = [
    { title: "home", to: "groups" },
    { title: "Contact", to: "contact" },
  ];

  const toggleNav = (e) => {
    navRef.current
      .querySelectorAll("li")
      .forEach((f) => f.classList.remove("active"));
    e.target.closest("li").classList.add("active");
  };

  return (
    <>
      <div className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid container">
            <Link to={"home"}>
              <img src={imag1} alt="icon of website" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              {token ? (
                <>
                  <ul
                    className="navbar-nav d-flex nav mb-2 mb-lg-0 ms-auto"
                    ref={navRef}
                  >
                    <li className="nav-item" onClick={toggleNav}>
                      <Link className="nav-link" to={"home"}>
                        Home
                      </Link>
                    </li>

                    <li className="nav-item" onClick={toggleNav}>
                      <Link className="nav-link" to={"articles"}>
                        Articles
                      </Link>
                    </li>

                    <li className="nav-item" onClick={toggleNav}>
                      <Link className="nav-link" to={"deit"}>
                        Diet
                      </Link>
                    </li>

                    <li className="nav-item" onClick={toggleNav}>
                      <Link className="nav-link" to={"calories"}>
                        Calories
                      </Link>
                    </li>

                    <li className="nav-item" onClick={toggleNav}>
                      <Link className="nav-link" to={"fitnutai"}>
                        FitnutAi
                      </Link>
                    </li>

                    <li className="nav-item" onClick={toggleNav}>
                      <Link className="nav-link" to={"profile"}>
                        Profile
                      </Link>
                    </li>
                  </ul>
                </>
              ) : (
                <></>
              )}

              <ul className="navbar-nav ms-auto px-2 ">
                {token ? (
                  <>
                    <input
                      className="form-control me-5 bg-body-secondary"
                      type="search"
                      placeholder="Search..."
                      aria-label="Search"
                    />

                    <ul className="navbar-nav mb-2 mb-lg-0 px-2">
                      <li className="nav-item dropdown d-flex justify-content-end">
                        <a
                          className="nav-link "
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-globe fs-3 colorzeaty"></i>{" "}
                        </a>
                        <ul className="dropdown-menu ">
                          <li className="w-100">
                            <span className="colorzeaty px-3">Language</span>
                          </li>
                          <li className="">
                            <button className="btn">
                              <span className="colorzeaty">English</span>
                            </button>
                          </li>
                          <li className="">
                            <button className="btn">
                              <span className="colorzeaty">Arabic</span>
                            </button>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 px-2">
                      <li className="nav-item dropdown d-flex justify-content-end">
                        <a
                          className="nav-link "
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-bars fs-3 colorzeaty"></i>{" "}
                        </a>
                        <ul className="dropdown-menu ">
                          <li className="">
                            <button className="btn" onClick={() => logout()}>
                              <span className="colorzeaty">Logout</span>
                            </button>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </>
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
