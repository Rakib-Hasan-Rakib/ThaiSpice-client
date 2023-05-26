import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../assets/images/error-image.jpg'

const ErrorPage = () => {
    let { status, statusText, data } = useRouteError();
    return (
      <div className="bg-black h-screen">
        <img className="w-1/2 mx-auto" src={errorImage} alt="" />
        <div className="text-center text-red-600 flex flex-col gap-2">
          <h1 className="font-bold text-3xl md:text-7xl">{status}</h1>
          <p className="font-semibold text-xl md:text-3xl">{statusText}</p>
          <p className="font-semibold text-lg md:text-2xl">{data}</p>
        </div>
        <button className="w-full mx-auto my-6">
          <Link className="custom-btn" to="/">
            Back to Home
          </Link>
        </button>
      </div>
    );
};

export default ErrorPage;