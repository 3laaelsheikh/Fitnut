import axios from "axios";
import React, { useEffect, useState } from "react";
import imag3 from "../../Images/Vector (2).svg";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const Choosefood = () => {
  const [articles, setArticles] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = articles
    ? articles.filter((food) =>
        food.name_en.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  async function getArticles() {
    try {
      const { data } = await axios.get(
        `https://abdo121212-fit-nutrition.onrender.com/food/allFood`,
        {
          headers: { token: localStorage.getItem("tkn") },
        }
      );
      console.log(data);
      setArticles(data.food);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row gy-5 py-5">
          <div className="container mt-5 mb-2">
            <div className="input-group mb-4 d-flex justify-content-center">
              <input
                value={searchQuery}
                type="text"
                className="input w-100 rounded-3 w-75"
                placeholder="Search by meal name"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {filteredUsers ? (
            <>
              {filteredUsers.map(function (elm, idx) {
                return (
                  <div key={idx} className="col-lg-6 col-md-6">
                    <div className="container">
                      <div className="">
                        <Link
                          className="text-decoration-none text-black"
                          to={`/choosefooddetails/${elm._id}`}
                        >
                          <div className="container d-flex rounded-3 shadow">
                            <div className="text-center pb-3 ">
                              <img
                                // className="w-100"
                                src={elm.image.url}
                                alt="image of food"
                                style={{ height: "274px", width: "302px" }}
                              />
                            </div>
                            <div className=" px-3">
                              <h3 className="py-2">
                                {elm.name_en.split(" ").slice(0, 2).join(" ")}
                              </h3>
                              <h6 className="">Description:</h6>
                              <span className="text-muted">
                                {elm.article_summary_en
                                  .split(" ")
                                  .slice(0, 15)
                                  .join(" ")}
                              </span>
                              <div className="d-flex">
                                <p className="colorzeaty pt-3 fs-4">
                                  {elm.calories}
                                  <span className="fw-bold px-2 colorzeaty">
                                    cal
                                  </span>{" "}
                                </p>
                                <img src={imag3} className="" alt="" />
                              </div>
                            </div>
                          </div>
                        </Link>
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
    </>
  );
};

export default Choosefood;
