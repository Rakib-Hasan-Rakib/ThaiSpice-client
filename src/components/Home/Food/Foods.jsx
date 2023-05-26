import React, { useEffect, useState } from "react";
import SingleFood from "./SingleFood";

const Foods = () => {
  let [foods, setFoods] = useState([]);
  let [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("https://thai-spice-server-rakib-hasan-rakib.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  
  return (
    <div>
      <h2 className="section-title">our famous dishes..</h2>
      <div className="grid md:grid-cols-3 gap-2 my-6">
        {!showAll &&
          foods
            .slice(0, 3)
            .map((food, idx) => (
              <SingleFood food={food} key={idx}></SingleFood>
            ))}
        {showAll &&
          foods.map((food, idx) => (
            <SingleFood food={food} key={idx}></SingleFood>
          ))}
      </div>
      <div className="flex justify-center mb-4">
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="food-btn text-center"
          >
            All Dishes
          </button>
        )}
      </div>
    </div>
  );
};

export default Foods;
