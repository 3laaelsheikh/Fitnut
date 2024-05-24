import React, { useContext, useEffect, useState } from "react";
import imag1 from "../../Images/flat-lay-salad-juice-bottle 2.svg";
import { usercontext } from "../Context/user";
import { Link } from "react-router-dom";
import imag2 from "../../Images/level-slider 1.svg";
import axios from "axios";

const Profile = () => {
  const {
    role,
    weight,
    getUserDetails,
    height,
    name,
    gender,
    setHeight,
    setName,
    setGender,
    imag,
    setImag,
    email,
  } = useContext(usercontext);

  const [age, setAge] = useState(null);
  

  async function getUserAge() {
    try {
      const { data } = await axios.get(
        `https://abdo121212-fit-nutrition.onrender.com/calories/age`,
        {
          headers: { token: localStorage.getItem("tkn") },
        }
      );
      console.log(data);
      setAge(data.finalAge)
      
    } catch (err) {
      console.log("error", err);
    }
  }


  useEffect(() => {
    getUserDetails();
    getUserAge();
  }, []);

  return (
    <>
      <header>
        <div>
          <img src={imag1} className="w-100" alt="salad-juice-bottle" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 item1">
              <div className="container">
                <div className="shadow rounded-4 bg-white">
                  <div className="d-flex justify-content-center">
                    <img
                      src={imag}
                      className="w-50 m-3"
                      style={{ borderRadius: "50%" }}
                      alt="profile image"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="colorzeaty">{name}</h4>
                  </div>
                  <div className="container">
                    <div className="d-flex justify-content-between shadow-sm  rounded-3 my-3 pt-2 px-2">
                      <div className="d-flex">
                        <i className="fa-regular fa-user colorzeaty fs-5 px-2"></i>
                        <p className="">Name</p>
                      </div>
                      <p className="colorzeaty">{name}</p>
                    </div>
                  </div>

                  <div className="container">
                    <div className="d-flex justify-content-between shadow-sm  rounded-3 my-3 pt-2 px-2">
                      <div className="d-flex align-baseline">
                        <i className="fa-brands fa-creative-commons-sampling-plus colorzeaty fs-5 px-2"></i>
                        <p className="">Age</p>
                      </div>
                      <p className="colorzeaty">
                        {age}
                      </p>
                    </div>
                  </div>

                  <div className="container">
                    <div className="d-flex justify-content-between shadow-sm  rounded-3 my-3 pt-2 px-2">
                      <div className="d-flex">
                        <i className="fa-solid fa-venus-mars colorzeaty fs-5 px-2"></i>
                        <p className="">Gender</p>
                      </div>
                      <p className="colorzeaty">{gender}</p>
                    </div>
                  </div>

                  <div className="container">
                    <div className="d-flex justify-content-between shadow-sm  rounded-3 my-3 pt-2 px-2">
                      <div className="d-flex">
                        <i className="fa-solid fa-text-height colorzeaty fs-5 px-2"></i>
                        <p className="">Height</p>
                      </div>
                      <p className="colorzeaty">{height}</p>
                    </div>
                  </div>

                  <div className="container">
                    <div className="d-flex justify-content-between shadow-sm  rounded-3 my-3 pt-2 px-2">
                      <div className="d-flex">
                        <i className="fa-solid fa-weight-scale colorzeaty fs-5 px-2"></i>
                        <p className="">Weight</p>
                      </div>
                      <p className="colorzeaty">{weight}</p>
                    </div>
                  </div>

                  <div className="container">
                    <div className="d-flex justify-content-between shadow-sm  rounded-3 my-3 pt-2 px-2">
                      <div className="d-flex">
                        <p className="">Change Password</p>
                      </div>
                      <Link className="text-decoration-none colorzeaty" to={`/resetpassword/${email}`}>Change</Link>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center py-5 mb-5">
                    <Link className=" text-decoration-none" to={"/editprofile"}>
                      <button
                        type="submit"
                        className="rounded-3 px-5 py-2 my-5 fs-3 backcolorzeaty text-white"
                      >
                        Edit profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 item2">
              <div className="container">
                <h2 className="colorzeaty py-5">My goals</h2>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="container text-center shadow-sm rounded-3">
                      <div className="p-3 ">
                        <div className="d-flex justify-content-center">
                          <i className="fa-solid fa-droplet text-primary fs-4 p-2"></i>
                          <p className="fs-3">Water</p>
                        </div>
                        <p className="fs-3">2L</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="container text-center shadow-sm rounded-3">
                      <div className="p-3 ">
                        <div className="d-flex justify-content-center">
                          <i className="fa-solid fa-bullseye colorzeaty fs-4 p-2"></i>
                          <p className="fs-3">Target</p>
                        </div>
                        <p className="fs-3">
                          70 <span>KGM</span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="container text-center shadow-sm rounded-3">
                      <div className="p-3 ">
                        <div className="d-flex justify-content-center">
                          <img
                            src={imag2}
                            className="px-2 pb-2"
                            alt="level slider"
                          />
                          <p className="fs-3">Level</p>
                        </div>
                        <p className="fs-3">Beginner</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="colorzeaty py-5">Notifications</h2>

                <div className="container">
                  <div className="d-flex justify-content-between shadow-sm  rounded-3 my-3 pt-2 px-2">
                    <div className="d-flex">
                      <p className="">Workout Reminder</p>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input fs-4"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="d-flex justify-content-between shadow-sm  rounded-3 my-3 pt-2 px-2">
                    <div className="d-flex">
                      <p className="">Water Reminder</p>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input fs-4"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="d-flex justify-content-between shadow-sm  rounded-3 my-3 pt-2 px-2">
                    <div className="d-flex">
                      <p className="">Catogery Reminder</p>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input fs-4"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="d-flex justify-content-between shadow-sm  rounded-3 my-3 pt-2 px-2">
                    <div className="d-flex">
                      <p className="">Steps Reminder</p>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input fs-4"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="d-flex justify-content-between shadow-sm  rounded-3 my-3 pt-2 px-2">
                    <div className="d-flex">
                      <p className="">Social Reminder</p>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input fs-4"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Profile;
