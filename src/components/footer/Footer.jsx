import React from "react";
import facebookIcon from "../../assets/images/facebook-icon.png";
import twitterIcon from "../../assets/images/twitter-icon.png";
import instagramIcon from "../../assets/images/instagram-icon.png";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white text-center">
        <h2 className="pt-4">Follow us on :</h2>
        <div className="flex justify-center items-center gap-4 my-4">
          <img
            className="w-8 cursor-pointer grayscale hover:grayscale-0"
            src={facebookIcon}
            alt=""
          />
          <img
            className="w-8 cursor-pointer grayscale hover:grayscale-0"
            src={twitterIcon}
            alt=""
          />
          <img
            className="w-8 cursor-pointer grayscale hover:grayscale-0"
            src={instagramIcon}
            alt=""
          />
        </div>
        <ul className="flex justify-center items-center gap-8">
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Privacy</li>
          <li className="cursor-pointer hover:text-blue-600">Terms</li>
          <li className="cursor-pointer hover:text-blue-600">Policies</li>
          <li className="cursor-pointer hover:text-blue-600">Others</li>
        </ul>
        <p className="my-6 tracking-wider md:tracking-widest font-bold  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          THAI SPICE
        </p>
        <p className="pb-4">
          <small>
            <span className="text-blue-700">&#169;</span>2023 ThaiSpice all
            rights reserved.
          </small>
        </p>
    </div>
  );
};

export default Footer;
