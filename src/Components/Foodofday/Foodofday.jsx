import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { usercontext } from "../Context/user";

const Foodofday = () => {
  const [breakfast, setBreakfast] = useState([]);
  const [breakfastheart, setBreakfastHeart] = useState([]);
  const [breakfastsugar, setBreakfastSugar] = useState([]);
  const [breakfastpressure, setBreakfastPressure] = useState([]);

  const [lunch, setLunch] = useState([]);
  const [lunchheart, setLunchHeart] = useState([]);
  const [lunchsugar, setLunchSugar] = useState([]);
  const [lunchpressure, setLunchPressure] = useState([]);

  const [dinner, setDinner] = useState([]);
  const [dinnerheart, setDinnerHeart] = useState([]);
  const [dinnersugar, setDinnerSugar] = useState([]);
  const [dinnerpressure, setDinnerPressure] = useState([]);
  const [snack, setSnack] = useState([]);
  const { disea, role, weight, getUserDetails } = useContext(usercontext);

  const [checkedMeals, setCheckedMeals] = useState({}); // Initialize as an empty object

  useEffect(() => {
    getUserDetails();
  }, []);

  async function getBreakfast() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/food/breakfast`);
      setBreakfast(data.Breakfast.slice(0, 3));
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getBreakfastPressure() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/pressure/getBreakFastPressure`);
      setBreakfastPressure(data.breakfast.slice(0, 3));
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getBreakfastSugar() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/sugar/allbreakFastSugar`);
      setBreakfastSugar(data.breakfast.slice(0, 3));
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getBreakfastHeart() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/diseases/getBreakFastHeart`);
      setBreakfastHeart(data.breakfast.slice(0, 3));
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getLunch() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/food/lunch`);
      setLunch(data.lunch.slice(0, 3));
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getLunchPressure() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/pressure/getlunchPressure`);
      setLunchPressure(data.lunch.slice(0, 3));
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getLunchSugar() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/sugar/allLunchSugar`);
      setLunchSugar(data.lunsh.slice(0, 3));
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getLunchHeart() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/diseases/getlunchHeart`);
      setLunchHeart(data.lunch.slice(0, 3));
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getDinner() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/food/dinner`);
      setDinner(data.dinner.slice(0, 3));
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getDinnerPressure() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/pressure/getdinnerPressure`);
      setDinnerPressure(data.dinner.slice(0, 3));
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getDinnerSugar() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/sugar/alldinnerSugar`);
      setDinnerSugar(data.dinner.slice(0, 3));
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getDinnerHeart() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/diseases/getdinnerHeart`);
      setDinnerHeart(data.dinner.slice(0, 3));
    } catch (err) {
      console.log("error", err);
    }
  }

  async function getSnack() {
    try {
      const { data } = await axios.get(`https://abdo121212-fit-nutrition.onrender.com/food/snacks`);
      setSnack(data.snacks.slice(0, 2));
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    if (disea === "pressure") {
      getBreakfastPressure();
      getLunchPressure();
      getDinnerPressure();
    } else if (disea === "Sugar") {
      getBreakfastSugar();
      getLunchSugar();
      getDinnerSugar();
    } else if (disea === "heart") {
      getBreakfastHeart();
      getLunchHeart();
      getDinnerHeart();
    } else {
      getBreakfast();
      getLunch();
      getDinner();
    }
    getSnack();
  }, [disea]);

  const handleCheckboxChange = (mealId) => {
    setCheckedMeals((prev) => ({
      ...prev,
      [mealId]: !prev[mealId],
    }));
  };

  const renderMeals = (meals) =>
    meals.map((meal) => (
      <div
        key={meal._id}
        className="d-flex justify-content-between"
        style={{ borderBottom: "1px solid rgba(216, 216, 216, 1)" }}
      >
        <div className="form-check mx-3">
          <input
            className="form-check-input fs-2"
            type="checkbox"
            checked={checkedMeals[meal._id] || false}
            onChange={() => handleCheckboxChange(meal._id)}
            id={`defaultCheck${meal._id}`}
          />
          <div>
            <h6
              style={{
                textDecoration: checkedMeals[meal._id] ? "line-through" : "none",
                color: checkedMeals[meal._id] ? "gray" : "inherit",
              }}
            >
              {meal.name_en}
            </h6>
            <p
              className={classNames("colorzeaty", {
                "text-decoration-line-through text-muted": checkedMeals[meal._id],
              })}
            >
              {meal.calories} Cal
            </p>
          </div>
        </div>
        <div>
          <h6 className="colorzeaty">100gm</h6>
          <Link className="text-decoration-none text-black" to={"/choosefood"}>
            <h6 className="">
              change meal{" "}
              <i className="fa-solid fa-arrow-down-up-across-line colorzeaty px-2"></i>
            </h6>
          </Link>
        </div>
      </div>
    ));

  return (
    <div className="container">
  <div className="row py-5">
    <h1 className="fw-light py-2">Food of the day</h1>
    <div className="col-lg-4 col-md-6 pb-5">
      <div className="shadow-sm rounded-3">
        <div className="container py-2">
          <div>
            <h5 className="bg-body-secondary text-center px-1 rounded-5 py-2">
              Breakfast
            </h5>
          </div>
          {(disea === "pressure" && renderMeals(breakfastpressure)) ||
            (disea === "Sugar" && renderMeals(breakfastsugar)) ||
            (disea === "heart" && renderMeals(breakfastheart))}
          {!disea && renderMeals(breakfast)}
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 pb-5">
      <div className="shadow-sm rounded-3">
        <div className="container py-2">
          <div>
            <h5 className="bg-body-secondary text-center px-1 rounded-5 py-2">
              Lunch
            </h5>
          </div>
          {(disea === "pressure" && renderMeals(lunchpressure)) ||
            (disea === "Sugar" && renderMeals(lunchsugar)) ||
            (disea === "heart" && renderMeals(lunchheart))}
          {!disea && renderMeals(lunch)}
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 pb-5">
      <div className="shadow-sm rounded-3">
        <div className="container py-2">
          <div>
            <h5 className="bg-body-secondary text-center px-1 rounded-5 py-2">
              Dinner
            </h5>
          </div>
          {(disea === "pressure" && renderMeals(dinnerpressure)) ||
            (disea === "Sugar" && renderMeals(dinnersugar)) ||
            (disea === "heart" && renderMeals(dinnerheart))}
          {!disea && renderMeals(dinner)}
        </div>
      </div>
    </div>

    <div className="col-lg-4 col-md-6 pb-5">
      <div className="shadow-sm rounded-3">
        <div className="container py-2">
          <div>
            <h5 className="bg-body-secondary text-center px-1 rounded-5 py-2">
              Snacks
            </h5>
          </div>
          {renderMeals(snack)}
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Foodofday;










// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import classNames from "classnames";
// import { Link } from "react-router-dom";

// const Foodofday = () => {
//   const [breakfast, setBreakfast] = useState([]);
//   const [breakfastheart, setBreakfastHeart] = useState([]);
//   const [breakfastsuger, setBreakfastSuger] = useState([]);
//   const [breakfastpressure, setBreakfastPressure] = useState([]);

//   const [lunch, setLunch] = useState([]);
//   const [lunchheart, setLunchHeart] = useState([]);
//   const [lunchsuger, setLunchSuger] = useState([]);
//   const [lunchpressure, setLunchPressure] = useState([]);

//   const [dinner, setDinner] = useState([]);
//   const [dinnerheart, setDinnerHeart] = useState([]);
//   const [dinnersuger, setDinnerSuger] = useState([]);
//   const [dinnerpressure, setDinnerPressure] = useState([]);
//   const [snack, setSnack] = useState([]);
//   const { disea,role, weight, getUserDetails } = useContext(usercontext);

//   const [checkedMeals, setCheckedMeals] = useState({}); // Initialize as an empty object

//   async function getbreakFast() {
//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/food/breakfast`
//       );
//       console.log(data);
//       setBreakfast(data.Breakfast.slice(0, 3));
//       //       // Store the meals and the timestamp in localStorage
//       //   localStorage.setItem('breakfastMeals', JSON.stringify(meals));
//       //   localStorage.setItem('lastFetch', Date.now());
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

//   async function getbreakFast() {
//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/food/breakfast`
//       );
//       console.log(data);
//       setBreakfast(data.Breakfast.slice(0, 3));
//       //       // Store the meals and the timestamp in localStorage
//       //   localStorage.setItem('breakfastMeals', JSON.stringify(meals));
//       //   localStorage.setItem('lastFetch', Date.now());
//     } catch (err) {
//       console.log("error", err);
//     }

//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/pressure/getBreakFastPressure`
//       );
//       console.log(data);
//       setBreakfastPressure(data.breakFast.slice(0, 3));
//       //       // Store the meals and the timestamp in localStorage
//       //   localStorage.setItem('breakfastMeals', JSON.stringify(meals));
//       //   localStorage.setItem('lastFetch', Date.now());
//     } catch (err) {
//       console.log("error", err);
//     }

//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/sugar/allbreakFastSugar`
//       );
//       console.log(data);
//       setBreakfastSuger(data.breakfast.slice(0, 3));
//       //       // Store the meals and the timestamp in localStorage
//       //   localStorage.setItem('breakfastMeals', JSON.stringify(meals));
//       //   localStorage.setItem('lastFetch', Date.now());
//     } catch (err) {
//       console.log("error", err);
//     }

//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/diseases/getBreakFastHeart`
//       );
//       console.log(data);
//       setBreakfastHeart(data.breakFast.slice(0, 3));
//       //       // Store the meals and the timestamp in localStorage
//       //   localStorage.setItem('breakfastMeals', JSON.stringify(meals));
//       //   localStorage.setItem('lastFetch', Date.now());
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

//   async function getLunch() {
//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/food/lunch`
//       );
//       console.log(data);
//       setLunch(data.lunch.slice(0, 3));
//     } catch (err) {
//       console.log("error", err);
//     }

//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/pressure/getlunchPressure`
//       );
//       console.log(data);
//       setLunchPressure(data.lunch.slice(0, 3));
//       //       // Store the meals and the timestamp in localStorage
//       //   localStorage.setItem('breakfastMeals', JSON.stringify(meals));
//       //   localStorage.setItem('lastFetch', Date.now());
//     } catch (err) {
//       console.log("error", err);
//     }

//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/sugar/allLunchSugar`
//       );
//       console.log(data);
//       setLunchSuger(data.Lunch.slice(0, 3));
//       //       // Store the meals and the timestamp in localStorage
//       //   localStorage.setItem('breakfastMeals', JSON.stringify(meals));
//       //   localStorage.setItem('lastFetch', Date.now());
//     } catch (err) {
//       console.log("error", err);
//     }

//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/diseases/getlunchHeart`
//       );
//       console.log(data);
//       setLunchHeart(data.lunch.slice(0, 3));
//       //       // Store the meals and the timestamp in localStorage
//       //   localStorage.setItem('breakfastMeals', JSON.stringify(meals));
//       //   localStorage.setItem('lastFetch', Date.now());
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

//   async function getDinner() {
//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/food/dinner`
//       );
//       console.log(data);
//       setDinner(data.dinner.slice(0, 3));
//     } catch (err) {
//       console.log("error", err);
//     }

//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/pressure/getdinnerPressure`
//       );
//       console.log(data);
//       setDinnerPressure(data.dinner.slice(0, 3));
//       //       // Store the meals and the timestamp in localStorage
//       //   localStorage.setItem('breakfastMeals', JSON.stringify(meals));
//       //   localStorage.setItem('lastFetch', Date.now());
//     } catch (err) {
//       console.log("error", err);
//     }

//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/sugar/alldinnerSugar`
//       );
//       console.log(data);
//       setDinnerSuger(data.dinner.slice(0, 3));
//       //       // Store the meals and the timestamp in localStorage
//       //   localStorage.setItem('breakfastMeals', JSON.stringify(meals));
//       //   localStorage.setItem('lastFetch', Date.now());
//     } catch (err) {
//       console.log("error", err);
//     }

//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/diseases/getdinnerHeart`
//       );
//       console.log(data);
//       setDinnerHeart(data.dinner.slice(0, 3));
//       //       // Store the meals and the timestamp in localStorage
//       //   localStorage.setItem('breakfastMeals', JSON.stringify(meals));
//       //   localStorage.setItem('lastFetch', Date.now());
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

//   async function getSnack() {
//     try {
//       const { data } = await axios.get(
//         `https://abdo121212-fit-nutrition.onrender.com/food/snacks`
//       );
//       console.log(data);
//       setSnack(data.snacks.slice(0, 2));
//     } catch (err) {
//       console.log("error", err);
//     }
//   }

//   //   useEffect(() => {
//   //     // Check the last fetch time
//   //     const lastFetch = localStorage.getItem('lastFetch');
//   //     const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day

//   //     if (lastFetch && Date.now() - lastFetch < oneDay) {
//   //       // If the last fetch was less than a day ago, use the stored meals
//   //       const storedMeals = localStorage.getItem('breakfastMeals');
//   //       if (storedMeals) {
//   //         setBreakfast(JSON.parse(storedMeals));
//   //       }
//   //     } else {
//   //       // Otherwise, fetch new meals
//   //       getbreakFast();
//   //     }
//   //   }, []);
//   useEffect(() => {
//     getbreakFast();
//     getDinner();
//     getLunch();
//     getSnack();
//   }, []);

//   const handleCheckboxChange = (mealId) => {
//     setCheckedMeals((prev) => ({
//       ...prev,
//       [mealId]: !prev[mealId],
//     }));
//   };


//   useEffect(() => {
//     getUserDetails();
//   }, []);

//   return (
//     <>
      // <div className="container">
      //   <div className="row py-5">
      //     <h1 className="fw-light py-2">Food of the day</h1>
      //     <div className="col-lg-4 col-md-6 pb-5">
      //       <div className="shadow-sm rounded-3">
      //         <div className="container py-2">
      //           <div>
      //             <h5 className="bg-body-secondary text-center px-1 rounded-5 py-2">
      //               Breakfast
      //             </h5>
      //           </div>
      //           {breakfast.map((meal) => (
      //             <div
      //               key={meal._id}
      //               className="d-flex justify-content-between"
      //               style={{
      //                 borderBottom: "1px solid",
      //                 borderBottomColor: "rgba(216, 216, 216, 1)",
      //               }}
      //             >
      //               <div className="">
      //                 <div className="form-check mx-3">
      //                   <input
      //                     className="form-check-input fs-2"
      //                     type="checkbox"
      //                     checked={checkedMeals[meal._id] || false}
      //                     onChange={() => handleCheckboxChange(meal._id)}
      //                     id={`defaultCheck${meal._id}`}
      //                   />
      //                   <div>
      //                     <h6
      //                       style={{
      //                         textDecoration: checkedMeals[meal._id]
      //                           ? "line-through"
      //                           : "none",
      //                         color: checkedMeals[meal._id]
      //                           ? "gray"
      //                           : "inherit",
      //                       }}
      //                     >
      //                       {meal.name_en.split(" ").slice(0, 3).join(" ")}
      //                     </h6>
      //                     <p
      //                       className={classNames("colorzeaty", {
      //                         "text-decoration-line-through text-muted":
      //                           checkedMeals[meal._id],
      //                       })}
      //                     >
      //                       {meal.calories} Cal
      //                     </p>
      //                   </div>
      //                 </div>
      //               </div>
      //               <div>
      //                 <h6 className="colorzeaty">100gm</h6>
      //                 <Link
      //                   className="text-decoration-none text-black"
      //                   to={"/choosefood"}
      //                 >
      //                   {" "}
      //                   <h6 className="">
      //                     change meal{" "}
      //                     <i className="fa-solid fa-arrow-down-up-across-line colorzeaty px-2"></i>
      //                   </h6>
      //                 </Link>
      //               </div>
      //             </div>
      //           ))}
      //         </div>
      //       </div>
      //     </div>

      //     <div className="col-lg-4 col-md-6 pb-5">
      //       <div className="shadow-sm rounded-3">
      //         <div className="container py-2">
      //           <div>
      //             <h5 className="bg-body-secondary text-center px-1 rounded-5 py-2">
      //               Lunch
      //             </h5>
      //           </div>
      //           {lunch.map((meal) => (
      //             <div
      //               key={meal._id}
      //               className="d-flex justify-content-between"
      //               style={{
      //                 borderBottom: "1px solid",
      //                 borderBottomColor: "rgba(216, 216, 216, 1)",
      //               }}
      //             >
      //               <div className="">
      //                 <div className="form-check mx-3">
      //                   <input
      //                     className="form-check-input fs-2"
      //                     type="checkbox"
      //                     checked={checkedMeals[meal._id] || false}
      //                     onChange={() => handleCheckboxChange(meal._id)}
      //                     id={`defaultCheck${meal._id}`}
      //                   />
      //                   <div>
      //                     <h6
      //                       style={{
      //                         textDecoration: checkedMeals[meal._id]
      //                           ? "line-through"
      //                           : "none",
      //                         color: checkedMeals[meal._id]
      //                           ? "gray"
      //                           : "inherit",
      //                       }}
      //                     >
      //                       {meal.name_en}
      //                     </h6>
      //                     <p
      //                       className={classNames("colorzeaty", {
      //                         "text-decoration-line-through text-muted":
      //                           checkedMeals[meal._id],
      //                       })}
      //                     >
      //                       {meal.calories} Cal
      //                     </p>
      //                   </div>
      //                 </div>
      //               </div>
      //               <div>
      //                 <h6 className="colorzeaty">100gm</h6>
      //                 <Link
      //                   className="text-decoration-none text-black"
      //                   to={"/choosefood"}
      //                 >
      //                   {" "}
      //                   <h6 className="">
      //                     change meal{" "}
      //                     <i className="fa-solid fa-arrow-down-up-across-line colorzeaty px-2"></i>
      //                   </h6>
      //                 </Link>
      //               </div>
      //             </div>
      //           ))}
      //         </div>
      //       </div>
      //     </div>

      //     <div className="col-lg-4 col-md-6 pb-5">
      //       <div className="shadow-sm rounded-3">
      //         <div className="container py-2">
      //           <div>
      //             <h5 className="bg-body-secondary text-center px-1 rounded-5 py-2">
      //               Dinner
      //             </h5>
      //           </div>
      //           {dinner.map((meal) => (
      //             <div
      //               key={meal._id}
      //               className="d-flex justify-content-between"
      //               style={{
      //                 borderBottom: "1px solid",
      //                 borderBottomColor: "rgba(216, 216, 216, 1)",
      //               }}
      //             >
      //               <div className="">
      //                 <div className="form-check mx-3">
      //                   <input
      //                     className="form-check-input fs-2"
      //                     type="checkbox"
      //                     checked={checkedMeals[meal._id] || false}
      //                     onChange={() => handleCheckboxChange(meal._id)}
      //                     id={`defaultCheck${meal._id}`}
      //                   />
      //                   <div>
      //                     <h6
      //                       style={{
      //                         textDecoration: checkedMeals[meal._id]
      //                           ? "line-through"
      //                           : "none",
      //                         color: checkedMeals[meal._id]
      //                           ? "gray"
      //                           : "inherit",
      //                       }}
      //                     >
      //                       {meal.name_en}
      //                     </h6>
      //                     <p
      //                       className={classNames("colorzeaty", {
      //                         "text-decoration-line-through text-muted":
      //                           checkedMeals[meal._id],
      //                       })}
      //                     >
      //                       {meal.calories} Cal
      //                     </p>
      //                   </div>
      //                 </div>
      //               </div>
      //               <div>
      //                 <h6 className="colorzeaty">100gm</h6>
      //                 <Link
      //                   className="text-decoration-none text-black"
      //                   to={"/choosefood"}
      //                 >
      //                   {" "}
      //                   <h6 className="">
      //                     change meal{" "}
      //                     <i className="fa-solid fa-arrow-down-up-across-line colorzeaty px-2"></i>
      //                   </h6>
      //                 </Link>
      //               </div>
      //             </div>
      //           ))}
      //         </div>
      //       </div>
      //     </div>

      //     <div className="col-lg-4 col-md-6 pb-5">
      //       <div className="shadow-sm rounded-3">
      //         <div className="container py-2">
      //           <div>
      //             <h5 className="bg-body-secondary text-center px-1 rounded-5 py-2">
      //               Snacks
      //             </h5>
      //           </div>
      //           {snack.map((meal) => (
      //             <div
      //               key={meal._id}
      //               className="d-flex justify-content-between"
      //               style={{
      //                 borderBottom: "1px solid",
      //                 borderBottomColor: "rgba(216, 216, 216, 1)",
      //               }}
      //             >
      //               <div className="">
      //                 <div className="form-check mx-3">
      //                   <input
      //                     className="form-check-input fs-2"
      //                     type="checkbox"
      //                     checked={checkedMeals[meal._id] || false}
      //                     onChange={() => handleCheckboxChange(meal._id)}
      //                     id={`defaultCheck${meal._id}`}
      //                   />
      //                   <div>
      //                     <h6
      //                       style={{
      //                         textDecoration: checkedMeals[meal._id]
      //                           ? "line-through"
      //                           : "none",
      //                         color: checkedMeals[meal._id]
      //                           ? "gray"
      //                           : "inherit",
      //                       }}
      //                     >
      //                       {meal.name_en}
      //                     </h6>
      //                     <p
      //                       className={classNames("colorzeaty", {
      //                         "text-decoration-line-through text-muted":
      //                           checkedMeals[meal._id],
      //                       })}
      //                     >
      //                       {meal.calories} Cal
      //                     </p>
      //                   </div>
      //                 </div>
      //               </div>
      //               <div>
      //                 <h6 className="colorzeaty">100gm</h6>
      //                 <Link
      //                   className="text-decoration-none text-black"
      //                   to={"/choosefood"}
      //                 >
      //                   {" "}
      //                   <h6 className="">
      //                     change meal{" "}
      //                     <i className="fa-solid fa-arrow-down-up-across-line colorzeaty px-2"></i>
      //                   </h6>
      //                 </Link>
      //               </div>
      //             </div>
      //           ))}
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
//     </>
//   );
// };

// export default Foodofday;
