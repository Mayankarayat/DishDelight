import React, { useContext,useEffect,useState } from 'react'
import { ourfood } from '../Data/Data'
import { ContexFood } from '../../FoodContex/FoodContex'

const Our_Food = () => {

  const {handleadd} = useContext(ContexFood)

  const [search, setSearch] = useState("")

  const [fooddata,setfooddata] = useState([])

  const [searchlist,setssearchlist] = useState([])


  const handlesearch = ()=>{

    console.log(search)
    const searchitem = fooddata.find((item)=>{
      if(item.title.toLowerCase() == search.toLowerCase()){
        return item
      }
    })

    if(search==""){
      setssearchlist([])
    }else{
      setssearchlist([searchitem])
    }
  
}

  useEffect(() => {
    setfooddata(ourfood)
  
  },[])

  return (
    <div className='w-[90%] m-auto my-10'>
      <div className='flex my-8 justify-center items-center gap-5'>
        <h1 className=" text-2xl sm:text-4xl text-orange-500 text-center">Our Food</h1>
        <div className='flex gap-1'>
        <input type="search" placeholder='Search here.....' className='bg-slate-200 outline-none py-1 px-3 rounded-md' 
        onChange={(e)=>{setSearch(e.target.value)}}
        />
        <button className='bg-orange-500 py-1 px-3 text-white rounded-md' onClick={handlesearch}>Search</button>
        </div>

      </div>
        <div className={`${search==""? "flex": "hidden"} justify-center items-center flex-wrap gap-10`}>
        {fooddata.map((item)=>{
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

        <div className={`${searchlist==""? "hidden": "flex"} justify-center items-center flex-wrap gap-10`}>
        {searchlist.map((item)=>{
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