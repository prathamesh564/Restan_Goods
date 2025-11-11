"use client";
import React from 'react';
import { useEffect,useState } from 'react'; 
import Offer from '@/components/Offer';
import Footer from '@/components/Footer';
import {useRouter} from "next/navigation";

 
function CartPage() {
  const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cartItems")) || [];

        setCartItems(items);
        const total = items.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
    }, []);
      
    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        const total = updatedCart.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
    };
    const router=useRouter();
     return(

    <div className="bg-amber-100 min-h-screen overflow-x-hidden dark:bg-black">
      <div className='bg-black md:h-[50px] md:w-full   flex md:flex-column md:flex-row  flex items-center dark:bg-gray-800'>
        <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg" className='h-[20px] mx-10 md:w-[150px] '/>
        <div className='hidden md:block rounded-[20px] bg-green-600 w-[100px] h-[50px] flex justify-center items-center font-bold text-white text-center  p-2 gap-7 ml-auto mr-10 cursor-pointer hover:bg-green-900 transition-all'> 
        Buy Now
      </div>
      </div>
     <div className='bg-yellow-900 md:h-[100px] md:w-full flex md:flex-column md:flex-row  flex justify-center items-center dark:bg-gray-600'>
    <button className=" hidden md:block  text-white font-bold ml-[40px] text-lg mx-20"
   onClick={(event)=>{
    router.push(`/home`);
   }}>Home</button>
    <button className=" hidden md:block  text-white font-bold ml-[40px] text-lg mx-20"
   onClick={(event)=>{
    router.push(`/about`);
   }}>About us</button>
      <button className=" hidden md:block  text-white font-bold ml-[40px] text-lg mx-20"
   onClick={(event)=>{
    router.push(`/cart`);
   }}>Chef</button>
       <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" className='h-[70px] md:w-[150px] md:mx-20'/>
      <button className=" hidden md:block  text-white font-bold ml-[40px] text-lg mx-20"
   onClick={(event)=>{
    router.push(`/cart`);
   }}>Cart </button>
      <div className='hidden md:block  text-white font-bold ml-[40px] text-lg mx-20'>Blog</div>
      <div className='hidden md:block  text-white font-bold ml-[40px] text-lg mx-20'>contact</div>
    \
     </div><div className="relative min-h-screen md:h-[600px] md:w-full">
  <img
    src="https://img.freepik.com/premium-photo/realistic-photo-blurred-restaurant-background-with-some-people-eating-chefs-waiters-working-high-resolution-superdetail-16k_967785-42409.jpg"
    alt="Background"
    className="md:w-full md:h-full object-cover rounded-[10px]"
  />
    <div style={{padding:"20px"}}>
      <center><h1 >Your Cart</h1></center>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id} style={{marginBottom:"10px"}}>
                        <img src={item.img} alt={item.name} style={{width:"100px",height:"100px"}}/>
                        <span style={{marginLeft:"10px"}}>{item.name} - ${item.price}</span>
                        <button 
                        onClick={() => removeFromCart(item.id)}
                        style={{marginLeft:"10px",padding:"5px",backgroundColor:"red",color:"white",border:"none",borderRadius:"5px"}}>
                          Remove
                        </button>
                    </li>
                ))}
            </ul>
            <h2>Total: ${totalPrice}</h2>
        </div>
       

      )}
     <button className=" dark:text-white justify-center items-center w-[350px] bg-green-700 font-bold"
   onClick={(event)=>{
      alert("You Record has been Saved Thanks for Your Valuable Time!");
    router.push(`/home`);
   }}>Home</button>

     <div>
     
    </div>
    <div className='p-10'></div>
    <Offer/>
    <div className='p-25'></div>
    <Footer/>
    </div>
    </div>
    </div>
    
     );
}
export default CartPage;