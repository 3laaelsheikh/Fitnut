import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { usercontext } from "../Context/user";

const Updateweight = () => {
  let user = {
    weight: "",
  };

  const [errMsg, setErrMsg] = useState(null);
  const [sucssesMsg, setSucssesMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    role,
    weight,
    perfectweight,
    getUserDetails,
  } = useContext(usercontext);

  async function updateWeight(values) {
    setIsLoading(true);

    try {
      const { data } = await axios.patch(
        `https://abdo121212-fit-nutrition.onrender.com/change/weight`,
        values,
        {
        headers: { token: localStorage.getItem("tkn") },
        }
      );
      console.log(data);

      if (data.success) {
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
      }
    } catch (err) {
      console.log("error", err);
    }

    setIsLoading(false);
  }

  const formikObj = useFormik({
    initialValues: user,

    onSubmit: updateWeight,

    validate: function (values) {
      const errors = {};

      if (values.weight<"10") {
        errors.weight = "Write valid weight";
      }

      return errors;
    },
  });

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      <div className="p-5 container ">
        <div className="py-5">
          <form onSubmit={formikObj.handleSubmit}>
            <div className="w-100">
              <div className="input-group mb-4">
                <input
                  onBlur={formikObj.handleBlur}
                  onChange={formikObj.handleChange}
                  value={formikObj.values.weight}
                  type="number"
                  className="input rounded-3 w-100 "
                  // required
                  id="weight"
                  placeholder="Enter your new weight.."
                />
                <label htmlFor="weight" className="input-label">
                  Enter your weight today
                </label>
              </div>
              {formikObj.errors.weight && formikObj.touched.weight ? (
                <div className="alert alert-danger">
                  {formikObj.errors.weight}{" "}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="text-center d-flex justify-content-between">

            <Link className="text-decoration-none" to={"/home"}>
            <button
                type="submit"
                className="rounded-3 px-5 fs-3 btn btn-outline-light text-secondary"
                style={{border:"2px solid", borderColor:"rgba(114, 153, 0, 1)"}}
                
              >
                cancel
              </button>
            </Link>

              <button
                type="submit"
                className="rounded-3 px-5 fs-3 backcolorzeaty text-white"
              >
                {isLoading ? (
                  <FallingLines
                    color="#fff"
                    width="60"
                    visible={true}
                    ariaLabel="falling-lines-loading"
                  />
                ) : (
                  "Start"
                )}
              </button>
            </div>

           <div className="py-5">
           <h3 className="text-secondary">Normal  Weight <span className="colorzeaty">{perfectweight}Kgm</span> </h3>
           <p className="text-muted">Your normal weight ranges from 52 to 65 to monitor your eating and eating use the calorie guide window</p>
           </div>

           <div className="d-flex justify-content-center">
           <Link className=" text-decoration-none" to={"/deit"}>
            <button
                type="submit"
                className="rounded-3 px-5 py-2 fs-3 backcolorzeaty text-white"
                
              >
                Go for calories
              </button>
            </Link>
           </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Updateweight;
