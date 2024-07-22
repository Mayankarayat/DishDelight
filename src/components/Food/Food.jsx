import React, { useContext } from "react";
import { data } from "../Data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ContexFood } from "../../FoodContex/FoodContex";

const Food = () => {
  const {handleadd} = useContext(ContexFood)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 648,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          }
        ]
      };
  return (
    <div className=" w-[90%] sm:w-[80vw] m-auto my-[50px]">
      <h1 className=" text-2xl sm:text-3xl my-2 text-orange-500">
        What's On Your Mind?
      </h1>
      <div>
      <Slider {...settings} >
        {data.map((d) => {
          return (
            <>
              <div key={d.id}>
                <div>
                  <div className="flex flex-col justify-center items-center my-3 gap-[2px] sm:gap-1">
                    <img
                      src={d.img}
                      alt=""
                      className=" w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] rounded-full"
                    />
                    <p className="text-[15px] sm:text-xl">{d.title}</p>
                    <p className="sm:text-[18px] text-[14px]" >RS.{d.price}</p>
                    <button className="bg-[#D65B06] text-white text-[12px] px-2 py-[5px] rounded-md sm:text-[16px] sm:px-2 sm:py-1 hover:bg-[#F97316] duration-300 active:scale-[.8]" onClick={() => handleadd(d) }>Add to Cart</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
      </div>
    </div>
  );
};

export default Food;
