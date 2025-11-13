"use client";
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Offer from '@/components/Offer';
import React from 'react';

export default function Blog() {
    const menu= [
     {id:1,name:"Pizza Slice",price:"$34",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F1.jpg&w=1920&q=75",rating:"5(3.5K)",desc:"Cheese, Ham & Pineapple"},
     {id:2,name:"Cheese Burger",price:"$18",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F2.jpg&w=1920&q=75",rating:"4.6(5.7K)",desc:"Cheese, Ham & Pineapple"},
     {id:3,name:"Chicken Masala",price:"$12",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75",rating:"4.8(5.5K)",desc:"Cheese, Ham & Pineapple"},
     {id:4,name:"Vegetable Roll",price:"$22",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F4.jpg&w=1920&q=75",rating:"4.9(5.7K)",desc:"Cheese, Ham & Pineapple"},
     {id:5,name:"Salmon Steak",price:"$34",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F17.jpg&w=1920&q=75",rating:"4.2(3.1K)",desc:"Cheese, Ham & Pineapple"},
     {id:6,name:"Fries McDonald's",price:"$36",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F18.jpg&w=1920&q=75",rating:"4.8(6.7K)",desc:"Cheese, Ham & Pineapple"},
  {id:7,name:"Chocolate chip",price:"$36",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F19.jpg&w=1920&q=75",rating:"4.8(6.7K)",desc:"Cheese, Ham & Pineapple"},
  {id:8,name:"Meatballs Pasta",price:"$36",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F20.jpg&w=1920&q=75",rating:"4.8(6.7K)",desc:"Cheese, Ham & Pineapple"},
 
     ];  const [open, setOpen] = React.useState(false);
   const addToCart = (item) => {
     let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
     cartItems.push(item);
     localStorage.setItem("cartItems", JSON.stringify(cartItems));
     alert("Added to cart: " + item.name);
   };
    const router = useRouter();
  return (
    <div className="bg-gray-200 min-h-screen overflow-x-hidden dark:bg-black">
        <Header />
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
    <div className="text-white md:text-5xl font-[serif] font-sans">Restaurant Food Menu</div>
    
    <div className="text-white md:text-2xl p-5 font-[serif] font-sans"> 🏡 Home &#62; food-menu</div>
    </div>
       <div className="flex flex-col items-center p-5"></div>



</div>
</div>
  </div>
  </div>
    <div className='flex flex-row justify-center items-center font-semibold text-3xl text-yellow-900 p-5'>------  Food Menu  -------</div>
    <div className='flex flex-row justify-center items-center text-5xl font-Arial p-3'>Our Specials Menu</div>
  
<div className='flex flex-col p-5'>
      </div>
<div className='flex flex-col p-4 items-center justify-center w-[750px] h-[90px] rounded-md border-1 border-black dark:border-white  mx-[450px] duration-500'>
  
    <div className='flex flex-row'>
<div className='flex flex-col p-5 items-center justify-center w-[200px] h-[70px]  border-black dark:border-white hover:text-white hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-2xl rounded-lg text-yellow-900 '>  Main dishes
    </div><div className='flex flex-row p-5 items-center justify-center w-[150px] h-[70px] rounded-md  dark:border-white  hover:text-white   hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-yellow-900 text-2xl'> Desserts
    </div><div className='flex flex-row p-5 items-center justify-center w-[150px] h-[70px] rounded-md  dark:border-white  hover:text-white hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-yellow-900 text-2xl'> Sea Food
    </div><div className='flex flex-col p-5 items-center justify-center w-[150px] h-[70px] rounded-md   dark:border-white hover:text-white hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-2xl text-yellow-900 '> Beverages
    </div>
    </div>
    </div>

<div className="max-w-[500px] mx-auto text-center rounded-[10px]">


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          
          gap: "5px", 
          margin:"10px",
          justifyItems: "center",
          alignItems: "center",
          padding:"50px",
          justifyContent:"center",
          minHeight:"500px",
          placeContent:"center",
        
           
        }}
      >
     {menu.map(item=>(
          <div key={item.id} className="border border-gray-300 m-[10px] p-0 w-[400px] rounded-[30px] bg-white">
           
            <img src={item.img} alt={item.name} className="w-full p-[1px] rounded-[20px] h-[300px] object-cover"/>
                <div className=" md:h-[70px] md:w-[350px] relative flex flex-row px-2  mt-[-40px] items-center justify-left  bg-white rounded-[20px] ">
                        <div className='text-1xl font-bold text-gray-500 mx-[15px]'>⭐{item.rating}</div>
            <div className='text-2xl font-bold text-amber-900 mx-[15px]'>{item.price}</div>
</div>
            <div className="font-bold text-2xl" >{item.name} </div>
           
            <div className="text-gray-500 text-1xl p-2">{item.desc}</div>
           

            <button 
            onClick={() => addToCart(item) }
           className="p-[10px] hover:bg-black w-[80%] hover:text-white border border-gray-200 rounded-[25px] cursor-pointer">
            🛒  Add to Cart
              
             
              </button> 
               <div className='p-2'></div>
             </div>
   
        
        ))}
 
</div>
   </div>
<Offer/>
<div className="p-20"></div>
<Footer />
  </div>
  )
  }