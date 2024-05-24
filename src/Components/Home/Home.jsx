import React, { useContext, useEffect } from "react";
import imag1 from "../../Images/Frame 1973.svg";
import imag2 from "../../Images/Frame 1851.svg";
import imag3 from "../../Images/cup-paper 1.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homeslider from "../Homeslider/Homeslider";
import { Link } from "react-router-dom";
import { usercontext } from "../Context/user";

const Home = () => {


  const {
    role,
    weight,
    getUserDetails,
  } = useContext(usercontext);

  useEffect(() => {
    getUserDetails()
  }, []);

  return (
    <>
      <header className="">
        <div className="home container mt-4 d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center gy-5">
            <div className="col-lg-6">
              <div className="text-center">
                <img
                  src={imag1}
                  className="w-75 rounded-3"
                  alt="pic"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mx-5">
                <h1 className="fw-bold colorzeaty mb-4">
                  If you want to live healthy , integrated life , train fitnut{" "}
                </h1>
                <p className="text-muted mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="my-4 container">
          <div className="row d-flex justify-content-center align-items-center gy-5">
            <div className="col-lg-6">
              <h2 className="colorzeaty">water consumation</h2>
              <div className="text-center rounded-3 shadow-sm">
                <div className="d-flex container">
                  <i className="fa-solid fa-chevron-left colorzeaty fs-3 pt-3"></i>
                  <p
                    className="rounded-5 p-3 m-auto colorzeaty"
                    style={{ backgroundColor: "rgba(251, 255, 241, 1)" }}
                  >
                    Each addition is 50 ml
                  </p>
                  <h4 className="colorzeaty">
                    <span className="fw-bold">2.75</span>/2
                    <br /> liter
                  </h4>
                </div>
                <div className="py-4">
                  <button
                    className=" rounded-3 fs-5 backcolorzeaty text-white"
                    style={{ border: "none" }}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <img
                    src={imag3}
                    className="px-5 rounded-3"
                    alt="pic"
                    loading="lazy"
                  />
                  <button
                    className=" rounded-3 fs-5 backcolorzeaty text-white"
                    style={{ border: "none" }}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="colorzeaty">weight</h2>
              <Link className="text-decoration-none text-black" to={"/updateweight"}>
              <div className="text-center rounded-3 d-flex shadow-sm">
                <div className="d-flex container py-1">
                  <div className="text-center p-5">
                    <h4 className="fw-bold colorzeaty ">
                      {weight}<span className="text-secondary fw-bold">Kgm</span>
                    </h4>
                    <p className="colorzeaty fs-5">
                      Update your weight from here
                    </p>
                  </div>
                  <img src={imag2} className="" alt="weight calculator" />
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Homeslider />

        <div className="d-flex py-4 justify-content-center">
        <button className=" w-25 rounded-3 fs-3 backcolorzeaty text-white" style={{height:"65px"}}>
        <Link to={"/articles"} className="text-decoration-none text-white">See more articles</Link>
        </button>
        </div>
      </div>
    </>
  );
};

export default Home;
