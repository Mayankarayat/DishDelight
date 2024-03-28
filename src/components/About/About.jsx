import React from "react";

const About = () => {
  return (
    <div className="my-5 w-[90%] mx-auto">
      <div>
        <h1 className="text-[30px] leading-8 my-3 sm:text-[35px]">
          Driving the force of{" "}
          <span className="text-orange-500">assortment</span>
        </h1>
        <p className=" text-[16px] sm:text-xl font-thin leading-6">
          For over a decade now, we’ve been empowering our customers in
          discovering new tastes and experiences across countries. By putting
          together meticulous information for our customers, we enable them to
          make an informed choice.
        </p>
      </div>

      <div className=" my-[20px] sm:mb-[50px] w-[100%] sm:flex sm:items-center gap-3 sm:gap-[50px] sm:flex-row flex-col">
        <div className= "w-[100%] sm:w-[50%]">
          <h1 className="text-[40px] sm:text-[55px] my-[20px] sm:leading-[60px]">Who are we?</h1>
          <div className="bg-orange-500 hidden sm:block sm:w-[110px] h-[4px] my-[10px] mb-[20px] rounded-md "></div>
          <p className="text-[17px] font-thin leading-6">
            Launched in 2010, Our technology platform connects customers,
            restaurant partners and delivery partners, serving their multiple
            needs. Customers use our platform to search and discover
            restaurants, read and write customer generated reviews and view and
            upload photos, order food delivery, book a table and make payments
            while dining-out at restaurants. On the other hand, we provide
            restaurant partners with industry-specific marketing tools which
            enable them to engage and acquire customers to grow their business
            while also providing a reliable and efficient last mile delivery
            service. We also operate a one-stop procurement solution, Hyperpure,
            which supplies high quality ingredients and kitchen products to
            restaurant partners. We also provide our delivery partners with
            transparent and flexible earning opportunities.
          </p>
        </div>

        <div className="w-[100%] sm:w-[50%] sm:mb-0   mb-[30px] flex">
            <img src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt="" className="w-[100%] h-auto rounded-lg"/>
        </div>
      </div>
    </div>
  );
};

export default About;
