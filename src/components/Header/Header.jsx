import React, { useContext, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { ContexFood  } from "../../FoodContex/FoodContex";

const Header = () => {

  const {count,side,setside}=useContext(ContexFood)

    

  return (
    <>
    <div className="sticky top-0 bg-white z-10">


      <div className="flex justify-between p-4 items-center border-b-2 sticky  sm:justify-around py-4">
        <div className="text-xl cursor-pointer">
          <Link to="/DishDelight/">
          Dish<span className="text-orange-500">Delight</span>
          </Link>
        </div>
        <div>
          <ul className="hidden gap-5 text-[18px] cursor-pointer sm:flex">
            <NavLink to="/DishDelight/">
            <li className="hover:text-orange-500 duration-300">Home</li>
            </NavLink>
            <NavLink to="/food">
            <li className="hover:text-orange-500 duration-300">Foods</li>
            </NavLink>
            <NavLink to="/about">
            <li className="hover:text-orange-500 duration-300">About Us</li>
            </NavLink>
            <NavLink to="/contact">
            <li className="hover:text-orange-500 duration-300">Contact Us</li>
            </NavLink>
          </ul>
        </div>

        <div className={`absolute right-0 ${side?"top-0":"top-[-1000px]"}  bg-gray-400 w-[200px] h-[90vh] rounded-bl-[100px] flex justify-center items-center z-10 transition-all duration-500`}>
            <RxCross2 className=" size-6  cursor-pointer absolute top-5 right-3"  onClick={()=>setside(!side)} />
            <ul className="flex flex-col gap-5 text-[20px] cursor-pointer text-black">
              <NavLink to='/DishDelight/'>
              <li className="hover:text-orange-500 duration-300">Home</li>
              </NavLink>
              <NavLink to='/food'>
              <li className="hover:text-orange-500 duration-300">Foods</li>
              </NavLink>
              <NavLink to='/about'>
              <li className="hover:text-orange-500 duration-300">About Us</li>
              </NavLink>
              <NavLink to='/contact'>
              <li className="hover:text-orange-500 duration-300">Contact Us</li>
              </NavLink>
            </ul>
          </div>

        <div className="flex gap-4 cursor-pointer">
          <GiHamburgerMenu className="block size-6 sm:hidden" onClick={()=>setside(!side)} />
          <p className="flex gap-1">
          {count}
          <NavLink to = '/cart'>
          <FaCartArrowDown className="size-6" />
          </NavLink>
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Header;
