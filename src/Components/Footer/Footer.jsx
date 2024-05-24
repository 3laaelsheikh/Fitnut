import React from "react";
import imag1 from "../../Images/Main logo 1.svg";
import imag2 from "../../Images/iconfacebook.svg";
import imag3 from "../../Images/twitter.svg";
import imag4 from "../../Images/instagram.svg";
import imag5 from "../../Images/linkedin.svg";
import imag6 from "../../Images/Qr Code.svg";
import imag7 from "../../Images/AppStore.svg";
import imag8 from "../../Images/GooglePlay.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container py-5">
          <div className="row pb-5 gy-5">
            <div className="col-lg-3 col-md-6  d-flex justify-content-center">
              <div>
                <img className="mb-5" src={imag1} alt="logo of fitnut" />
                <h5 className="text-white mx-5 py-2">Follow us</h5>
                <div>
                  <div className="d-flex judtify-content-center align-items-center">
                    <div className="px-2">
                      <img src={imag2} alt="icon of facebook" />
                    </div>
                    <div className="px-2">
                      <img src={imag3} alt="icon of twitter" />
                    </div>
                    <div className="px-2">
                      <img src={imag4} alt="icon of instagram" />
                    </div>
                    <div className="px-2">
                      <img src={imag5} alt="icon of linkedin" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div>
                <h5 className="text-white">Support</h5>
                <div>
                  <p>Contact us</p>
                  <p>About us</p>
                  <p>privacy police</p>
                  <p>Terms of service</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div>
                <div className="container">
                  <div className="container">
                    <div className="container">                    
                    <h5 className="text-white">Useful link</h5>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <Link to={"/home"} className="text-decoration-none text-secondary"><p className="">Home</p></Link>
                          <Link to={"/home"} className="text-decoration-none text-secondary"><p>Calories</p></Link>
                          <Link to={"/home"} className="text-decoration-none text-secondary"><p>Profile</p></Link>
                          <Link to={"/home"} className="text-decoration-none text-secondary"><p>Catogery</p></Link>
                          <Link to={"/home"} className="text-decoration-none text-secondary"><p>Articles</p></Link>  
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <p className="">Drinking water</p>
                          <p>Weight</p>
                          <p>Food of day</p>
                          <p>Ai fitnut</p>
                          <p>Login/Register</p>
                        </div>
                      </div>
                    </div>
                  </div>
                    
                  
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex judtify-content-center">
              <div className="">
                <h5 className="text-white pb-4">Download App</h5>
                <div>
                  <p className="">Save $3 with App New User Only</p>
                  <div className="d-flex judtify-content-center align-items-center">
                    <div className="">
                      <img src={imag6} alt="QR code" />
                    </div>
                    <div className=" mx-1 rounded-3">
                      <div className="mb-1">
                        <img src={imag8} alt="icon of google play" />
                      </div>
                      <div className="">
                        <img src={imag7} alt="icon of app store" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
