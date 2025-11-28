"use client";
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Offer from '@/components/Offer';
import Book from '@/components/Book';
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
        <div className='bg-[#f5c86b] md:h-[50px] md:w-full   flex md:flex-column md:flex-row  flex items-center '>
        <div className="md:text-1xl md:ml-[130px] ml-1"> Phone:+91 8265653623</div>
        <div className="md:text-1xl md:mx-[40px] mx-1"> Email id: mrxyz@gamil.com</div>
        <img
    src="https://th.bing.com/th/id/OIP.xZU2eaShw9o68_ShqRCFmAHaFP?w=274&h=194&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3"
    alt="Background"
    className="md:w-[30px] h-[30px] hidden md:block md:ml-[650px] ml-5 rounded-[50px]"
  />
        <div className="text-1xl font-bold mr-auto hidden md:block mx-[10px]">English &#62;</div>
      
            <img src = "https://www.bing.com/th/id/OIP.55DCXbXlKDgEBoZhKxpzLAHaHa?w=205&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.3&pid=3.1&rm=2" className = " h-8 w-8  mr-[10px] rounded-[5px]" alt = "fb"
                ></img>
                <img src = "https://assets1.chainstoreage.com/images/v/max_width_1440/2023-07/twitter-x-logo.png"
                  className = " h-8 w-8  mr-[10px] " alt = "tw"
                ></img>
                 <img src = "https://pngimg.com/uploads/youtube/youtube_PNG102349.png"  className = "hidden md:block h-8 w-12  mr-[10px]" alt = "yt"
                ></img>
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIZNwih6eXIffaQEDckh1GtVTsxxkkmMvo4keYRVLAg&s"
                  className = " h-8 w-8 rounded-[10px] hidden md:block mr-[10px]" alt = "l-in"
                ></img>
      </div>

    
        <div className="relative min-h-[25%] bg-black/50  md:w-full">
       <div className="absolute inset-0 bg-black/30"></div>
  <img
    src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
    alt="Background"
    className="md:w-full h-[550px] md:h-[600px] h-[50px]  bg-black/50 rounded-[10px]"
  />
        <Header />
  <div className="absolute top-0 bg-black/10 left-0 w-full h-full  rounded-[80px]">
   
  <div className="flex md:flex-col p-5 flex-row h-[25%] w-full items-left md:text-white mx-10">
    <div className="flex hidden md:block flex-row ">
     
    </div>


     <div className="absolute inset-0 md:rounded-[80px] flex md:items-center p-5 md:justify-center">
    
  <div className="flex flex-col items-left items-center ">
   
    <div className="text-white md:text-6xl text-2xl font-serif md:mt-1 mt-50">Restaurant Food Menu</div>
    
    <div className="text-white md:text-2xl text-1xl p-5 md:p-[50] items-center font-serif font-sans"> 🏡 Home &#62; food-menu</div>
    </div>
       <div className="flex flex-col items-center p-5"></div>



</div>
</div>
  </div>
  </div>

  <div className='flex flex-row justify-center items-center font-semibold font-serif md:text-3xl text-yellow-900 p-5'>&#60;-------&#60;&#60; Food Menu &#62;&#62;-------&#62;</div>
    <div className='flex flex-row justify-center  dark:text-white items-center text-2xl md:text-5xl font-serif p-3'>Our Specials Menu</div>
  
<div className='flex flex-col p-5'>
      </div>

<div className='flex flex-row p-4 md:items-center md:justify-center md:w-[750px] w-[300px] md:h-[90px] h-[80px] rounded-md border-1 border-black dark:border-white  md:mx-[350px] mx-[30px] mx-1 duration-500'>
  
    <div className='flex md:flex-row'>
<div className='flex md:flex-row md:p-5 p-0 md:items-center md:justify-center md:w-[200px] w-[100px] w-20 md:h-[70px] font-serif border-black dark:border-white hover:text-white hover:bg-[#d2a679] transition-all md:mx-[10px] mx-1 duration-500 md:text-2xl text-1xl rounded-lg  dark:text-white text-yellow-900  '>  Main dishes
    </div><div className='flex md:flex-row md:p-5 p-0 md:items-center md:justify-center md:w-[150px] w-20 md:h-[70px] font-serif rounded-md  dark:border-white  hover:text-white   hover:bg-[#d2a679] transition-all md:mx-[10px] mx-1 duration-500   dark:text-white text-yellow-900  md:text-2xl text-1xl'> Desserts
    </div><div className='flex md:flex-row md:p-5 p-0 md:items-center md:justify-center md:w-[150px] w-20 font-serif md:h-[70px] rounded-md  dark:border-white  hover:text-white hover:bg-[#d2a679] transition-all md:mx-[10px] mx-1 dark:text-white duration-500 text-yellow-900  md:text-2xl text-1xl'> Sea Food
    </div><div className='flex md:flex-row p-5 md:items-center md:justify-center md:w-[150px] w-20 font-serif md:h-[70px] rounded-md   dark:border-white hover:text-white hover:bg-[#d2a679] transition-all md:mx-[10px] mx-1 dark:text-white duration-500 text-2xl hidden md:block text-yellow-900 '> Beverages
    </div>
    </div>
    </div>
