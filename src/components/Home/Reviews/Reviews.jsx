import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";

const Reviews = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://thai-spice-server-rakib-hasan-rakib.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  const reviewOne = review != [] ? review[0] : [];
  const reviewTwo = review != [] ? review[1] : [];
  const reviewThree = review != [] ? review[2] : [];
  return (
    <div className="my-8 md:my-16">
      <h2 className="section-title">Reviews</h2>
      <div className="border-2 border-sky-300 rounded-lg flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-ray-600 p-2 my-4">
        <div className="basis-1/4">
          <LazyLoad threshold={0.9}>
            <img
              className="w-24 md:w-48 rounded-full border-4 border-sky-300"
              src={reviewOne?.image_url}
              alt=""
            />
          </LazyLoad>
        </div>
        <div className="basis-3/4 px-4">
          <p className="text-gray-700">{reviewOne?.review}</p>
          <p className="font-bold text-2xl">{reviewOne?.name}</p>
          <p className="font-semibold text-gray-700">{reviewOne?.job_post}</p>
        </div>
      </div>
      <div className="border-2 border-sky-300 rounded-lg flex flex-col md:flex-row-reverse items-center gap-2 md:gap-8 p-2 my-4">
        <div className="basis-1/4">
          <LazyLoad threshold={0.9}>
            <img
              className="w-24 md:w-48 object-cover object-center rounded-full border-4 border-sky-300"
              src={reviewTwo?.image_url}
              alt=""
            />
          </LazyLoad>
        </div>
        <div className="basis-3/4 px-4">
          <p className="text-gray-700">{reviewTwo?.review}</p>
          <p className="font-bold text-2xl">{reviewTwo?.name}</p>
          <p className="font-semibold text-gray-700">{reviewTwo?.job_post}</p>
        </div>
      </div>
      <div className="border-2 border-sky-300 rounded-lg flex flex-col md:flex-row items-center gap-2 md:gap-8 p-2 my-4">
        <div className="basis-1/4">
          <LazyLoad threshold={0.9}>
            <img
              className="w-24 md:w-48 rounded-full border-4 border-sky-300"
              src={reviewThree?.image_url}
              alt=""
            />
          </LazyLoad>
        </div>
        <div className="basis-3/4 px-4">
          <p className="text-gray-700">{reviewThree?.review}</p>
          <p className="font-bold text-2xl">{reviewThree?.name}</p>
          <p className="font-semibold text-gray-700">{reviewThree?.job_post}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
