import React from "react";
import "./Banner.css";
import image from "../../../assets/images/Banner-one.jpg";

const Banner = () => {
  return (
    <div className="banner-div rounded-xl flex items-center">
      <div className="text-white p-4 md:p-8 md:w-1/2">
        <h1 className="banner-title">Thai Spice</h1>
        <p className="md:text-xl font-semibold">- the Flavors of Thailand</p>
        <p className="text-sm leading-6 my-6">
          We are dedicated to providing you with the best Thai food experience
          possible. Explore our site today to discover the world of Thai food.
        </p>
        {/* <button className="btn btn-primary">View Food</button>
        <button className="btn btn-primary">View Chef</button> */}
      </div>
    </div>
  );
};

export default Banner;
