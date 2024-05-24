import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { FallingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import imag1 from "../../Images/Mobile login-pana.svg";
import Otpmodal from "../Otpmodal/Otpmodal";

const Registers = () => {
  let user = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [errMsg, setErrMsg] = useState(null);
  const [sucssesMsg, setSucssesMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const navigate = useNavigate();

  async function registerNewUser(values) {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `https://abdo121212-fit-nutrition.onrender.com/auth/register`,
        values
      );
      console.log(data);

      if (data.success) {
        setSucssesMsg("Account has Created Successflly");
        setOpenModel(true);
      } else {
        setErrMsg(data.message);
      }
    } catch (err) {
      console.log("error", err);
      setErrMsg("error happend...");
    }

    setIsLoading(false);
  }

  const formikObj = useFormik({
    initialValues: user,

    onSubmit: registerNewUser,

    validate: function (values) {
      setErrMsg(null);

      const errors = {};

      if (values.fullName.length < 10 || values.fullName.length > 20) {
        errors.fullName = "Name must be form 10 characters to 20 characters ";
      }

      if (
        !values.email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        errors.email = "Email not valid example: exemple@yyy.zzz ";
      }

      if (values.password.length < 6) {
        errors.password = "Enter valid password include Minimum six characters";
      }

      if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "password and rePassword doesn't match";
      }

      return errors;
    },
  });

  return (
    <>
      <div className=" py-5 container">
        {errMsg ? <div className="alert alert-danger">{errMsg}</div> : ""}

        {sucssesMsg ? (
          <div className="alert alert-success">{sucssesMsg}</div>
        ) : (
          ""
        )}

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="text-center">
              <img src={imag1} className="w-100" alt="Mobile login-pana" />
            </div>
          </div>

          <div className="col-lg-6">
            <form onSubmit={formikObj.handleSubmit}>
              <div>
                <div className="input-group mb-4">
                  <input
                    onBlur={formikObj.handleBlur}
                    onChange={formikObj.handleChange}
                    value={formikObj.values.fullName}
                    type="text"
                    className="input rounded-3 w-100 "
                    // required
                    id="fullName"
                    placeholder="Enter your name.."
                  />
                  <label htmlFor="fullName" className="input-label">
                    Full Name
                  </label>
                </div>
                {formikObj.errors.fullName && formikObj.touched.fullName ? (
                  <div className="alert alert-danger">
                    {formikObj.errors.fullName}{" "}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div>
                <div className="input-group mb-4">
                  <input
                    onBlur={formikObj.handleBlur}
                    onChange={formikObj.handleChange}
                    value={formikObj.values.email}
                    type="email"
                    className="input rounded-3 w-100 "
                    // required
                    id="email"
                    placeholder="Enter your e-mail.."
                  />
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                </div>
                {formikObj.errors.email && formikObj.touched.email ? (
                  <div className="alert alert-danger">
                    {formikObj.errors.email}{" "}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div>
                <div className="input-group mb-4">
                  <input
                    onBlur={formikObj.handleBlur}
                    onChange={formikObj.handleChange}
                    value={formikObj.values.password}
                    type="password"
                    className="input rounded-3 w-100 "
                    // required
                    id="password"
                    placeholder="Enter your password.."
                  />
                  <label htmlFor="password" className="input-label">
                    password
                  </label>
                </div>
                {formikObj.errors.password && formikObj.touched.password ? (
                  <div className="alert alert-danger">
                    {formikObj.errors.password}{" "}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div>
                <div className="input-group mb-4">
                  <input
                    onBlur={formikObj.handleBlur}
                    onChange={formikObj.handleChange}
                    value={formikObj.values.confirmPassword}
                    type="password"
                    className="input rounded-3 w-100 "
                    // required
                    id="confirmPassword"
                    placeholder="Enter Confirm Password.."
                  />
                  <label htmlFor="confirmPassword" className="input-label">
                    Confirm Password
                  </label>
                </div>
                {formikObj.errors.confirmPassword &&
                formikObj.touched.confirmPassword ? (
                  <div className="alert alert-danger">
                    {formikObj.errors.confirmPassword}{" "}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={
                    formikObj.isValid === false || formikObj.dirty == false
                  }
                  className=" w-75 rounded-3 fs-3 backcolorzeaty text-white"
                >
                  {isLoading ? (
                    <FallingLines
                      color="#fff"
                      width="60"
                      visible={true}
                      ariaLabel="falling-lines-loading"
                    />
                  ) : (
                    "Sign up"
                  )}
                </button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <div className="d-flex justify-content-center align-items-center align-baseline">
                    <div className="line"></div>
                    <p className="px-2 pt-2 colorzeaty">Or Sign up With</p>
                    <div className="line"></div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <div>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <img
                          src={require("../../Images/Facebook.png")}
                          alt="icon of facebook"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={require("../../Images/Google.png")}
                          className="px-2"
                          alt="icon of google"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://x.com/?lang=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={require("../../Images/Twitter.png")}
                          alt="icon of twitter"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center align-items-center">
                    <p>
                      Already Have An Account?
                      <Link
                        className="text-decoration-none colorzeaty fw-bold mt-2 px-2"
                        to={"/login"}
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {openModel && <Otpmodal closeModal={setOpenModel} />}
        </div>
      </div>
    </>
  );
};

export default Registers;
