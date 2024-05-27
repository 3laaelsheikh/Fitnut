import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import imag1 from "../../Images/Reset password-rafiki 1.svg";

const Prehome = () => {

  const [gender,setGender]= useState("");
  const [sex,setSex]= useState("");

  const [errMsg, setErrMsg] = useState(null);
  const [sucssesMsg, setSucssesMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDiseasesDropdownEnabled, setIsDiseasesDropdownEnabled] = useState(false);

  
  const navigate = useNavigate();

  const formikObj = useFormik({
    initialValues: {
      height: "",
      weight: "",
      gender: "",
      birthdays: "",
      diseases: ""
    },

    validate: values => {
      setErrMsg(null)
      const errors = {};
      if (!values.height) errors.height = 'Height is required';
      if (!values.weight) errors.weight = 'Weight is required';
      if (!values.gender) errors.gender = 'Gender is required';
      if (!values.birthdays) errors.birthdays = 'Birthday is required';
      return errors;
    },
    onSubmit: async values => {
      console.log(values);
      setIsLoading(true);
      try {
        const { data } = await axios.post(
          `https://abdo121212-fit-nutrition.onrender.com/auth/nextInfo`,
          values,
          {
            headers: { token: localStorage.getItem("tkn") },
          }
        );
        console.log(values);
        console.log(data);
  
        if (data.success) {
          setSucssesMsg("Data set Successflly");
          setTimeout(() => {
            navigate("/home");
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

    
  });

  const handleGenderChange = (event) => {
    formikObj.setFieldValue('gender', event.target.value);
  };

  const handleDiseaseChange = (event) => {
    formikObj.setFieldValue('diseases', event.target.value);
  };

  const handleDiseaseOptionChange = (event) => {
    setIsDiseasesDropdownEnabled(event.target.value === "yes");
    if (event.target.value === "no") {
      formikObj.setFieldValue('diseases', "");
    }
  };

  
  return (
    <>
      <div className="p-5 container ">
        {errMsg ? <div className="alert alert-danger">{errMsg}</div> : ""}

        {sucssesMsg ? (
          <div className="alert alert-success">{sucssesMsg}</div>
        ) : (
          ""
        )}

        <div className="">
          <form onSubmit={formikObj.handleSubmit}>
            <h3 className="pb-2 colorzeaty">Enter your gender</h3>


            <div className="d-flex justify-content-between mb-4">
              <div className="w-50 px-1" >   
                <input
                  type="radio"
                  className="btn-check justify-content-start"
                  name="gender"
                  id="success-outlined"
                  autoComplete="off"
                  onChange={handleGenderChange}
              value="male"
              checked={formikObj.values.gender === 'male'}
                />
                <label
                  className="btn  d-flex w-100"
                  style={{
                    borderColor: "rgba(114, 153, 0, 1)",
                    border: "2px solid rgba(114, 153, 0, 1) ",
                  }}
                  htmlFor="success-outlined"
                >
                  <i className="fa-solid fa-person fs-3 p-2"></i>
                  <p className="fs-3">Male</p>
                </label>
              </div>

              <div className="w-50 px-1">
                <input
                  type="radio"
                  className="btn-check w-50"
                  name="gender"
                  id="danger-outlined"
                  autoComplete="off"
                  onChange={handleGenderChange}
              value="female"
              checked={formikObj.values.gender === 'female'}
                />
                <label
                  className="btn d-flex w-100"
                  style={{
                    borderColor: "rgba(114, 153, 0, 1)",
                    border: "2px solid rgba(114, 153, 0, 1) ",
                  }}
                  htmlFor="danger-outlined"
                >
                  <i className="fa-solid fa-person-dress fs-3 p-2"></i>
                  <p className="fs-3">Female</p>
                  
                </label>
              </div>
            </div>

            <div className="d-flex justify-content-between w-100">
              <div className="w-50 px-1">
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
                    Enter your weight
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
              <div className=" w-50 px-1">
                <div className="input-group mb-4">
                  <input
                    onBlur={formikObj.handleBlur}
                    onChange={formikObj.handleChange}
                    value={formikObj.values.height}
                    type="number"
                    className="input rounded-3 w-100 "
                    // required
                    id="height"
                    placeholder="Enter your new height.."
                  />
                  <label htmlFor="height" className="input-label">
                    Enter your height
                  </label>
                </div>
                {formikObj.errors.height && formikObj.touched.height ? (
                <div className="alert alert-danger">
                  {formikObj.errors.height}{" "}
                </div>
              ) : (
                ""
              )}
              </div>
            </div>
            <div>
              <div className="input-group mb-4">
                <input
                  onBlur={formikObj.handleBlur}
                  onChange={formikObj.handleChange}
                  value={formikObj.values.birthdays}
                  type="date"
                  className="input rounded-3 w-100 "
                  // required
                  id="birthdays"
                  placeholder="Enter your new birthdays.."
                />
                <label htmlFor="birthdays" className="input-label">
                  Enter your birth date
                </label>
              </div>
            </div>

            <h3 className="pb-2 colorzeaty">
              Do you suffer from any diseases?
            </h3>

            <div className="my-2">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input fs-5 "
                  type="radio"
                  name="diseaseOptions"
                  id="inlineRadio1"
                  value="yes"
                  onChange={handleDiseaseOptionChange}
                />
                <label
                  className="form-check-label fw-bold fs-5"
                  htmlFor="inlineRadio1"
                >
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input fs-5 "
                  type="radio"
                  name="diseaseOptions"
                  id="inlineRadio2"
                  value="no"
                  onChange={handleDiseaseOptionChange}
                />
                <label
                  className="form-check-label fw-bold fs-5"
                  htmlFor="inlineRadio2"
                >
                  No
                </label>
              </div>
            </div>

            <div>
              <div className="input-group mb-4">
                <select
                  onBlur={formikObj.handleBlur}
                  onChange={handleDiseaseChange}
                  value={formikObj.values.diseases}
                  className="input rounded-3 w-100"
                  id="diseases"
                  disabled={!isDiseasesDropdownEnabled}
                >
                  <option value="" label="" />
                  <option value="Sugar" label="Sugar" />
                  <option value="pressure" label="Pressure" />
                  <option value="heart" label="Heart" />
                </select>
                <label htmlFor="diseases" className="input-label">
                  Select the disease you suffer from
                </label>
              </div>
            </div>

            <div className="text-center">
          <button
            type="submit"
            className="w-50 rounded-3 fs-3 backcolorzeaty text-white"
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Prehome;
