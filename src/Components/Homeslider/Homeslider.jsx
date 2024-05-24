import React from "react";
import imag1 from "../../Images/Frame 1807.svg"
import Slider from "react-slick";


const Homeslider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <>
      <div className="slider-container py-5">
        <Slider {...settings}>
          <div className="container">
          <div className="py-2 ">
            <div className="container rounded-3 shadow">
              <div className="text-center pb-3 ">
                <img style={{height:"250px"}} className="w-100" src={require("../../Images/Downloads01.jpg")} alt="image of food" />
              <h3>Cheese with Tomatoes</h3>
              <p className="text-muted">Cheese with tomatoes and parsley is a delicious and nutritious combination that adds great flavor to any meal. The creamy texture of the cheese combines with</p>  
            </div>
            <div className="d-flex justify-content-between ">
                <p>Read more</p>
                <i className="fa-regular fa-bookmark colorzeaty fs-3"></i>
            </div>
            </div>
          </div>
          </div>


          <div className="container">
          <div className="py-2 ">
            <div className="container rounded-3 shadow">
              <div className="text-center pb-3 ">
                <img style={{height:"250px"}} className="w-100" src={require("../../Images/qmdvo8upnqey88jhixlz.jpg")} alt="image of food" />
              <h3>Whole Wheat Bread</h3>
              <p className="text-muted">Wheat bread is a popular type of bread made from whole wheat flour, and is considered a healthy choice that is rich in fiber and nutrients. It has a delicious</p>  
            </div>
            <div className="d-flex justify-content-between ">
                <p>Read more</p>
                <i className="fa-regular fa-bookmark colorzeaty fs-3"></i>
            </div>
            </div>
          </div>
          </div>


          <div className="container">
          <div className="py-2 ">
            <div className="container rounded-3 shadow">
              <div className="text-center pb-3 ">
                <img style={{height:"250px"}} className="w-100" src={require("../../Images/xj7rxqgo0ninnnhkzf0f.jpg")} alt="image of food" />
              <h3>Tea with Milk</h3>
              <p className="text-muted">Milk tea is a popular drink that combines the rich flavor of tea with the creamy texture of milk, creating a distinctive balance of taste. This blend is a tradition</p>  
            </div>
            <div className="d-flex justify-content-between ">
                <p>Read more</p>
                <i className="fa-regular fa-bookmark colorzeaty fs-3"></i>
            </div>
            </div>
          </div>
          </div>


          <div className="container">
          <div className="py-2 ">
            <div className="container rounded-3 shadow">
              <div className="text-center pb-3 ">
                <img style={{height:"250px"}} className="w-100" src={require("../../Images/sqzeod2otu9ccfsta4o8.jpg")} alt="image of food" />
              <h3>Apple</h3>
              <p className="text-muted">Apples are a delicious and nutritious fruit that is considered one of the most popular fruits in the world. It has a sweet, refreshing flavor and a delicious </p>  
            </div>
            <div className="d-flex justify-content-between ">
                <p>Read more</p>
                <i className="fa-regular fa-bookmark colorzeaty fs-3"></i>
            </div>
            </div>
          </div>
          </div>


          <div className="container">
          <div className="py-2 ">
            <div className="container rounded-3 shadow">
              <div className="text-center pb-3 ">
                <img style={{height:"250px"}} className="w-100" src={require("../../Images/Downloads05.jpg")} alt="image of food" />
              <h3>Yogurt</h3>
              <p className="text-muted">Yogurt is a delicious and healthy product derived from milk, known for its creamy texture and refreshing flavour. It is considered a rich source of proteins and </p>  
            </div>
            <div className="d-flex justify-content-between ">
                <p>Read more</p>
                <i className="fa-regular fa-bookmark colorzeaty fs-3"></i>
            </div>
            </div>
          </div>
          </div>


          <div className="container">
          <div className="py-2 ">
            <div className="container rounded-3 shadow">
              <div className="text-center pb-3 ">
                <img style={{height:"250px"}} className="w-100" src={require("../../Images/Downloads06.jpg")} alt="image of food" />
              <h3>Sole Fish</h3>
              <p className="text-muted">Sinjari fish is a type of edible marine fish, famous for its delicious flavor and high nutritional value. It is characterized by its white and tender flesh, and </p>  
            </div>
            <div className="d-flex justify-content-between ">
                <p>Read more</p>
                <i className="fa-regular fa-bookmark colorzeaty fs-3"></i>
            </div>
            </div>
          </div>
          </div>


          <div className="container">
          <div className="py-2 ">
            <div className="container rounded-3 shadow">
              <div className="text-center pb-3 ">
                <img style={{height:"250px"}} className="w-100" src={require("../../Images/hqawezhs0edafyesb62x.webp")} alt="image of food" />
              <h3>Fishermen's Rice</h3>
              <p className="text-muted">Fishermen's rice is a distinctive type of rice used in cooking, famous for its sticky texture and rich flavour. It is considered one of the most common types of rice</p>  
            </div>
            <div className="d-flex justify-content-between ">
                <p>Read more</p>
                <i className="fa-regular fa-bookmark colorzeaty fs-3"></i>
            </div>
            </div>
          </div>
          </div>


          <div className="container">
          <div className="py-2 ">
            <div className="container rounded-3 shadow">
              <div className="text-center pb-3 ">
                <img style={{height:"250px"}} className="w-100" src={require("../../Images/Downloads08.jpg")} alt="image of food" />
              <h3>Oat Biscuits</h3>
              <p className="text-muted">Oatmeal cookies are a delicious and healthy snack option. It has a rich oat flavor and soft texture, making it perfect for breakfast or snacks at any time of the</p>  
            </div>
            <div className="d-flex justify-content-between ">
                <p>Read more</p>
                <i className="fa-regular fa-bookmark colorzeaty fs-3"></i>
            </div>
            </div>
          </div>
          </div>


          <div className="container">
          <div className="py-2 ">
            <div className="container rounded-3 shadow">
              <div className="text-center pb-3 ">
                <img style={{height:"250px"}} className="w-100" src={require("../../Images/Downloads09.jpg")} alt="image of food" />
              <h3>Watermelon Juice</h3>
              <p className="text-muted">Watermelon juice is a refreshing and delicious drink that many enjoy during the summer. It has a sweet and refreshing taste and a liquid consistency that</p>  
            </div>
            <div className="d-flex justify-content-between ">
                <p>Read more</p>
                <i className="fa-regular fa-bookmark colorzeaty fs-3"></i>
            </div>
            </div>
          </div>
          </div>


          <div className="container">
          <div className="py-2 ">
            <div className="container rounded-3 shadow">
              <div className="text-center pb-3 ">
                <img style={{height:"250px"}} className="w-100" src={require("../../Images/Downloads10.jpg")} alt="image of food" />
              <h3>Boiled Corn Dish</h3>
              <p className="text-muted">Boiled corn is a delicious and nutritious meal enjoyed by many people around the world. Corn is sweet and flavourful, and is a good source of carbohydrates,</p>  
            </div>
            <div className="d-flex justify-content-between ">
                <p>Read more</p>
                <i className="fa-regular fa-bookmark colorzeaty fs-3"></i>
            </div>
            </div>
          </div>
          </div>
          
          

          
        </Slider>
      </div>
    </>
  );
};

export default Homeslider;
