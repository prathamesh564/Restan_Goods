"use client";
import React from 'react';
import { useEffect,useState } from 'react'; 
import Offer from '@/components/Offer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {useRouter} from "next/navigation";

 
function CartPage() {
  const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


useEffect(() => {
  const savedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  setCartItems(savedItems);
 const total = savedItems.reduce(
    (sum,item) => sum+(item.price||0),0
  );
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

    <div className="bg-gray-200 min-h-screen overflow-x-hidden dark:bg-black">
      <Header/>
       <div className="relative min-h-[25%] bg-black/50  md:w-full">
       <div className="absolute inset-0 bg-black/30"></div>
  <img
    src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
    alt="Background"
    className="md:w-full h-[550px]  bg-black/50 rounded-[10px]"
  />
  <div className="absolute top-0 bg-black/10 left-0 w-full h-full  rounded-[80px]">
  <div className="flex md:flex-col p-5 flex-row h-[25%] w-full items-left md:text-white mx-10">
    <div className="flex hidden md:block flex-row ">
     
    </div>


     <div className="absolute inset-0 md:rounded-[80px] flex md:items-center p-5 md:justify-center">
  <div className="flex flex-col items-center ">
    <div className="text-white md:text-5xl font-[serif] font-sans">Cart Page</div>
    
    <div className="text-white md:text-2xl p-5 font-[serif] font-sans"> 🏡 Home &#62; Cart</div>
    </div>
       <div className="flex flex-col items-center p-5"></div>



</div>
</div>
  </div>
  </div>
  <div className="p-10"></div>
   <div className='bg-gray-300 md:h-[100px] mx-[70px] md:w-[85%] flex md:flex-column md:flex-row  justify-center items-center'>
         <div className='hidden md:block  dark:text-white font-bold ml-[40px] text-lg md:mx-20'>Remove</div>
      <div className='hidden md:block  dark:text-white font-bold ml-[40px] text-lg md:mx-20'>Thumbnail</div>
           <div className='hidden md:block  dark:text-white font-bold ml-[40px] text-lg md:mx-20'>Product</div>
      <div className='hidden md:block  dark:text-white font-bold ml-[40px] text-lg md:mx-20'>Price</div>
           <div className='hidden md:block  dark:text-white font-bold ml-[40px] text-lg md:mx-20'>Quantity</div>
      <div className='hidden md:block  dark:text-white font-bold ml-[40px] text-lg md:mx-20'>Total</div>
   </div>
  <div className="relative min-h-[25%] w-full py-6">
  <div className="px-5 md:px-10">
    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Your Cart</h1>

    {cartItems.length === 0 ? (
      <p className="text-center text-gray-500">Your cart is empty.</p>
    ) : (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="space-y-4">
          {cartItems.map((item,index) => (
            <div
                    key={`${item.id}-${index}`} 
              className="flex items-center justify-between bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >  
              <div className="flex items-center space-x-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <span className="text-lg font-medium text-gray-800">
                  {item.name}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-semibold">{item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-xl font-semibold text-right mt-6">
          Total: <span className="text-green-600">${totalPrice}</span>
        </div>
      </div>
    )}
 
  <div className='p-10'></div>
   
     <button className=" dark:text-white mx-[650px] justify-center items-center w-[250px] rounded-lg h-[70px] bg-gray-500 font-bold"
   onClick={(event)=>{
      alert("You Record has been Saved Thanks for Your Valuable Time!");
    router.push(`/home`);
   }}>Home</button>

     <div>
        <div className='p-10'></div>
     
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