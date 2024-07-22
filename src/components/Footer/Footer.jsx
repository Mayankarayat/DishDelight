import React from "react";

const Footer = () => {
  return (
    <>
      <div className="absolute bottom-0 w-full ">
        <div className="bg-black w-[100%]">
          <div className="w-[80%] mx-auto py-[40px] flex justify-center flex-col sm:flex-row sm:justify-between flex-wrap gap-[20px]">
            <div className="text-white sm:mx-0 sm::w-[200px] w-fit mx-auto">
              <p className="text-center text-2xl text-white">
                Dish<span className="text-orange-500">Delight</span>
              </p>
              <p className="md:text-[15px] text-[14px] py-1">
                © 2024 Bundl Technologies Pvt. Ltd
              </p>
            </div>

            <div className="text-white md:leading-[30px] leading-[25px] w-fit">
              <p className="md:text-xl text-[18px]">Company</p>
              <li className=" md:text-[15px] text-[13px] list-none text-[#9A9B9E] font-thin cursor-pointer hover:underline w-fit">
                About
              </li>
              <li className=" md:text-[15px] text-[13px] list-none text-[#9A9B9E] font-thin cursor-pointer hover:underline w-fit">
                Careers
              </li>
              <li className=" md:text-[15px] text-[13px] list-none text-[#9A9B9E] font-thin cursor-pointer hover:underline w-fit">
                Team
              </li>
              <li className=" md:text-[15px] text-[13px] list-none text-[#9A9B9E] font-thin cursor-pointer hover:underline w-fit">
                Delight one
              </li>
            </div>

            <div className="text-white md:leading-[30px] leading-[25px] w-fit">
              <p className="md:text-xl text-[18px]">Contact Us</p>
              <li className=" md:text-[15px] text-[13px] list-none text-[#9A9B9E] font-thin cursor-pointer hover:underline w-fit">
                Help & Support
              </li>
              <li className=" md:text-[15px] text-[13px] list-none text-[#9A9B9E] font-thin cursor-pointer hover:underline w-fit">
                Partner with us
              </li>
              <li className=" md:text-[15px] text-[13px] list-none text-[#9A9B9E] font-thin cursor-pointer hover:underline w-fit">
                Ride with us
              </li>
            </div>

            <div className="text-white md:leading-[30px] leading-[25px] w-fit">
              <p className="md:text-xl text-[18px]">Legal</p>
              <li className=" md:text-[15px] text-[13px] list-none text-[#9A9B9E] font-thin cursor-pointer hover:underline w-fit">
                Terms & Conditions
              </li>
              <li className=" md:text-[15px] text-[13px] list-none text-[#9A9B9E] font-thin cursor-pointer hover:underline w-fit">
                Cookie Policy
              </li>
              <li className=" md:text-[15px] text-[13px] list-none text-[#9A9B9E] font-thin cursor-pointer hover:underline w-fit">
                Privacy Policy
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
