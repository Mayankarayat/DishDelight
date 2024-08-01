import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { review } from "../Data/Data";
import Food from "../Food/Food";
import { FullStar } from "../../Icons/FullStar";
import { HalfStar } from "../../Icons/HalfStar";

const Review = () => {
  const original = 0;
  const remain = 0;

  const rating = () => {
    review.map((item) => {
      original = item.rating;
      remain = 5 - item.rating;
    });
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 648,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" w-[80%] m-auto my-5">
      <h1 className="text-3xl text-orange-500">Testimonials</h1>
      <div className="my-4">
        <Slider {...settings} className="gap-2">
          {review.map((item) => {
            const rating = (rate) => {
              if (rate == 5) {
                return (
                  <>
                    <FullStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                    <FullStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                    <FullStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                    <FullStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                    <FullStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                  </>
                );
              } else if (rate == 4) {
                return (
                  <>
                   <FullStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                    <FullStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                    <FullStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                    <FullStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                   <HalfStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                  </>
                );
              } else if (rate == 3) {
                return (
                  <>
                    <FullStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                    <FullStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                    <FullStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                   <HalfStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                   <HalfStar className=" w-[18px] h-[18px] sm:w-[15px]  sm:h-[15px] md:h-[1.3rem] md:w-[1.3rem]"/>
                  </>
                );
              }
            };
            return (
              <div key={item.id} id="review" className="bg-orange-100 px-3 rounded-xl   h-[380px] lg:h-[320px]">
                <div>
                  <div className="flex flex-col justify-center items-center my-3 gap-3 sm:gap-4">
                    <div>
                    <img
                      src={item.img}
                      className=" w-[100px]  h-[100px] md:w-[120px] md:h-[120px] object-cover rounded-full"
                    />
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                    <h1 className="text-center text-lg sm:text-base md:text-xl">{item.name}</h1>
                    <p className="text-center text-sm sm:text-[12px] opacity-50 md:text-sm">{item.text}</p>
                    <div className="flex list-none gap-[2px] justify-center">
                      {rating(item.rating)}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
