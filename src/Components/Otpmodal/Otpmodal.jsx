import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { FallingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";

const Otpmodal = ({closeModal}) => {

    let user = {
      activationCode: "",
      };
    
      const [errMsg, setErrMsg] = useState(null);
      const [sucssesMsg, setSucssesMsg] = useState(null);
      const [isLoading, setIsLoading] = useState(false);
    
      const navigate = useNavigate();
    
      async function verifyLogin(values) {
        setIsLoading(true);
    
        try {
          const { data } = await axios.post(
            `https://abdo121212-fit-nutrition.onrender.com/auth/confirmEmail`,
            values
          );
          console.log(data);
    
          if (data.success) {
            setSucssesMsg(data.message)
            closeModal(false)
            setTimeout(() => {
                navigate("/login");
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
    
        onSubmit: verifyLogin,
    
        validate: function (values) {
          setErrMsg(null);
    
          const errors = {};
    
          if (values.activationCode <=4) {
            errors.activationCode = "Write invalid OTP";
          }
    
          return errors;
        },
      });

    return <>
    <div className="vh-100 fixed-top d-flex justify-content-center align-items-center inset bg-black bg-opacity-25">
        
    <div className="w-50 container bg-white rounded-5">
    <div className="d-flex justify-content-end">
              <button
                className="btn btn-outline-danger rounded-5 my-3"
                onClick={()=> closeModal(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
        {errMsg ? <div className="alert alert-danger">{errMsg}</div> : ""}

        {sucssesMsg ? (
          <div className="alert alert-success">{sucssesMsg}</div>
        ) : (
          ""
        )}

        <div className="">
          <div className="">
                          
            <h3 className="colorzeaty mb-4 fw-bold px-2 text-center">OTP Verification code</h3>
          </div>

          <div className="text-center">
            <form onSubmit={formikObj.handleSubmit}>
              <div className="">
                <div className="input-group mb-4 d-flex justify-content-center">
                  <input
                    onBlur={formikObj.handleBlur}
                    onChange={formikObj.handleChange}
                    value={formikObj.values.activationCode}
                    type="text"
                    className="input rounded-3 w-75"
                    // required
                    id="activationCode"
                    placeholder="Enter your activationCode"
                  />
                </div>
                
              </div>

              <button
                type="submit"
                disabled={
                  formikObj.isValid === false || formikObj.dirty == false
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
    </div>
    
    
    </>
}

export default Otpmodal;
