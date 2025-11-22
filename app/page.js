"use client";
import React from 'react';
import Link from 'next/link';
import { useState} from "react";
import {useRouter} from "next/navigation";
import Footer from'@/components/Footer';
import Header from'@/components/Header';
import Chef from'@/components/Chef';  
import Hour from'@/components/Hour';
import Base from'@/components/Base';
import Blog from'@/components/Blog';
import Offer from'@/components/Offer';
export default function Home() {
      const menu= [
    {id:1,name:"Braised Chicken Legs",price:"$34",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F1.jpg&w=1920&q=75",rating:"5(3.5K)",desc:"4 chicken legs * Chili sauce * Soft Drinks"},
    {id:2,name:"Bone Steak",price:"$18",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F2.jpg&w=1920&q=75",rating:"4.6(5.7K)",desc:"4 chicken legs * Chili sauce * Soft Drinks"},
    {id:3,name:"Fish Tacos with Chipotle Crema",price:"$12",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F3.jpg&w=1920&q=75",rating:"4.8(5.5K)",desc:"4 chicken legs * Chili sauce * Soft Drinks"},
    {id:4,name:"Broken Lasagna & Parmesan",price:"$22",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F4.jpg&w=1920&q=75",rating:"4.9(5.7K)",desc:"4 chicken legs * Chili sauce * Soft Drinks"},
    {id:5,name:"Seared Scallops with Butter",price:"$34",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F5.jpg&w=1920&q=75",rating:"4.2(3.1K)",desc:"4 chicken legs * Chili sauce * Soft Drinks"},
    {id:6,name:"Double-Stack Mushroom",price:"$36",img:"https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F6.jpg&w=1920&q=75",rating:"4.8(6.7K)",desc:"4 chicken legs * Chili sauce * Soft Drinks"},

    ];  const [open, setOpen] = React.useState(false);
  const addToCart = (item) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Added to cart: " + item.name);
  };  
  const [email, setphone] = useState("");
 const [timeSlot, setTimeSlot] = useState("");
 const [date, setdate] = useState("");
const [person, setPerson] = useState("");

const router=useRouter();

  return(
    <div className="md:min-h-screen dark:bg-black bg-gray-100 overflow-y-hidden overflow-x-hidden  dark:bg-black">
      <div className='bg-black md:h-[50px] md:w-full   flex md:flex-column md:flex-row  flex items-center bg-black'>
        <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg" className='h-[20px]  md:mx-10 mx-0 md:w-[150px] w-[200px] '/>
        <div className=' rounded-[20px] bg-green-600 w-[100px] md:h-[40px] flex justify-center items-center font-bold text-white text-center  p-3 gap-7 ml-auto mr-10 cursor-pointer hover:bg-green-900 transition-all'> 
        Buy Now
      </div>
      </div>
   <div className="relative md:min-h-screen md:h-[600px] md:w-full">
     
  <img
    src="https://restan-nextjs.vercel.app/assets/img/banner/14.jpg"
    alt="Background"
    className="md:w-full md:h-full h-[400px] object-cover  rounded-[10px]"
  />
    <div className="absolute top-0 bg-black/40 left-0 w-full h-full  rounded-[80px]">
         
  
  <div className="absolute md:top-10 top-1  left-0 md:w-full md:h-full rounded-[80px] ">

     <div className='flex md:flex-row flex-col'>
      <div className="text-white hidden md:block  md:text-1xl md:mx-5 md:font-semibold">
        Phone:+91 8265653623

    </div>
     <div className="text-white hidden md:block   md:text-1xl md:mx-5 font-semibold">
       Email id: mrxyz@gamil.com

    </div>
    
      <div className="text-white hidden md:block text-1xl flex flex-row justify-left mx-80 font-semibold">
       Location: 175 10h Street, Office 375 Berlin, De 21562
  </div>
    </div>   
    <div className="border-t hidden md:block border-gray-300 my-3"></div>
<Header/>
 
  </div>

     

  
 
  <div className="flex md:flex-col p-5 flex-row h-full w-full items-left md:text-white mx-10">
    <div className="flex hidden md:block flex-row "></div>
     <div className="absolute inset-0 md:rounded-[80px] flex md:items-center p-5 md:justify-center">
   <div className="flex flex-col justify-center p-10">
      <div className="flex flex-col justify-center p-10"></div>
    <div className="text-white md:text-6xl text-2xl font-serif ">Best Restaurant</div>
       <div className="flex flex-col justify-center p-5"></div>
    <div className='flex flex-col items-center justify-center md:w-[200px] md:h-[200px] mx-[90px] rounded-full md:border-2  border-amber-100 dark:border-amber-100 hover:text-white p-5'>
  
    <div className="hidden md:block curve-text   ">
     <svg width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <path id="curve" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
  </defs>
  <text fontSize="20" fill="white">
    <textPath xlinkHref="#curve">
      Best Food - Since-1965
    </textPath>
  </text>
</svg>

</div>

</div>


</div>
</div>
  </div>
  </div>
  </div>
      <div className='p-5'></div>
      
<div className="flex md:flex-row flex-col md-[10] h-[60%] w-full justify-around items-start mr-[10px]">
     
      <div className="flex flex-row w-[1/2}"></div>
       
           <div className="flex flex-column"></div>
           
      <div className="min-h-[500px] md:h-[600px] md:w-[850px] md:mx-[100px] relative flex flex-col px-2  mt-[-30px] items-center  dark:bg-black border-1 dark:border-gray-500  bg-gray-200 rounded-[50px] ">
        
     <div className="flex md:flex-row w-{1/2}">
         <img src="https://play-lh.googleusercontent.com/8wLUlZ4RTW9MhdU5YrGKTilM-jPTC2Yc1g9hpbrP6dgv_EW1p3PpexuIIw8hTuVfTID0" className='h-[70px] md:w-[70px]  mx-5  p-[-20] rounded-full  '/>
      
        <div className="dark:text-white text-3xl  font-serif font-semibold mx-[10px] p-5">Book A Table </div>
     </div>
      <input placeholder="Phone" 
  required={true} 
  className="bg-white p-5 my-3 border-1 border-yellow-400 border-2 border-gray-200 rounded-lg w-[90%]"
  onChange={(event)=>setphone(event.target.value)}
  />


      <select
        required
        className="bg-white w-[90%] border-1 border-yellow-400 border-2 border-gray-200 rounded-lg text-gray-500 p-5 my-3"
        onChange={(event) => setTimeSlot(event.target.value)}
      >
        <option value="">Select a time slot</option>
        <option value="9-10">⏰ 9:00 AM – 10:00 AM</option>
        <option value="10-11">🕙 10:00 AM – 11:00 AM</option>
        <option value="1-2">🌞 1:00 PM – 2:00 PM</option>
        <option value="4-5">🌇 4:00 PM – 5:00 PM</option>
      </select>
 
<div className="flex flex-col w-[90%] border-1 border-yellow-400 bg-white border-2 border-gray-200 text-gray-500 rounded-lg p-5 my-3">
<label htmlFor="date" onChange={(event) => setdate(event.target.value)} >Date:</label>
  <input type="date" id="date" name="date" required></input>
  </div>
      <select
        required
        className="bg-white w-[90%] border-1 border-yellow-400 border-2 border-gray-200 rounded-lg text-gray-500 p-5 my-3"
        onChange={(event) => setPerson(event.target.value)}
      >
        <option value="">Select No. of Person</option>
        <option value="1">1 Person</option>
        <option value="2">2 Person</option>
        <option value="3">3 Person</option>
        <option value="4">4 Person</option>
      </select >
 <div className='p-2'></div>
   <button className=" text-white border-1 border-yellow-400 w-[51%] h-[50px] bg-[#B8860B] rounded-lg font-bold"
   onClick={(event)=>{
      alert("You Record has been Saved Thanks for Your Valuable Time!");
        console.log("Book A Table");
       console.log("Phone Number:", email);
      console.log("Time Slot:", timeSlot);
      console.log("Date:", date);
      console.log("No. of Person:",person); 
    router.push(`/home`);
   }}>Book A Table</button>


     </div>
  
      <div className="min-h-[500px] md:h-[500px] md:w-[95%] md:mx-[50px] relative flex flex-col px-2  items-center bg-white dark:bg-black rounded-[50px] ">
         <div className="flex flex-row w-{1/2}">
         <img src="https://marketplace.canva.com/EAGK6XNcgJM/1/0/1600w/canva-orange-and-yellow-simple-street-food-logo-P8-5uoYzOgo.jpg" className='hidden md:block h-[70px] md:w-[100px] rounded-lg'/>
      
        <div className="text-black md:text-3xl text-2xl dark:text-white font-bold font-serif mx-[10px] p-5">🔥Our Popular Dishes </div>
         <div className='hidden md:block rounded-full bg-yellow-900 w-[50px] h-[50px] flex justify-center items-center font-bold text-white  text-sm gap-7 ml-10 mt-8'>
        <div className="text-2xl text-white p-2 mx-2">
  &#60;
</div>

      </div> <div className='hidden md:block rounded-full bg-yellow-900 w-[50px] h-[50px] flex justify-center items-center font-bold text-white  text-sm gap-7 ml-10 mt-8'>
      <div className="text-2xl text-white p-2 mx-2">
  &#62;
</div>

      </div>
     </div>
   <div className="flex flex-wrap  justify-center items-center gap-4 p-10">

  <div className="relative w-[180px] h-[300px] rounded-[20px] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F27.jpg&w=1920&q=75"
      alt="Burger"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-end mx-2 pb-6">
    <div className="text-[15px] font-semibold font-serif tracking-tight text-amber-200 font-sans">
  Sea Food
</div>
      <div className='pb-1'></div>
      <h2 className="text-white text-2xl font-bold font-serif drop-shadow-lg ">Salmon Fry</h2>
    </div>
  </div>


  <div className="relative w-[180px] h-[300px] rounded-[20px] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=1920&q=75"
      alt="Pasta"
      className="w-full h-full object-cover"
    />
      <div className="absolute inset-0 flex flex-col justify-end mx-2 pb-6">
    <div className="text-[15px] font-semibold font-serif tracking-tight text-amber-200 font-sans">
  Desserts
</div>
      <div className='pb-1'></div>
      <h2 className="text-white text-2xl font-bold font-serif drop-shadow-lg ">Cheesecakes</h2>
    </div>
  </div>
  <div className="relative w-[180px] h-[300px] rounded-[20px] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F25.jpg&w=1920&q=75"
      alt="Pasta"
      className="w-full h-full object-cover"
    />
      <div className="absolute inset-0 flex flex-col justify-end mx-2 pb-6">
    <div className="text-[15px] font-semibold font-serif tracking-tight text-amber-200 font-sans">
  Main Dishes
</div>
      <div className='pb-1'></div>
      <h2 className="text-white text-1xl font-bold font-serif drop-shadow-lg ">Chicken Alfredo</h2>
    </div>
  </div>
  </div>
</div>
</div>
<Base/>
<div className='p-5'></div>
   <Offer/>
   <div className='p-5'></div>
        <div className='flex flex-row justify-center items-center font-semibold font-serif md:text-3xl text-yellow-900 p-5'>&#60;-------&#60;&#60; Food Menu &#62;&#62;-------&#62;</div>
    <div className='flex flex-row justify-center  dark:text-white items-center text-2xl md:text-5xl font-serif p-3'>Our Specials Menu</div>
  
<div className='flex flex-col p-5'>
      </div>
<div className='flex flex-row p-4 md:items-center md:justify-center md:w-[750px] md:h-[90px] rounded-md border-1 border-black dark:border-white  md:mx-[350px] mx-1 duration-500'>
  
    <div className='flex md:flex-row'>
<div className='flex md:flex-row p-5 md:items-center md:justify-center md:w-[200px] w-20 md:h-[70px] font-serif border-black hidden md:block dark:border-white hover:text-white hover:bg-[#d2a679] transition-all md:mx-[10px] mx-[-50] duration-500 text-2xl rounded-lg  dark:text-white text-yellow-900  '>  Main dishes
    </div><div className='flex md:flex-row p-5 md:items-center md:justify-center md:w-[150px] w-20 md:h-[70px] font-serif rounded-md  dark:border-white  hover:text-white   hover:bg-[#d2a679] transition-all md:mx-[10px] mx-1 duration-500   dark:text-white text-yellow-900 text-2xl'> Desserts
    </div><div className='flex md:flex-row p-5 md:items-center md:justify-center md:w-[150px] w-20 font-serif md:h-[70px] rounded-md  dark:border-white  hover:text-white hover:bg-[#d2a679] transition-all md:mx-[10px] mx-10 dark:text-white duration-500 text-yellow-900 text-2xl'> Sea Food
    </div><div className='flex md:flex-row p-5 md:items-center md:justify-center md:w-[150px] w-20 font-serif md:h-[70px] rounded-md   dark:border-white hover:text-white hover:bg-[#d2a679] transition-all md:mx-[10px] mx-1 dark:text-white duration-500 text-2xl hidden md:block text-yellow-900 '> Beverages
    </div>
    </div>
    </div>

<div className="md:max-w-[500px] mx-auto text-center rounded-[10px]">


      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-x-[480px] m-2 p-1 justify-items-center items-center min-h-[500px]  place-content-center"
        
      >
     {menu.map(item=>(
          <div key={item.id} className="border border-gray-300 md:m-[10px] p-0 md:w-[450px] rounded-[30px] dark:bg-black bg-white">
           
            <img src={item.img} alt={item.name} className="md:w-full p-[1px] rounded-[20px] md:h-[300px] object-cover"/>
                <div className=" md:h-[70px] md:w-[350px] relative flex flex-col font-serif flex-row px-2  md:mt-[-40px] md:items-center md:justify-left dark:bg-black bg-white rounded-[20px] ">
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



        
       <div className=" min-h-[750px] flex flex-col md:flex-row md:justify-center justify-left md:h-[500px] md:w-[85%] rounded-[20px] items-center bg-black p-1 md:mx-35 ">
   
      <div className="relative flex md:justify-center justify-left items-center md:mb-0 md:mr-12  p-5">
     
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75"
          alt="Main Dish"
          className=" md:w-120 md:h-120 md:object-cover md:shadow-2xl"
        /> 
       
     
</div>

      <div className="md:max-w-[40%] w-full md:text-center text-left ">
         <div className=" md:text-5xl text-2xl font-serif font-semibold  text-white md:mb-15 mb-6">
          Are you Ready to Start <br /> your online Order?
        </div>
     
     
        <div className="text-white md:mb-6  leading-relaxed">
          Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now


        </div>
        <div className="flex md:flex-row md:items-center md:p-5 p-5 items-center">
          <button className="hover:bg-white border-2 border-white hover:text-black text-white font-semibold px-6 py-3 rounded-full transition">
          App Store
        </button>
        <button className="bg-[#f5c86b] text-white hover:text-black font-semibold mx-[30px] px-6 py-3 rounded-full hover:bg-white transition">
         Play Store
        </button>
        </div>
      </div>     
      </div>
      <div className="p-20">  </div>
    <Hour/>
 
<img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=3840&q=75" className=" hidden md:block absolute md:ml-[1050px]  md:w-[300px] md:h-[200px] rounded-[50%] md:mt-[-170px]  "/>

 
  <Chef/>
    <Blog/>

<button className=" text-white  md:w-[80px] md:h-[80px] md:ml-[1300px] ml-[20px] bg-gray-400 rounded-full font-bold"
   onClick={(event)=>{
     scrollTo({ top: 0, behavior: 'smooth' });
   }}><img src="https://wallpapercave.com/wp/wp11853200.jpg" className=" items-center justify-center w-[80px] h-[80px] rounded-full"/></button>
<div className='md:p-20 p-5'></div>
<Footer/>
</div>
  )
  }
   