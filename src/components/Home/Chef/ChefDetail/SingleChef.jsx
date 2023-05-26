import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const SingleChef = ({ chef }) => {
  const { id, name, image, likes, num_recipes, years_of_experience } = chef;
  return (
    <div className="card card-compact bg-base-100 shadow-xl my-4">
      <figure className="h-48">
        <LazyLoad threshold={0.9}>
          <img
            className="object-cover object-center"
            src={image}
            alt="Thai Food"
          />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="text-md md:text-lg text-gray-700">
          <span className="font-semibold">likes </span>: {likes}+
        </p>
        <p className="text-md md:text-lg text-gray-700">
          <span className="font-semibold">Number of Recipes </span>: {num_recipes}
        </p>
        <p className="text-md md:text-lg text-gray-700 font-semibold">
          {years_of_experience} years of experience
        </p>

        <div className="card-actions justify-end mt-4">
          <Link className="food-btn" to={`/chefs/${id}`}>
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;
