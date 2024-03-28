import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Hero = () => {
  const images = [
    {
      url: "https://img.freepik.com/free-photo/steamy-slice-pizza-with-stringy-cheese-fresh-toppings-is-lifted-high_91128-4668.jpg?t=st=1711596834~exp=1711600434~hmac=1c60035b853581ebf84ba515955e76ce6a0343b1ac22de311a1aac97b30d8cae&w=740",
    },
    {
      url: "https://img.freepik.com/free-photo/front-view-sweet-bakery-arrangement-with-copy-space_23-2148654059.jpg?t=st=1711603841~exp=1711607441~hmac=91fb4a22c75032acc5518429c6ad23b7a799b76013317bd1663d8c2299a635f9&w=740",
    },
    {
      url: "https://img.freepik.com/free-photo/forkful-steaming-spaghetti-with-shiny-noodles-hint-tomato-sauce_157027-4214.jpg?t=st=1711597048~exp=1711600648~hmac=02f9cfa69080f22935876bd12f5db0b4ec922a48ce01968d7bd0dec20ec3e7a6&w=740",
    },
  ];

  const [slider, Setslider] = useState(0);

  useEffect(() => {
    const slideinterval = setInterval(() => {
      Setslider(slider == images.length - 1 ? 0 : slider + 1);
    }, 3000);
    return () => {
      clearInterval(slideinterval);
    };
  }, [slider]);

  return (
    <>
      <div className="my-[20px] w-[100%] mx-auto flex justify-around items-center">
        <div className="sm:w-[90vw] w-[100vw] h-auto sm:h-[95vh] sm:rounded-2xl relative z-[-10]">
          <div className="absolute top-0 sm:w-[90vw] w-[100vw] h-full sm:h-[95vh] sm:rounded-2xl opacity-[.5] bg-black"></div>
          <FaChevronLeft
            onClick={() => {
              Setslider(slider == 0 ? images.length - 1 : slider - 1);
            }}
            className="cursor-pointer size-[20px] sm:size-[30px] absolute top-[50%] left-1 invert"
          />
          <img
            src={images[slider].url}
            alt=""
            className="w-[100%] h-[100%] object-cover object-centre sm:rounded-2xl"
          />
          <p className="absolute top-[50%] w-full text-center text-white font-semibold text-[15px] sm:text-3xl">Taste the Joy, Experience the Delight</p>
          <FaChevronRight
            onClick={() => {
              Setslider(slider == images.length - 1 ? 0 : slider + 1);
            }}
            className="cursor-pointer size-[20px] sm:size-[30px] absolute top-[50%] right-1 invert"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
