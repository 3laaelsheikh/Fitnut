import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useParams } from "react-router-dom";
import Chart from "chart.js/auto";

const Choosefooddetails = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState(null);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [chartData, setChartData] = useState(null);
  

  async function getArticles() {
    try {
      const response = await axios.get(
        `https://abdo121212-fit-nutrition.onrender.com/food/${id}`
      );
      const foodDetails = response.data.food ? [response.data.food] : [];
      console.log(foodDetails);
      setArticles(foodDetails);
      if (response.data.success && response.data.food) {
        const { proteins, carbs, fats, calories } = response.data.food;
        setChartData({
          labels: ["Proteins", "Carbs", "Fats", "Calories"],
          datasets: [
            {
              data: [proteins, carbs, fats, calories],
              backgroundColor: [
                "rgba(6, 121, 255, 1)", // Protein color
                "rgba(219, 234, 51, 1)", // Carbs color
                "rgba(253, 24, 24, 1)", // Fats color
                "rgba(114, 153, 0, 1)",
              ],
            },
          ],
        });
      }
    } catch (err) {
      console.log("error", err);
      setArticles([]);
    }
  }

  useEffect(() => {
    getArticles();
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    if (chartData) {
      // Custom plugin to draw percentage labels
      const drawPercentageLabels = {
        id: "drawPercentageLabels",
        afterDatasetsDraw(chart) {
          const {
            ctx,
            chartArea: { top, bottom, left, right },
          } = chart;
          const meta = chart.getDatasetMeta(0);
          const total = chart.data.datasets[0].data.reduce(
            (acc, value) => acc + value,
            0
          );

          meta.data.forEach((dataPoint, index) => {
            const { x, y } = dataPoint.tooltipPosition();
            const value = chart.data.datasets[0].data[index];
            const percentage = ((value / total) * 100).toFixed(2) + "%";

            ctx.fillStyle = "#000";
            ctx.font = "14px Arial";
            ctx.fillText(percentage, x, y);
          });
        },
      };

      if (chartRef.current) {
        const myChartRef = chartRef.current.getContext("2d");

        // Destroy any existing chart instance before creating a new one
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        // Create a new chart instance with the custom plugin
        chartInstance.current = new Chart(myChartRef, {
          type: "doughnut",
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
          plugins: [drawPercentageLabels],
        });

        console.log("Chart created:", chartInstance.current);
      }

      // Cleanup function to destroy the chart when the component unmounts
      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
          chartInstance.current = null; // Reset chartInstance to avoid using a destroyed chart
        }
      };
    }
  }, [chartData]); // Only run when chartData changes

  const calculatePercentages = (data) => {
    const total = data.reduce((acc, value) => acc + value, 0);
    return data.map((value) => ((value / total) * 100).toFixed(2));
  };

  return (
    <>
      <div className="container">
        <div className="container">
            <h1 className="colorzeaty">my plan</h1>
        </div>
        <div className="row">
          {articles ? (
            <>
              {articles.map(function (elm, idx) {
                return (
                  <div
                    key={idx}
                    className="d-flex justify-content-center py-5 "
                  >
                    <div className="col-lg-6 container">
                      <div className="">
                        <div
                          className="shadow rounded-3"
                          style={{
                            border: "2px solid",
                            borderColor: "rgba(114, 153, 0, 1)",
                          }}
                        >
                          <img
                            src={elm.image.url}
                            className="w-100 rounded-3 "
                            style={{ height: "224px" }}
                            alt="plate of food"
                          />
                          <div className="container p-1">
                            <div
                              className="container my-2 rounded-3"
                              style={{
                                border: "2px solid",
                                borderColor: "rgba(114, 153, 0, 1)",
                              }}
                            >
                              <div className="container px-5 d-flex justify-content-between">
                                <h6 className="">Breakfast</h6>
                                <p className="text-muted">0/350 Cal</p>
                              </div>
                              <div
                                className="progress mb-2"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow="0"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: "0%",
                                    backgroundColor: "rgba(114, 153, 0, 1)",
                                  }}
                                ></div>
                              </div>
                            </div>

                            <div
                              className="container my-2 rounded-3"
                              style={{
                                border: "2px solid",
                                borderColor: "rgba(114, 153, 0, 1)",
                              }}
                            >
                              <div className="container px-5 d-flex justify-content-between">
                                <h6 className="">Lunch</h6>
                                <p className="text-muted">250/350 Cal</p>
                              </div>
                              <div
                                className="progress mb-2"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: "50%",
                                    backgroundColor: "rgba(114, 153, 0, 1)",
                                  }}
                                ></div>
                              </div>
                            </div>

                            <div
                              className="container my-2 rounded-3"
                              style={{
                                border: "2px solid",
                                borderColor: "rgba(114, 153, 0, 1)",
                              }}
                            >
                              <div className="container px-5 d-flex justify-content-between">
                                <h6 className="">Dinner</h6>
                                <p className="text-muted">250/350 Cal</p>
                              </div>
                              <div
                                className="progress mb-2"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: "75%",
                                    backgroundColor: "rgba(114, 153, 0, 1)",
                                  }}
                                ></div>
                              </div>
                            </div>

                            <div
                              className="container my-2 rounded-3"
                              style={{
                                border: "2px solid",
                                borderColor: "rgba(114, 153, 0, 1)",
                              }}
                            >
                              <div className="container px-5 d-flex justify-content-between">
                                <h6 className="">Snacks</h6>
                                <p className="text-muted">350/350 Cal</p>
                              </div>
                              <div
                                className="progress mb-2"
                                role="progressbar"
                                aria-label="Basic example"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: "100%",
                                    backgroundColor: "rgba(114, 153, 0, 1)",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="">
                        <div
                          className="shadow rounded-3"
                          style={{
                            height:"543px",
                            border: "2px solid",
                            borderColor: "rgba(114, 153, 0, 1)",
                          }}
                        >
                          <div className="container">
                                <h2 className="p-2 colorzeaty">Macros</h2>

                            <div
                            className="d-flex justify-content-between align align-items-center pt-5"
                              style={{ display: "flex", alignItems: "center" }}
                            >

                              <div
                                style={{
                                  width: "30%",
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                }}
                              >
                                {chartData &&
                                  chartData.labels.map((label, index) => {
                                    const percentages = calculatePercentages(
                                      chartData.datasets[0].data
                                    );
                                    return (
                                      <div
                                      className="m-3"
                                        key={label}
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          marginBottom: "8px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            width: "20px",
                                            height: "20px",
                                            backgroundColor:
                                              chartData.datasets[0]
                                                .backgroundColor[index],
                                            borderRadius: "50%",
                                            marginRight: "8px",
                                          }}
                                        ></div>
                                        <span>
                                          {label}:<span className="text-muted">{percentages[index]}%</span>
                                        </span>
                                      </div>
                                    );
                                  })}
                              </div>
                              <div style={{ width: "50%" }}>
                                <canvas ref={chartRef}></canvas>
                              </div>
                            </div>
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
        <div className="d-flex justify-content-center py-5">
           <Link className=" text-decoration-none" to={"/foodofday"}>
            <button
                type="submit"
                className="rounded-3 px-5 py-2 fs-3 backcolorzeaty text-white"
                
              >
                add meal
              </button>
            </Link>
           </div>
      </div>
    </>
  );
};

export default Choosefooddetails;
