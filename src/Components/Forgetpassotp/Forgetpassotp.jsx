import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { FallingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import imag1 from "../../Images/Forgot password-pana 1.svg";
import imag2 from "../../Images/Enter OTP-rafiki 1.svg";

const Forgetpassotp = () => {
  let vlidate = {
    code: "",
  };
  const [errMsg, setErrMsg] = useState(null);
  const [sucssesMsg, setSucssesMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function verifyLogin(values) {
    setIsLoading(true);

    try {
      const { data } = await axios.patch(
        `https://abdo121212-fit-nutrition.onrender.com/auth/OTPCode`,
        values
      );
      console.log(data);

      if (data.success) {
        setSucssesMsg("email verification done!");
        setTimeout(() => {
          navigate(`/resetpassword/${data.email}`);
        }, 2000);
      } else {
        setErrMsg(data.message);
      }
    } catch (err) {
      console.log("error", err);
      setErrMsg(err.response.data.message);
    }

    setIsLoading(false);
  }

  const formikObj2 = useFormik({
    initialValues: vlidate,

    onSubmit: verifyLogin,

    validate: function (values) {
      setErrMsg(null);

      const errors = {};

      if (values.code <= 4) {
        errors.code = "Write invalid OTP";
      }

      return errors;
    },
  });

  return (
    <>
      <div className="container">
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
            <h3 className="colorzeaty mb-4 fw-bold px-2 text-center">
              OTP Verification code
            </h3>
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
      </div>
    </>
  );
};

export default Forgetpassotp;
