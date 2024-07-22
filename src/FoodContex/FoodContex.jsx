import {  createContext, useState } from "react";


export const ContexFood = createContext();

export const FoodProvider = ({children})=>{

    const [count, setcount] = useState(0)
    
    const [cart,setcart] = useState([])
    
    const [side, setside] = useState(false);

    const [search, setSearch] = useState("")

    const [fooddata,setfooddata] = useState([])


    const handleadd = (d)=>{

        const isexist = cart.find((item)=>item.id===d.id)

        if(isexist){
            setcart(cart.map((item)=>{
                if(item.id===d.id){
                    return {...item, quantity:item.quantity+1}
                    }
                    return item
                    }))
                    

        }else{
            setcount(count +1 );
            // console.log(d)
            setcart([...cart,{...d, quantity:1}])

        }
    }
    console.log(cart)

    const handleplus = (id)=>{
        setcart(cart.map((item)=>{

           if(item.id===id){
                    return {...item, quantity:item.quantity+1}
                    }
                    return item
                    }))
       }

    const handleminus = (id)=>{
        setcart(cart.map((item)=>{

           if(item.id===id){
            if(item.quantity>1){
                    return {...item, quantity:item.quantity-1}
            }
                    }
                    return item
                    }))
       }

    return(
        <ContexFood.Provider value={{handleadd,count,cart,setcart,setcount,side,setside,handleplus,handleminus,search,setSearch,fooddata,setfooddata}} >
            {children}
        </ContexFood.Provider>
    )
}