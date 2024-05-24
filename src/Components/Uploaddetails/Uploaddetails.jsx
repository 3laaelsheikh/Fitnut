import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FallingLines, RotatingLines } from "react-loader-spinner";

const Uploaddetails = ({ data }) => {
  const [formData, setFormData] = useState({});

  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [ai, setAi] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new FormData object
    const formDataToSend = new FormData();
    formDataToSend.append("files", file, file.name);

    setIsLoading(true);
    try {
      const { data } = await axios.post(
        `https://food-model.onrender.com/predict/`,
        formDataToSend
      );
      console.log(data);
      setAi(data);
      console.log(ai);
    } catch (err) {
      console.log("error", err);
    }

    setIsLoading(false);

    // try {
    //   const {result} = await fetch(
    //     "https://food-model.onrender.com/predict/",
    //     {
    //       method: "POST",
    //       body: formDataToSend,
    //     }
    //   );
    //   console.log(formDataToSend);
    //   console.log(result);
    //   setAi(result)
    //   console.log(ai);

    // } catch (error) {
    //   console.log("error", error);
    // }
    // setIsLoading(false);

    // console.log("Form data submitted:", formDataToSend);
  };

  useEffect(() => {
    if (ai !== null) {
      console.log("Updated ai:", ai);
    }
  }, [ai]);

  return (
    <>
      <div className="my-5 py-5 d-flex justify-content-center align-items-center">
        <form className="form-control w-50" onSubmit={handleSubmit}>
          <div className="input-group mb-4 d-flex justify-content-center">
            <input
              type="file"
              name="file"
              value={formData.file}
              className="input w-100 rounded-3 w-75"
              placeholder="choose image"
              onChange={handleFileChange}
            />
          </div>

          <div className="d-flex justify-content-center">
            <button
              className="btn text-black w-50 mt-2 backcolorzeaty"
              style={{
                border: "2px solid",
                borderColor: "rgba(114, 153, 0, 1)",
              }}
              type="submit"
            >
              {isLoading ? (
                <FallingLines
                  color="rgba(114, 153, 0, 1)"
                  width="30"
                  visible={true}
                  ariaLabel="falling-lines-loading"
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="cintainer">
        <div className="d-flex justify-content-center align-items-center">
          <div className="w-75 shadow bg-body-tertiary rounded-5 mb-5">
            <div className="container">
              <div className="row">
                {ai ? (
                  <>
                    {ai.map(function (elm, idx) {
                      return (
                        <div
                          key={idx}
                          className="d-flex justify-content-center py-5 "
                        >
                          <div className="col-4">
                            <div className="">
                              <img
                                src={URL.createObjectURL(file)}
                                className="w-100 shadow rounded-5 "
                                alt="plate of food"
                              />
                            </div>
                          </div>
                          <div className="col-8 ">
                            <div className="container px-5">
                              <div className="">
                                <h2 className="colorzeaty text-center py-3">
                                  {elm.predicted_class}
                                </h2>
                                <div className="d-flex ta">
                                  <ul className="list-unstyled">
                                    <li>Calories:</li>
                                    <li>Proteins:</li>
                                    <li>Info:</li>
                                  </ul>
                                  <ul className="list-unstyled">
                                    <li className="colorzeaty px-2 ">
                                      {elm.class_info.Calories}
                                    </li>
                                    <li className="colorzeaty px-2 ">
                                      {elm.class_info.Protein}
                                    </li>
                                    <li className="colorzeaty px-2 ">
                                      {elm.class_info.Info}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <div className="d-flex justify-content-center align-items-center">
                      <RotatingLines
                        strokeColor="rgba(114, 153, 0, 1)"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Uploaddetails;
