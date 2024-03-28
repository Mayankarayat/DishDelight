import React from 'react'

const Delivery = () => {
  return (
    <>
    <div>
        <div className='my-10'>
            <h2 className='text-orange-500 text-center text-2xl sm:text-3xl'>Quick Delivery App</h2>  
            <div className='flex justify-center items-center w-[95%] md:w-[80vw] lg:w-[70vw] my-[30px] mx-auto'>
                <img src="https://kmphitech.com/wp-content/uploads/2021/04/Food-Ordering-Application.png" alt="" className='
                  w-[200px] sm:w-[400px]'/>
                <div className='flex flex-col gap-2 sm:gap-3'>
                <h3 className=' text-[15px] sm:text-2xl text-sky-600'>Get The App</h3>
                <p className=' text-[20px] leading-7 sm:text-[40px] sm:leading-9'>The Fastest Food Delivery in India</p>
                <button className='bg-black text-white w-fit px-3 py-1 rounded-md text-[14px] sm:px-6 sm:py-2 sm:rounded-xl sm:text-[18px]'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Delivery