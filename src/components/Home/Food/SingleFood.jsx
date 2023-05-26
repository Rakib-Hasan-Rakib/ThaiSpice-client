import React from "react";
import LazyLoad from "react-lazy-load";

const SingleFood = ({ food }) => {
  const { name, price, rating, image_url } = food;
  return (
    <div className="card card-compact bg-base-100 shadow-xl my-4">
      <figure className="h-48">
        <LazyLoad threshold={0.9}>
          <img
            className="object-cover object-center"
            src={image_url}
            alt="Thai Food"
          />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="text-md md:text-lg">Rating: {rating}</p>
        <p className="text-md md:text-lg">Price: ${price} only</p>
        <div className="card-actions justify-end mt-4">
          <button className="food-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
