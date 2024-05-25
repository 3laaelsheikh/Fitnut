import axios from "axios";
import React, { useEffect, useState } from "react";
import imag3 from "../../Images/Vector (2).svg";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const ChooseFood = () => {
  const [articles, setArticles] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredArticles = articles
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
      setArticles(data.food);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching articles:", err);
      setError("Failed to fetch articles. Please try again later.");
      setLoading(false);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
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

        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <RotatingLines
              strokeColor="rgba(114, 153, 0, 1)"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        ) : error ? (
          <div className="text-center text-danger">{error}</div>
        ) : (
          <>
            {filteredArticles.map((article, idx) => (
              <div key={idx} className="col-lg-6 col-md-6">
                <div className="container">
                  <div className="">
                    <Link
                      className="text-decoration-none text-black"
                      to={`/choosefooddetails/${article._id}`}
                    >
                      <div className="container d-flex rounded-3 shadow">
                        <div className="text-center pb-3 ">
                          <img
                            src={article.image.url}
                            alt={article.name_en}
                            style={{ height: "274px", width: "302px" }}
                          />
                        </div>
                        <div className=" px-3">
                          <h3 className="py-2">
                            {article.name_en.split(" ").slice(0, 2).join(" ")}
                          </h3>
                          <h6 className="">Description:</h6>
                          <span className="text-muted">
                            {article.article_summary_en
                              .split(" ")
                              .slice(0, 15)
                              .join(" ")}
                          </span>
                          <div className="d-flex">
                            <p className="colorzeaty pt-3 fs-4">
                              {article.calories}
                              <span className="fw-bold px-2 colorzeaty">cal</span>{" "}
                            </p>
                            <img src={imag3} className="" alt="calories icon" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ChooseFood;