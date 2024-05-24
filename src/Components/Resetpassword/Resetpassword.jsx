import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { FallingLines } from "react-loader-spinner";
import { Link, useNavigate, useParams } from "react-router-dom";
import imag1 from "../../Images/Reset password-rafiki 1.svg";

const Resetpassword = () => {

  const {email}= useParams(); 

    let user = {
        password: "",
        confirmPassword: "",
      };
    
      const [errMsg, setErrMsg] = useState(null);
      const [sucssesMsg, setSucssesMsg] = useState(null);
      const [isLoading, setIsLoading] = useState(false);
    
      const navigate = useNavigate();
    
      async function resetPassword(values) {
        setIsLoading(true);
        try {
          const { data } = await axios.patch(
            `https://abdo121212-fit-nutrition.onrender.com/auth/resstPassword/${email}`,
            values
          );
          console.log(data);
    
          if (data.success) {
            setSucssesMsg(data.message);
            setTimeout(() => {
              navigate("/login");
            }, 2000);
          }else{
            setErrMsg(data.message)
          }
        } catch (err) {
          console.log("error", err);
          setErrMsg(err.response.data.message);
        }
    
        setIsLoading(false);
      }
    
      const formikObj = useFormik({
        initialValues: user,
    
        onSubmit: resetPassword,
    
        validate: function (values) {
          setErrMsg(null);
    
          const errors = {};
    
    
          if (values.password.length < 6) {
            errors.password = "Enter valid password include Minimum six characters";
          }
    
          if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "password and rePassword doesn't match";
          }
    
          return errors;
        },
      });

    return <>
    
    <div className=" container">
        {errMsg ? <div className="alert alert-danger">{errMsg}</div> : ""}

        {sucssesMsg ? (
          <div className="alert alert-success">{sucssesMsg}</div>
        ) : (
          ""
        )}

        <div className="row gy-5 align-items-center">
          <div className="col-lg-7 col-md-6">
            <div className="text-center">
              <img src={imag1} className="w-100" alt="Mobile login-pana" />
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <form onSubmit={formikObj.handleSubmit}>
              
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
                    placeholder="Enter your new password.."
                  />
                  <label htmlFor="password" className="input-label">
                   New password
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
                  "Reset password"
                )}
              </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    
    </>
}

export default Resetpassword;
