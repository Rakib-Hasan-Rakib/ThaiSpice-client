import React from "react";
import LazyLoad from "react-lazy-load";

const RecipeBanner = ({ recipeData }) => {
  const { name, image, description, likes, num_recipes, years_of_experience } =
    recipeData;
    return (
      <div className="card lg:card-side bg-base-100 shadow-xl my-8">
        <figure className="w-1/2">
          <LazyLoad threshold={0.9}>
            <img className="w-full" src={image} alt="Album" />
          </LazyLoad>
        </figure>
        <div className="card-body w-1/2">
          <div>
            <div className="my-4">
              <h2 className="card-title name my-1">{name}</h2>
              <p className="text-md text-gray-700 font-semibold">
                {description}
              </p>
            </div>
            <div className="my-2 font-semibold text-gray-700">
              <p>Likes: {likes}</p>
              <p>Numbers of Recipe: {num_recipes}</p>
              <p>{years_of_experience}+ years of experience</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RecipeBanner;