<div className="md:max-w-[500px] mx-auto text-center rounded-[10px]">


      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-x-[360px] m-2 p-1 justify-items-center items-center min-h-[450px]  place-content-center"
        
      >
     {menu.map(item=>(
          <div key={item.id} className="border border-gray-300 md:m-[10px] p-0 md:w-[350px] rounded-[30px] dark:bg-black bg-white">
           
            <img src={item.img} alt={item.name} className="md:w-full p-[1px] rounded-[20px] md:h-[300px] object-cover"/>
                <div className=" md:h-[70px] md:w-[300px] relative flex flex-col font-serif flex-row px-2  md:mt-[-40px] md:items-center md:justify-left dark:bg-black bg-white rounded-[20px] ">
                        <div className='text-1xl font-bold font-serif text-gray-500 dark:text-white mx-[15px]'>⭐{item.rating}</div>
            <div className='text-2xl font-bold text-amber-900 font-serif dark:text-amber-500 mx-[15px]'>{item.price}</div>
</div>
            <div className="font-bold text-2xl dark:text-white font-serif" >{item.name} </div>
           
            <div className="text-gray-500 text-1xl font-serif dark:text-white p-2">{item.desc}</div>
           

            <button 
            onClick={() => addToCart(item) }
           className="p-[10px] dark:text-white hover:bg-black w-[80%] hover:text-white border border-gray-200 rounded-[25px] cursor-pointer">
            🛒  Add to Cart
              
             
              </button> 
               <div className='p-2'></div>
             </div>
   
        
        ))}
 
</div>
   </div>
   <div className="p-30"></div>
<div className="relative min-h-[25%] flex md:flex-row flex-col md:w-full">
  <img
    src="https://restan-nextjs.vercel.app/assets/img/banner/9.jpg"
    className="absolute inset-0 w-full md:h-[600px] h-[900px]"
    alt=""
  />

  <div className="absolute inset-0 bg-black/40"></div>

 

  <div className="relative z-10 md:max-w-[40%] w-full md:text-center md:mt-20 mt-2 text-left p-10">
    <div className="md:text-7xl text-2xl font-serif font-semibold text-white md:mb-15 mb-6">
      30 Minutes Delivery!
    </div>

    <div className="text-white md:mb-6 leading-relaxed">
    A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.


    </div>

    <div className="flex md:flex-row items-center p-5">
    
      <button className="bg-[#B8860B] text-white hover:text-black font-semibold mx-[30px] px-6 py-3 rounded-lg hover:bg-white transition">
        Order Now
      </button>
    </div>
  </div>
 <div className="relative z-10 flex flex-row md:justify-center  items-center p-5 md:mr-5">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75"
      alt="Main Dish"
      className="md:w-120 md:h-130  md:shadow-2xl"
    />
  </div>
</div>
<div className="p-30"></div>
<Offer/>
<div className="p-30"></div>
<div className="relative min-h-[25%] flex md:flex-row flex-col md:w-full">
  <img
    src="https://restan-nextjs.vercel.app/assets/img/banner/2.jpg"
    className="absolute inset-0 w-full md:h-[600px] h-[400px] "
    alt=""
  />

  <div className="absolute inset-0 bg-black/40"></div>

 

  <div className="relative z-10 md:max-w-[40%] w-full md:text-center text-left p-5">
     <div className="md:text-2xl md:text-1xl 
      font-serif font-semibold text-white mx-0 md:mb-15 mb-6">
 Reservation &#62;&#62;------&#62;
    </div>
    <div className="md:text-5xl md:text-2xl text-1xl font-serif font-semibold text-white md:mb-15 mb-6">
Reservation Your Favorite Private Table
    </div>

    <div className="text-white md:mb-6 leading-relaxed">
    A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.</div>

    <div className="flex md:flex-row items-center p-5">
  
        <div className="text-white md:mb-6 md:text-2xl text-sm font-serif ml-10 leading-relaxed">
          Lunch Menu
30+ items
   </div>

<div className="text-white md:mb-6 mx-50 md:text-2xl text-sm font-serif leading-relaxed">
     Dinner Menu<br></br>
20+ items
</div>
    </div>
  </div>
 <div className="relative z-10 flex md:flex-row flex-col md:justify-center   items-center p-10 md:mr-15 mr-0">
<Book/>
  </div>
</div>

<div className="p-30"></div>
<Footer />

</div>
  )
  }