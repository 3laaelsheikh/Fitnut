import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { FallingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import imag1 from "../../Images/Login-pana 1.svg";
import Otpmodal from "../Otpmodal/Otpmodal";
import { authcontext } from "../Context/authentication";

const Login = () => {
  let user = {
    email: "",
    password: "",
  };

  const { setToken } = useContext(authcontext);
  const [errMsg, setErrMsg] = useState(null);
  const [sucssesMsg, setSucssesMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function loginUser(values) {
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        `https://abdo121212-fit-nutrition.onrender.com/auth/login`,
        values
      );
      console.log(data);

      if (data.success) {
        localStorage.setItem("tkn", data.token);
        setToken(data.token);
        setSucssesMsg(data.message);
        setTimeout(() => {
          navigate("/prehome");
        }, 2000);
      }else{
        setErrMsg(data.message);
      }
    } catch (err) {
      console.log("error", err);
      setErrMsg(err.response.data.message);
    }

    setIsLoading(false);
  }

  const formikObj = useFormik({
    initialValues: user,

    onSubmit: loginUser,

    validate: function (values) {
      setErrMsg(null);

      const errors = {};

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
                <div className="input-group">
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

              <div className="d-flex justify-content-end">
                <Link className="text-decoration-none colorzeaty pb-2" to={"/forgetpassword"}>
                  Forget password?
                </Link>
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
                  "Login"
                )}
              </button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="py-2">
                  
                  <div className="d-flex justify-content-center align-items-center">
                  <p>
                    Already Have An Account?
                    <Link
                      className="text-decoration-none colorzeaty fw-bold mt-2 px-2"
                      to={"/register"}
                    >
                      Sign UP
                    </Link>
                  </p>
                  </div>
                </div>
              </div>
            </form>
          </div>            

        </div>
      </div>
    </>
  );
};

export default Login;
