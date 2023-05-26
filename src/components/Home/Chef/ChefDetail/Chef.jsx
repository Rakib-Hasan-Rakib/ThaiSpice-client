import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef";

const Chef = () => {
  let [chefsData, setChefsData] = useState([]);
  useEffect(() => {
    fetch("https://thai-spice-server-rakib-hasan-rakib.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefsData(data));
  }, []);

  return (
    <div>
      <h2 className="section-title">Our best chefs</h2>
      <div className="grid md:grid-cols-3 gap-2 my-6">
        {chefsData.map((chef) => (
          <SingleChef chef={chef} key={chef.id} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
