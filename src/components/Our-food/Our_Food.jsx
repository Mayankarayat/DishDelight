import React, { useContext,useEffect,useState } from 'react'
import { ourfood } from '../Data/Data'
import { ContexFood } from '../../FoodContex/FoodContex'

const Our_Food = () => {

  const {handleadd,fooddata,setfooddata,search,setSearch} = useContext(ContexFood)



  useEffect(() => {
    setfooddata(ourfood)
  
  },[])

  return (
    <div className='w-[90%] m-auto my-10'>
      <div className='flex my-8 justify-between items-center gap-5'>
        <h1 className=" text-2xl sm:text-4xl text-orange-500 text-center">Our Food</h1>
        <div className='flex gap-1'>
        <input type="search" placeholder='Search here.....' className='bg-slate-200 outline-none text-sm sm:text-base py-1 sm:py-2 px-2  sm:px-3 rounded-md w-[200px] sm:w-[300px]' 
        onChange={(e)=>{setSearch(e.target.value)}}
        />
        </div>

      </div>
        <div className={`flex justify-center items-center flex-wrap gap-10`}>
        {fooddata.filter((item)=>item.title.toLowerCase().includes(search)||item.title.includes(search)).map((item)=>{
            return(
                <div key= {item.id} className='gap-1  w-[140px] h-[220px] sm:w-[180px] sm:h-[250px] flex flex-col sm:gap-2 items-center cursor-pointer'>
                    <img src={item.img} alt={item.title} className='w-[100%] h-[130px] sm:h-[140px] object-cover object-center' />
                    <p className='text-[15px] sm:text-[17px]'>{item.title}</p>
                    <p className='text-[12px] sm:text-[15px]'>Rs.{item.price}</p>
                    <button className="bg-[#D65B06] text-white text-[13px] px-2 py-[5px] w-full rounded-md sm:w-fit sm:text-[16px] sm:px-4 sm:py-1 hover:bg-[#F97316] duration-300 active:scale-[.8]" onClick={()=>handleadd(item)}>Add to Cart</button>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Our_Food