import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = ({count}) => {

    const [side, setside] = useState(false);
    console.log(side);

  return (
    <>
    <div className="sticky top-0 bg-white z-10">


      <div className="flex justify-between p-4 items-center border-b-2 sticky  sm:justify-around py-4">
        <div className="text-xl cursor-pointer">
          <Link to="/">
          Dish<span className="text-orange-500">Delight</span>
          </Link>
        </div>
        <div>
          <ul className="hidden gap-5 text-[18px] cursor-pointer sm:flex">
            <Link to="/">
            <li className="hover:text-orange-500">Home</li>
            </Link>
            <Link to="/food">
            <li className="hover:text-orange-500">Foods</li>
            </Link>
            <Link to="about">
            <li className="hover:text-orange-500">About Us</li>
            </Link>
            <Link to="/contact">
            <li className="hover:text-orange-500">Contact Us</li>
            </Link>
          </ul>
        </div>

        {
            side?<div className="absolute top-0 right-0 bg-orange-500 w-[200px] h-[90vh] rounded-bl-[100px] flex justify-center items-center z-10">
            <RxCross2 className=" size-6  cursor-pointer absolute top-5 right-3"  onClick={()=>setside(!side)} />
            <ul className="flex flex-col gap-5 text-[18px] cursor-pointer">
              <Link to='/'>
              <li className="hover:text-orange-200">Home</li>
              </Link>
              <Link to='/food'>
              <li className="hover:text-orange-200">Foods</li>
              </Link>
              <Link to='/about'>
              <li className="hover:text-orange-200">About Us</li>
              </Link>
              <Link to='/contact'>
              <li className="hover:text-orange-200">Contact Us</li>
              </Link>
            </ul>
          </div>:""
        }

        <div className="flex gap-4 cursor-pointer">
          <GiHamburgerMenu className="block size-6 sm:hidden" onClick={()=>setside(!side)} />
          <p className="flex gap-1">
          {count}
          <FaCartArrowDown className="size-6" />
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
