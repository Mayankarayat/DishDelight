import React, { useContext, useState, useEffect } from "react";
import { ContexFood } from "../FoodContex/FoodContex";
import { Add } from "../Icons/Add";
import { Minus } from "../Icons/Minus";
import { Remove } from "../Icons/Remove";
import { Tick } from "../Icons/Tick";

const Cart = () => {
  const {count, cart, setcart, handleplus, handleminus,setcount } = useContext(ContexFood);

  const [MRP, setMRP] = useState(0);
  const [delivery, setdelivery] = useState(0);
  const [dis, setdis] = useState(0);
  const [total, settotal] = useState(0);
  const [order,setorder] = useState(false)

  const handleorder = ()=>{
    setorder(!order)
    const isplaced=setTimeout(() => {
      setorder(false)
    }, 3000);
    console.log("Order Placed")
    return ()=>clearTimeout(isplaced)
  }

  const handlemrp = () => {
    let totalmrp = 0;
    let deliverycharge = 0;
    let discount = 0;
    let total = 0 ;
    cart.map((item) => {
      totalmrp += item.price * item.quantity;
    });
    deliverycharge = 0.1 * totalmrp;
    discount = 0.05 * totalmrp;
    total = totalmrp+deliverycharge-discount;
    setMRP(parseFloat(totalmrp).toFixed(2));
    setdelivery(parseFloat(deliverycharge).toFixed(2));
    setdis(parseFloat(discount).toFixed(2));
    settotal(parseFloat(total).toFixed(2));
  };

  useEffect(() => {
    handlemrp();
  });

  const handleremove=(id)=>{
    setcart(cart.filter((item)=>item.id!==id));
    setcount(count-1)
  }


  return (
    <>
      <div className="w-[90%] lg:w-[80%] m-auto flex flex-col sm:flex-row gap-5 my-5">
        <div className="w-full sm:w-[65%] lg:w-[70%]">
          {cart.length == 0 ? (
            <h1 className="absolute top-[30%] left-[50%] translate-x-[-50%] traslate-y-[-50%] text-4xl text-center my-3 w-[100%] text-orange-500">
              Your Cart is Empty!
            </h1>
          ) : 
          
          (
            cart.map((item) => {
              return (
                <div
                key={item.id}
                className=" bg-[#f1f1f1] rounded-md py-2 px-4 my-2 flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center w-[100%] text-black">
                    <p className="w-[20%] text-center text-[14px] sm:text-base">Item</p>
                    <p className="w-[30%] sm:w-[20%] text-center text-[14px] sm:text-base">Detail</p>
                    <p className="w-[20%] text-center text-[14px] sm:text-base">Quantity</p>
                    <p className="w-[20%] text-center text-[14px] sm:text-base">Total</p>
                    <p className=" w-[5%] text-end cursor-pointer"><Remove className=" m-auto w-[16px]" onClick={()=>handleremove(item.id)}/></p>
                  </div>
                  <div className="flex items-center justify-between">
                  <div className="aspect-square object-cover w-[20%] h-[85px] flex items-center justify-center">
                    <img
                      src={item.img}
                      alt=""
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full"
                    />
                  </div>
                  <div className="text-center w-[30%] sm:w-[20%]">
                    <p className="text-[15px] md:text-base">{item.title}</p>
                    <p className="text-[12px] md:text-sm">₹{item.price}</p>
                  </div>
                  <div className="flex items-center flex-col w-[20%]">
                    <div>
                      {/* <h1 className="text-lg ">Quantity</h1> */}
                    </div>
                    <div className="flex gap-1 sm:gap-2">
                      <Add
                        className="cursor-pointer w-[14px]"
                        onClick={() => handleplus(item.id)}
                      />
                      <p className="text-sm md:text-base">{item.quantity}</p>
                      <Minus
                        className="cursor-pointer w-[14px]"
                        onClick={() => handleminus(item.id)}
                      />
                    </div>
                  </div>
                  <div className="text-center w-[20%]">
                    {/* <h1 className="text-lg text-orange-500">Total</h1> */}
                    <p className="text-sm">₹{item.price * item.quantity}</p>
                  </div>
                  <div className="w-[5%]">
                  
                  </div>
                  </div>
                </div>
              );
            })
          )
          }
        </div>
        <div className="w-[70%] sm:w-[35%] lg:w-[30%] h-fit">
        {
          cart.length!=0
          ?<div className="w-[100%] h-fit bg-[#f1f1f1] px-3 py-2 my-2 rounded-lg">
          <h1 className="text-[13px] md:text-sm text-center my-3 font-sans text-black">
            PRICE DETAILS (
            {cart.length > 1 ? cart.length + " Items" : cart.length + " Item"})
          </h1>
          <div className="flex items-center justify-between text-neutral-600 my-1 text-sm md:text-[15px] lg:text-base">
            <p>Total MRP</p>
            <p>₹{MRP}</p>
          </div>
          <div className="flex items-center justify-between text-neutral-600 my-1 text-sm md:text-[15px] lg:text-base">
            <p>Delivery Charges</p>
            <p>₹{delivery}</p>
          </div>
          <div className="flex items-center justify-between text-neutral-600  my-1 border-b-2 pb-2 border-slate-500 text-sm md:text-[15px] lg:text-base">
            <p>Discount on MRP</p>
            <p>₹{dis}</p>
          </div>
          <div className="flex items-center justify-between my-2 text-black text-[15px] md:text-base">
            <h1>Total Amount</h1>
            <p>₹{total}</p>
          </div>
        </div>:""

        }
        {
          cart.length!=0?<button className="bg-orange-500 text-white py-2 w-full rounded-lg text-base sm:text-lg hover:bg-[#F9162A] duration-300 " onClick={handleorder}>Place Order</button>:""
        }
        
        </div>
        
      </div>

      <div className={`w-max sm:w-fit flex absolute ${order?"top-[10%] sm:top-[19%]":"top-[-50%]"}  left-[50%] translate-x-[-50%] translate-y-[-50%] bg-orange-500 items-center py-2 px-3 gap-2 rounded-lg transition-all duration-500`}>
            <h1 className="  text-white text-base sm:text-xl ">Your Order has been Placed</h1>
            <Tick/>
            </div>


        

    </>
  );
};

export default Cart;
