import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---------left section-------- */}
        <div className="">
          <img className="w-40 mb-5" src={assets.logo} alt="" />
          <p className="w-full md:2/3 text-gray-600 leading-6">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* ---------Center section-------- */}
        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ---------Right section-------- */}
        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>greatstackdev@gmail.com</li>
          </ul>
        </div>
      </div>
      
      {/* ------- Copyright ------- */}
      <div className="py-5 text-sm text-center">
        <hr />
        <p>Copyright © 2025 GreatStack - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
