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
        const totalPrice = updatedCart.reduce((sum, item) => sum + (item.price), 0);
        setTotalPrice(totalPrice);
    };
    const router=useRouter();
     return(

    <div className="bg-gray-200 min-h-screen overflow-x-hidden dark:bg-black">
           <div className='bg-[#f5c86b] md:h-[50px] md:w-full   flex md:flex-column md:flex-row  flex items-center '>
        <div className="text-1xl md:ml-[130px] ml-0"> Phone:+91 8265653623</div>
        <div className="text-1xl md:mx-[40px] mx-0"> Email id: mrxyz@gamil.com</div>
        <img
    src="https://th.bing.com/th/id/OIP.xZU2eaShw9o68_ShqRCFmAHaFP?w=274&h=194&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3"
    alt="Background"
    className="md:w-[30px] h-[30px]  md:ml-[650px] hidden md:block ml-0 rounded-[50px]"
  />
        <div className="text-1xl hidden md:block font-bold mr-auto mr-0 mx-[10px]">English &#62;</div>
            <img src = "https://www.bing.com/th/id/OIP.55DCXbXlKDgEBoZhKxpzLAHaHa?w=205&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.3&pid=3.1&rm=2" className = " h-8 w-8  mr-[10px] rounded-[5px]" alt = "fb"
                ></img>
                <img src = "https://assets1.chainstoreage.com/images/v/max_width_1440/2023-07/twitter-x-logo.png"
                  className = " h-8 w-8  mr-[10px] " alt = "tw"
                ></img>
                 <img src = "https://pngimg.com/uploads/youtube/youtube_PNG102349.png"  className = " hidden md:block h-8 w-12  mr-[10px]" alt = "yt"
                ></img>
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIZNwih6eXIffaQEDckh1GtVTsxxkkmMvo4keYRVLAg&s"
                  className = " h-8 w-8  hidden md:block rounded-[10px] mr-[10px]" alt = "l-in"
                ></img>
      </div>
    
       <div className="relative min-h-[25%] bg-black/50  md:w-full">
       <div className="absolute inset-0 bg-black/30"></div>
  <img
    src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
    alt="Background"
    className="md:w-full h-[550px]  bg-black/50 rounded-[10px]"
  />
    <Header/>
  <div className="absolute top-0 bg-black/10 left-0 w-full h-full  rounded-[80px]">
  <div className="flex md:flex-col p-5 flex-row h-[25%] w-full items-left md:text-white mx-10">
    <div className="flex hidden md:block flex-row ">
     
    </div>


     <div className="absolute inset-0 md:rounded-[80px] flex md:items-center p-5 md:justify-center">
  <div className="flex flex-col items-center ">
    <div className="text-white md:text-5xl text-3xl md:mt-1 mt-50 md:ml-0 ml-15 font-serif font-sans">Cart Page</div>
    
    <div className="text-white md:text-2xl p-6 font-serif md:ml-0 ml-15  font-sans"> 🏡 Home &#62; Cart</div>
    </div>
       <div className="flex flex-col items-center p-5"></div>



</div>
</div>
  </div>
  </div>
  <div className="p-10"></div>
   <div className='bg-gray-300 md:h-[100px] mx-[70px] md:w-[90%] flex md:flex-column md:flex-row  justify-center items-center'>
         <div className='hidden md:block  dark:text-black font-bold ml-[40px] text-lg md:mx-20'>Remove</div>
      <div className='hidden md:block  dark:text-black font-bold ml-[40px] text-lg md:mx-20'>Thumbnail</div>
           <div className='hidden md:block  dark:text-black font-bold ml-[40px] text-lg md:mx-20'>Product</div>
      <div className='hidden md:block  dark:text-black font-bold ml-[40px] text-lg md:mx-20'>Price</div>
           <div className='hidden md:block  dark:text-black font-bold ml-[40px] text-lg md:mx-20'>Quantity</div>
      <div className='hidden md:block  dark:text-black font-bold ml-[40px] text-lg md:mx-20'>Total</div>
   </div>
  <div className="relative min-h-[25%] w-full py-6">
  <div className="px-5 md:px-10">
    <h1 className="text-4xl font-bold text-center mb-6 font-serif dark:text-gray-100">Your Cart</h1>

    {cartItems.length === 0 ? (
      <p className="text-center dark:text-gray-200 text-gray-500 font-serif">Your cart is empty.</p>
    ) : (
      <div className="dark:bg-black border-1 dark:border-white bg-white rounded-2xl shadow-md p-6">
        <div className="space-y-4">
          {cartItems.map((item,index) => (
            <div
                    key={`${item.id}-${index}`} 
              className="flex items-center dark:bg-black border-1 dark:border-white justify-between bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >  
              <div className="flex items-center space-x-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <span className="md:text-lg text-1xl font-medium dark:text-white text-gray-800">
                  {item.name}
                </span>
              </div>
              <div className='flex md:flex-row flex-col md:mt-0 mt-20'>

              <div className="flex md:items-center space-x-0 md:space-x-10">
                <span className="dark:text-amber-500 text-gray-700 font-semibold">{item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white md:px-4 px-1 md:py-2 py-1 rounded-lg transition"
                >
                  Remove
                </button>
                </div>
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
   
     <button className=" dark:text-white md:mx-[570px] mx-10 justify-center items-center md:w-[250px] w-[200px] rounded-lg md:h-[70px] h-[50px] dark:bg-amber-300 bg-gray-500 font-bold"
   onClick={(event)=>{
      alert("You Record has been Saved Thanks for Your Valuable Time!");
    router.push(`/home`);
   }}>Home</button>

     <div>
        <div className='p-10'></div>
     
    </div>
    <div className='p-10'></div>
    <Offer/>
    <div className='md:p-25 p-0'></div>
    <Footer/>
    </div>
    </div>
    </div>
    
     );
}
export default CartPage;