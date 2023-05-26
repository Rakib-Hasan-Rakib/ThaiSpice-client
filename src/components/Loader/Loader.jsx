import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const override = {
  display: "block",
  margin: "0 auto",
  position: "absolute",
  top: "50%",
  left: "50%"
};

const Loader = () => {
  return (
      <FadeLoader
        color="cyan"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  );
};

export default Loader;
