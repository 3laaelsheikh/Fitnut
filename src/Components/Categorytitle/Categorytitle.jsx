import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Categorytitle = () => {
  const [errMsg, setErrMsg] = useState(null);
  const [sucssesMsg, setSucssesMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sex, setSex] = useState("");
  const [value, setValue] = useState("");
  const [calories, setCalories] = useState("");
  const [autoSubmit, setAutoSubmit] = useState(false);
  const [isCaloriesLoading, setIsCaloriesLoading] = useState(false);


  const navigate = useNavigate();

  async function calculateCalories() {
    setIsCaloriesLoading(true);
    try {
      const { data } = await axios.post(
        `https://abdo121212-fit-nutrition.onrender.com/calories/calculate`,
        {},
        {
          headers: { token: localStorage.getItem("tkn") },
        }
      );
      console.log(data);
      const formattedBMR = data.BMR.toString().split(".").slice(0, 1).join("");
      setCalories(formattedBMR); // Set formatted BMR as a string with spaces
    } catch (err) {
      console.log("error", err);
    } finally {
      setIsCaloriesLoading(false);
    }
  }

  const formikObj = useFormik({
    initialValues: {
      activityLevel: "",
      trainingPriority: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      setIsLoading(true);
      try {
        const { data } = await axios.post(
          `https://abdo121212-fit-nutrition.onrender.com/calories/Burn_rate`,
          values,
          {
            headers: { token: localStorage.getItem("tkn") },
          }
        );
        console.log(values);
        console.log(data);

        if (data.sccess) {
          await calculateCalories();
        }
      } catch (err) {
        console.log("error", err);
      }

      setIsLoading(false);
    },
  });

  const handleFieldChange = (field, value) => {
    formikObj.setFieldValue(field, value);
    setAutoSubmit(true);
  };

  useEffect(() => {
    if (autoSubmit) {
      formikObj.submitForm();
      setAutoSubmit(false);
    }
  }, [formikObj.values, autoSubmit]);

  return (
    <>
      <div className="container">
        <div className="container">
          <div className="justify-content-center d-flex">
            <h2 className="colorzeaty">Category Title</h2>
          </div>

          <div className="my-2 ">
            <form className="d-flex justify-content-center w-100" onSubmit={formikObj.handleSubmit}>
              <div className="w-50 mt-5">
              <div className="my-2">
                <select
                  className="input w-100 rounded-3"
                  onChange={(event) =>
                    handleFieldChange("activityLevel", event.target.value)
                  }
                  onBlur={formikObj.handleBlur}
                  value={formikObj.values.activityLevel}
                  aria-label="Default select example"
                >
                  <option value="">Select activity level</option>
                  <option value="low">Low</option>
                  <option value="middle">Middle</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="my-3">
                <select
                  className="input w-100 rounded-3"
                  onChange={(event) =>
                    handleFieldChange("trainingPriority", event.target.value)
                  }
                  onBlur={formikObj.handleBlur}
                  value={formikObj.values.trainingPriority}
                  aria-label="Default select example"
                >
                  <option value="">Select training priority</option>
                  <option value="low">Low</option>
                  <option value="middle">Middle</option>
                  <option value="high">High</option>
                </select>
              </div>
              </div>
            </form>
          </div>

          <div className="d-flex justify-content-center">
            <div className="pt-5">
              <h3 className="colorzeaty">Recommended Caloric intake</h3>

              {calories !== null && (
                <div>
                  <p className="fw-bold text-center blazed">
                    {calories}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="d-flex justify-content-center py-5">
            <Link className="text-decoration-none" to={calories ? "/foodofday" : "#"}>
              <button
                type="button"
                className="rounded-3 px-5 py-2 fs-3 backcolorzeaty text-white"
                disabled={!calories}
              >
                Get on diet
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categorytitle;
