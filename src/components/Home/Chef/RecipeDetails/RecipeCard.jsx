import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from "react-lazy-load";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RecipeCard = ({ recipe }) => {
  let [favourite, setFavourite] = useState(false);
  let { image, name, rating, cooking_method, ingredients } = recipe;
  


  let handleFavourite = () => {
    setFavourite(true)
   toast.success("Added to your favourite list.");
 }


  return (
    <div className="card card-compact bg-base-100 shadow-xl p-2 my-4">
      <figure className="h-56">
        <LazyLoad threshold={0.9}>
          <img
            className="object-cover object-center"
            src={image}
            alt="Thai Food"
          />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-3xl">{name}</h2>
        <div>
          <h3 className="font-semibold text-xl">Ingredients:</h3>
          {ingredients.map((ingredient, idx) => (
            <span className="text-lg" key={idx}>
              {ingredient},{" "}
            </span>
          ))}
        </div>
        <p className="text-lg">
          <span className="font-semibold text-xl">Cooking Method</span>: <br />{" "}
          {cooking_method}
        </p>
        <div className="flex justify-between my-4">
          <div>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            <p className="font-semibold text-xl">Ratings: {rating} </p>
          </div>
          <button
            onClick={handleFavourite}
            className="food-btn"
            disabled={favourite && true}
          >
            Favourite
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
