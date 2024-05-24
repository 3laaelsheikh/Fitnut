import React from "react";
import imag1 from "../../Images/Frame 1939.svg";
import imag2 from "../../Images/Frame 1949.svg";
import imag3 from "../../Images/Frame 1941.svg";
import imag4 from "../../Images/Frame 1950.svg";
import { Link } from "react-router-dom";

const Diet = () => {
  return (
    <>
      <div className="container">
      
      <div className="row gy-3 py-5">
        <div className="d-flex justify-content-center text-center">
        <h2 className="colorzeaty">Choose your categroy</h2>
      </div>
      <div className="col-lg-6">
          <div className="bg-white shadow-lg rounded-3">
            <Link to={"/categorytitle"} className="text-decoration-none text-black"><div className="bulk d-flex justify-content-between diet">
              <img src={imag1} className="w-50 p-4" alt="bulk" />
              <div className="d-flex justify-content-center align-items-center">
              <p className="text-decoration-none fs-2 px-5 mx-5 fw-bold">
                Bulking
              </p>
              </div>
            </div></Link>
          </div>
        </div>
        <div className="col-6 ">
          <div className="bg-white shadow-lg rounded-3">
            <Link to={"/categorytitle"} className="text-decoration-none text-black"><div className="bulk d-flex justify-content-between diet">
              <img src={imag2} className="w-50 p-3" alt="diet" />
              <div className="d-flex justify-content-center align-items-center">
              <p className="text-decoration-none fs-2 px-5 mx-5 fw-bold">
                Diet
              </p>
              </div>
            </div></Link> 
          </div>
        </div>
        <div className="col-6  ">
          <div className="bg-white shadow-lg rounded-3">
          <Link to={"/categorytitle"} className="text-decoration-none text-black"><div className="bulk d-flex justify-content-between diet">
              <img src={imag3} className="w-50 p-3" alt="strenght" />
              <div className="d-flex justify-content-center align-items-center">
              <p className="text-decoration-none fs-2 px-5 mx-5 fw-bold">
                Strenght
              </p>
              </div>
            </div></Link>  
          </div>
        </div>
        <div className="col-6 ">
          <div className="bg-white shadow-lg rounded-3">
          <Link to={"/categorytitle"} className="text-decoration-none text-black"><div className="bulk d-flex justify-content-between diet">
              <img src={imag4} className="w-50 p-3" alt="fit" />
              <div className="d-flex justify-content-center align-items-center">
              <p className="text-decoration-none fs-2 px-5 mx-5 fw-bold">
                Fitness
              </p>
              </div>
            </div></Link>
            
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Diet;
