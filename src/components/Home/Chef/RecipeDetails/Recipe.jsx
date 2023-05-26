import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeBanner from "./RecipeBanner";
import RecipeCard from "./RecipeCard";
// import { ToastContainer, toast } from "react-toastify";

const Recipe = () => {
  let [recipeData, setRecipeData] = useState({});
  let { id } = useParams();
  useEffect(() => {
    fetch(`https://thai-spice-server-rakib-hasan-rakib.vercel.app/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipeData(data));
  }, [id]);
  let { recipes } = recipeData;
  return (
    <div className="w-11/12 mx-auto">
      <RecipeBanner recipeData={recipeData} />
      <div className="my-16">
        <h2 className="section-title">Best Recipes of {recipeData.name}</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {recipes &&
            recipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
