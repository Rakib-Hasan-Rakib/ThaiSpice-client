/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import Foods from "./Food/Foods";
import Reviews from "./Reviews/Reviews";
import Banner from "./Banner/Banner";
import Chef from "./Chef/ChefDetail/Chef";
import { UserContext } from "../../providers/ContextProvider";
import Loader from "../Loader/Loader";

const Home = () => {
  let { dataLoading } = useContext(UserContext);
  return (
    <div className="w-11/12 mx-auto">
      {dataLoading && <Loader />}
      <Banner />
      <Chef />
      <Foods />
      <Reviews />
    </div>
  );
};

export default Home;
