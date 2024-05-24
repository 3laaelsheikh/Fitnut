import axios from "axios";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState(null);

  async function getArticles() {
    try {
      const response = await axios.get(
        `https://abdo121212-fit-nutrition.onrender.com/food/${id}`
      );
      const foodDetails = response.data.food ? [response.data.food] : [];
      console.log(foodDetails);
      setArticles(foodDetails);
    } catch (err) {
      console.log("error", err);
      setArticles([]);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {articles ? (
            <>
              {articles.map(function (elm, idx) {
                return (
                  <div
                    key={idx}
                    className="d-flex justify-content-center py-5 "
                  >
                    <div className="col-4">
                      <div className="shadow">
                        <img
                          src={elm.image.url}
                          className="w-100 "
                          alt="plate of food"
                        />
                      </div>
                    </div>
                    <div className="col-8 ">
                     <div className="container px-5">
                        <div className=""> <h2 className="colorzeaty text-center py-3">{elm.name_en}</h2>
                      <p className="text-muted ">{elm.article_summary_en}</p>
                      <div className="d-flex ta">
                      <ul className="list-unstyled">
                        <li>Calories:</li>
                        <li>Proteins:</li>
                        <li>Carbs:</li>
                        <li>Fats:</li>
                      </ul>
                      <ul className="list-unstyled">
                        <li className="colorzeaty px-2 ">{elm.calories}</li>
                        <li className="colorzeaty px-2 ">{elm.proteins}</li>
                        <li className="colorzeaty px-2 ">{elm.carbs}</li>
                        <li className="colorzeaty px-2 ">{elm.fats}</li>
                        

                      </ul>
                      <ul className="list-unstyled">
                        <li className="text-muted">per 100 gm</li>
                        <li className="text-muted">per 100 gm</li>
                        <li className="text-muted">per 100 gm</li>
                        <li className="text-muted">per 100 gm</li>
                        

                      </ul>
                      </div>
                      {/* <ul>
                        <li><p className="text-muted  ">Calories:   </p></li>
                        <li><p className="colorzeaty  px-2 fs-5 ">{elm.calories}</p></li>
                        <li><p className="text-black">per 100 gm</p><span className="text-black">per 100 gm</span></li>

                      </ul> */}
                      
                      {/* <p className="text-muted  ">Proteins:<span className="colorzeaty  px-2 fs-5 ">{elm.proteins}</span>  </p>
                      <p className="text-muted  ">Carbs:<span className="colorzeaty  px-2 fs-5 ">{elm.carbs}</span> <span className="text-black">per 100 gm</span></p>
                      <p className="text-muted  ">Fats:<span className="colorzeaty  px-2 fs-5 ">{elm.fats}</span> <span className="text-black">per 100 gm</span></p>
                       */}
                      </div>
                     </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <div className="d-flex vh-100 justify-content-center align-items-center">
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
    </>
  );
};

export default Details;
