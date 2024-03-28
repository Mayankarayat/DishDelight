import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='flex w-[90%] m-auto justify-between my-[25px] sm:my-[40px] items-center gap-5 flex-col sm:flex-row'>
            <div className=' w-[100%] sm:w-[60%] flex flex-col gap-3'>
                <h1 className='text-[28px] sm:text-[40px]'>We Would Love to hear From You</h1>
                <p className='text-xl font-thin'>Fill out the form or write to us at info@Dish<span className='text-orange-500'>Delight</span>.com</p>
            </div>
            <div className='w-[100%] sm:w-[40%] bg-orange-500 p-5'>
                <div>
                        <form action="#" className='flex flex-col gap-3'>
                            <input type="text" name="name" placeholder="Name*" className='p-2 sm:px-2 sm:py-3 rounded-md  outline-none'/>
                            <input type="email" name="mail" placeholder="E-Mail*" className='p-2 sm:px-2 sm:py-3 rounded-md  outline-none'/>
                            <input type="number" name="number" placeholder="Phone*" className='p-2 sm:px-2 sm:py-3 rounded-md  outline-none'/>
                            {/* <input type='text' name="name" placeholder="Type Text*" className='px-2 py-3 rounded-md  outline-none'/> */}
                            <textarea name="text" cols="30" rows="7" placeholder='Type Text*' className='p-2 sm:px-2 sm:py-3 rounded-md  outline-none' ></textarea>
                            <input type="button" value="Submit Feedback" className='bg-slate-800 text-white rounded-md py-2 sm:py-4 text-lg sm:text-xl cursor-pointer'/>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact