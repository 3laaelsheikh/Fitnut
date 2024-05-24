import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { FallingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import imag1 from "../../Images/Forgot password-pana 1.svg";
import imag2 from "../../Images/Enter OTP-rafiki 1.svg";

const Forgetpassword = () => {



  let user = {
    email: "",
  };

  const [errMsg, setErrMsg] = useState(null);
  const [sucssesMsg, setSucssesMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function registerNewUser(values) {
    setIsLoading(true);

    try {
      const { data } = await axios.patch(
        `https://abdo121212-fit-nutrition.onrender.com/auth/forgetPass`,
        values
      );
      console.log(data);

      if (data.success) {
        setSucssesMsg(data.message);
        setTimeout(() => {
              navigate("/forgetpassotp");
            }, 2000);
        // document.getElementById("confirmEmail").classList.remove("d-none");
        // document.getElementById("writeEmail").classList.add("d-none");

      }else{
        setErrMsg(data.message);
      }
    } catch (err) {
      console.log("error", err);
      setErrMsg("Error happend");
    }

    setIsLoading(false);
  }

  const formikObj = useFormik({
    initialValues: user,

    onSubmit: registerNewUser,

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

      return errors;
    },
  });


// otp formik and integration

//   let vlidate = {
//     code: "",
//   };

  
//   async function verifyLogin(values) {
//     setIsLoading(true);

//     try {
//       const { data } = await axios.patch(
//         `https://fit-nutrition.vercel.app/auth/OTPCode`,
//         values
//       );
//       console.log(data);

//       if (data.success) {
//         setSucssesMsg(data.message)

//       }else{
//         setErrMsg(data.message);
//       }
//     } catch (err) {
//       console.log("error", err);
//       setErrMsg(err.response.data.message);
//     }

//     setIsLoading(false);
//   }

//   const formikObj2 = useFormik({
//     initialValues: vlidate,

//     onSubmit: verifyLogin,

//     validate: function (values) {
//       setErrMsg(null);

//       const errors = {};

//       if (values.code <=4) {
//         errors.code = "Write invalid OTP";
//       }

//       return errors;
//     },
//   });

  return (
    <>
      <div id="writeEmail" className="py-5 container">
        {errMsg ? <div className="alert alert-danger">{errMsg}</div> : ""}

        {sucssesMsg ? (
          <div className="alert alert-success">{sucssesMsg}</div>
        ) : (
          ""
        )}

        <div className="row gy-5 align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="text-center">
              <img src={imag1} className="w-100" alt="Mobile login-pana" />
            </div>
          </div>

          <div className="col-lg-7 col-md-6">
            <form onSubmit={formikObj.handleSubmit}>
                <h3 className="colorzeaty mb-4 text-center px-2">Enter your email or phone number to reset your password</h3>
              <div>
                <div className="input-group mb-4">
                  <input
                    onBlur={formikObj.handleBlur}
                    onChange={formikObj.handleChange}
                    value={formikObj.values.email}
                    type="email"
                    className="input rounded-3 w-100"
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
                  "Reset Password"
                )}
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>

{/* otp section */}

      {/* <div id="confirmEmail" className="d-none container">
        {errMsg ? <div className="alert alert-danger">{errMsg}</div> : ""}

        {sucssesMsg ? (
          <div className="alert alert-success">{sucssesMsg}</div>
        ) : (
          ""
        )}

        <div className="gy-5">
          <div className="">
            <div className="text-center">
              <img src={imag2} className="w-50" alt="Mobile login-pana" />
            </div>               
            <h3 className="colorzeaty mb-4 fw-bold px-2 text-center">OTP Verification code</h3>
          </div>

          <div className="text-center">
            <form onSubmit={formikObj2.handleSubmit}>
              <div className="">
                <div className="input-group mb-4 d-flex justify-content-center">
                  <input
                    onBlur={formikObj2.handleBlur}
                    onChange={formikObj2.handleChange}
                    value={formikObj2.values.otp}
                    type="text"
                    className="input rounded-3 w-75"
                    // required
                    id="code"
                    placeholder="Enter your OTP"
                  />
                </div>
                
              </div>

              <button
                type="submit"
                disabled={
                  formikObj2.isValid === false || formikObj2.dirty == false
                }
                className="mb-5 w-50 rounded-3 fs-3 backcolorzeaty text-white"
              >
                {isLoading ? (
                  <FallingLines
                    color="#fff"
                    width="60"
                    visible={true}
                    ariaLabel="falling-lines-loading"
                  />
                ) : (
                  "Verify"
                )}
              </button>
            </form>
          </div>
          </div>
        </div> */}

    </>
  );
};

export default Forgetpassword;
