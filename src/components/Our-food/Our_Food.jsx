import React from 'react'
import { ourfood } from '../Data/Data'

const Our_Food = () => {
  return (
    <div className='w-[90%] m-auto my-10'>
        <h1 className=" text-2xl sm:text-4xl my-8 text-orange-500 text-center">Our Food</h1>
        <div className='flex justify-center items-center flex-wrap gap-10'>
        {ourfood.map((item)=>{
            return(
                <div key= {item.id} className='gap-1  w-[140px] h-[220px] sm:w-[180px] sm:h-[250px] flex flex-col sm:gap-2 items-center cursor-pointer'>
                    <img src={item.img} alt={item.title} className='w-[100%] h-[130px] sm:h-[140px] object-cover object-center' />
                    <p className='text-[15px] sm:text-[17px]'>{item.title}</p>
                    <p className='text-[12px] sm:text-[15px]'>Rs.{item.price}</p>
                    <button className="bg-orange-500 text-white text-[13px] px-2 py-[5px] w-full rounded-md sm:w-fit sm:text-[16px] sm:px-4 sm:py-1">Add to Cart</button>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Our_Food