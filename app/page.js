"use client";
import React from 'react';
import Link from 'next/link';

import {useRouter} from "next/navigation";
import Footer from'@/components/Footer';
import Header from'@/components/Header';
import Chef from'@/components/Chef';  
import Blog from'@/components/Blog';
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
const router=useRouter();

  return(
    <div className="md:min-h-screen bg-gray-100 dark:bg-black">
   <Header/>
   <div className="relative md:min-h-screen bg-black/50 md:h-[600px] md:w-full">
       <div className="absolute inset-0 bg-black/30"></div>
  <img
    src="https://restan-nextjs.vercel.app/assets/img/banner/14.jpg"
    alt="Background"
    className="md:w-full h-full object-cover bg-black/50 rounded-[10px]"
  />
  <div className="absolute top-0 bg-black/10 left-0 w-full h-full  rounded-[80px]">
  <div className="flex md:flex-col p-5 flex-row h-full w-full items-left md:text-white mx-10">
    <div className="flex hidden md:block flex-row ">
      <div className='flex flex-row'>
      <div className="text-white  md:text-1xl md:mx-5 font-semibold">
        Phone:+91 8265653623

    </div>
     <div className="text-white  text-1xl md:mx-5 font-semibold">
       Email id: mrxyz@gamil.com

    </div>
    
      <div className="text-white hidden md:block text-1xl flex flex-row justify-left mx-80 font-semibold">
       Location: 175 10h Street, Office 375 Berlin, De 21562
</div>
    </div>
    </div>
    <div className="border-t border-gray-300 my-3"></div>

     <div className="absolute inset-0 md:rounded-[80px] flex md:items-center p-5 md:justify-center">
   <div className="flex flex-col items-center p-5">
    <div className="text-white md:text-6xl font-[ serif] font-sans">Best Restaurant</div>
       <div className="flex flex-col items-center p-5"></div>
    <div className='flex flex-col items-center justify-center md:w-[200px] md:h-[200px] rounded-full md:border-2  border-amber-100 dark:border-amber-100 hover:text-white p-5'>
  
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
           
      <div className="min-h-[500px] md:h-[600px] md:w-[850px] md:mx-[100px] relative flex flex-col px-2  mt-[-30px] items-center  bg-white rounded-[50px] ">
        
     <div className="flex md:flex-row w-{1/2}">
         <img src="https://play-lh.googleusercontent.com/8wLUlZ4RTW9MhdU5YrGKTilM-jPTC2Yc1g9hpbrP6dgv_EW1p3PpexuIIw8hTuVfTID0" className='h-[70px] md:w-[70px]  mx-5  p-[-20] rounded-full  '/>
      
        <div className="text-black text-3xl font-bold mx-[10px] p-5">Book A Table </div>
     </div>
      <input placeholder="Phone" 
  required={true} 
  className="bg-white p-5 my-3 border-2 border-gray-200 rounded-lg w-[90%]"
  onChange={(event)=>setEmail(event.target.value)}
  />


      <select
        required
        className="bg-white w-[90%] border-2 border-gray-200 rounded-lg text-gray-500 p-5 my-3"
        onChange={(event) => setTimeSlot(event.target.value)}
      >
        <option value="">Select a time slot</option>
        <option value="9-10">⏰ 9:00 AM – 10:00 AM</option>
        <option value="10-11">🕙 10:00 AM – 11:00 AM</option>
        <option value="1-2">🌞 1:00 PM – 2:00 PM</option>
        <option value="4-5">🌇 4:00 PM – 5:00 PM</option>
      </select>
 
<div className="flex flex-col w-[90%] bg-white border-2 border-gray-200 text-gray-500 rounded-lg p-5 my-3">
<label htmlFor="date">Date:</label>
  <input type="date" id="date" name="date" required></input>
  </div>
      <select
        required
        className="bg-white w-[90%] border-2 border-gray-200 rounded-lg text-gray-500 p-5 my-3"
        onChange={(event) => setTimeSlot(event.target.value)}
      >
        <option value="">Select No. of Person</option>
        <option value="1">1 Person</option>
        <option value="2">2 Person</option>
        <option value="3">3 Person</option>
        <option value="4">4 Person</option>
      </select>
 <div className='p-2'></div>
   <button className=" text-white  w-[51%] h-[50px] bg-yellow-900 rounded-lg font-bold"
   onClick={(event)=>{
      alert("You Record has been Saved Thanks for Your Valuable Time!");
    router.push(`/home`);
   }}>Book A Table</button>


     </div>
       <div className="flex flex-row w-[1/2}"></div>
      <div className="min-h-[500px] md:h-[500px] md:w-[95%] md:mx-[50px] relative flex flex-col px-2  items-center bg-white rounded-[50px] ">
         <div className="flex flex-row w-{1/2}">
         <img src="https://marketplace.canva.com/EAGK6XNcgJM/1/0/1600w/canva-orange-and-yellow-simple-street-food-logo-P8-5uoYzOgo.jpg" className='h-[70px] md:w-[100px] rounded-lg'/>
      
        <div className="text-black text-3xl font-bold mx-[10px] p-5">🔥Our Popular Dishes </div>
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
   <div className="flex flex-wrap  justify-center items-center gap-5 p-10">

  <div className="relative w-[210px] h-[300px] rounded-[20px] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F27.jpg&w=1920&q=75"
      alt="Burger"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-end mx-2 pb-6">
    <div className="text-[15px] font-semibold tracking-tight text-amber-200 font-sans">
  Sea Food
</div>
      <div className='pb-1'></div>
      <h2 className="text-white text-2xl font-bold drop-shadow-lg ">Salmon Fry</h2>
    </div>
  </div>


  <div className="relative w-[210px] h-[300px] rounded-[20px] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F26.jpg&w=1920&q=75"
      alt="Pasta"
      className="w-full h-full object-cover"
    />
      <div className="absolute inset-0 flex flex-col justify-end mx-2 pb-6">
    <div className="text-[15px] font-semibold tracking-tight text-amber-200 font-sans">
  Desserts
</div>
      <div className='pb-1'></div>
      <h2 className="text-white text-2xl font-bold drop-shadow-lg ">Cheesecakes</h2>
    </div>
  </div>
  <div className="relative w-[210px] h-[300px] rounded-[20px] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
    <img
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fmenu%2F25.jpg&w=1920&q=75"
      alt="Pasta"
      className="w-full h-full object-cover"
    />
      <div className="absolute inset-0 flex flex-col justify-end mx-2 pb-6">
    <div className="text-[15px] font-semibold tracking-tight text-amber-200 font-sans">
  Main Dishes
</div>
      <div className='pb-1'></div>
      <h2 className="text-white text-2xl font-bold drop-shadow-lg ">Chicken Alfredo</h2>
    </div>
  </div>
  </div>
</div>
</div>


<div className="flex flex-col  md:flex-row justify-center space-x-10 space-y-0 dark:bg-black items-center mt-[100px] mx-[100px]">


  <div className='flex flex-col hidden md:block items-left p-10 w-[1000px] h-[400px] rounded-md border-2  border-black dark:border-white  dark:text-white  transition-all duration-500'>
  <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75" className=' w-[150px] h-[150px] rounded-full mx-2'/>
    <div className='font-bold text-lg p-2 mt-2'>
      Quality Foods
    </div>
    <div className='md:text-left text-gray-500 p-4 md:px-4'>
      Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
      </div>
  </div>

  <div className='flex flex-col hidden md:block items-left  p-10 w-[1000px] h-[400px] rounded-md border-2 border-black dark:border-white dark:text-white transition-all duration-500'>
    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75" className=' w-[150px] h-[150px] rounded-lg mx-2'/>
      
    <div className='font-bold md:text-lg md:mt-2 md:p-2'>  
      Fast Delivery
    </div>
    <div className='text-left px-4 text-gray-500 p-2 px-2'>
      Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
    </div>
  </div>


  <div className='flex flex-col hidden md:block items-left p-10 w-[1000px] h-[400px] rounded-md border-2 border-black dark:border-white dark:text-white transition-all duration-500'>
    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75" className=' w-[150px] h-[150px] rounded-full mx-2'/>
    <div className='font-bold text-lg mt-2 p-2'>
      Delicious Recipes
    </div>
    <div className='text-left md:px-4 text-gray-500 md:p-4'>
      Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.</div>
    </div>
</div>



        
      <div className='p-5'></div>
    <div className=" flex flex-col md:flex-row justify-center md:h-[500px] rounded-[20px] md:items-center bg-[#f5c86b] p-1 md:mx-50">
   
      <div className="relative flex md:justify-center md:items-center md:mb-0 mr-12  md:p-5">
        <div className="flex flex-col">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75"
          alt="Main Dish"
          className="md:w-53 hidden md:block md:h-53 rounded-full"
        />
         <div className='p-5'></div><img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75"
          alt="Main Dish"
          className="md:w-50 hidden md:block md:h-50 rounded-full"
        />

        </div>
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75"
          alt="Main Dish"
          className="md:w-75 md:h-75px  rounded-full "
        /> 
        <div className="absolute bottom-20 right-4 bg-white rounded-full md:px-6 md:py-4 text-center shadow-md">
          <div className="text-gray-800 font-semibold">Save</div>
          <div className="text-2xl font-bold text-black">55%</div>
        </div>
     
</div>

      <div className="max-w-md text-center md:text-left">
        <h4 className="text-sm text-gray-700 tracking-wide mb-2">
          TODAY SPECIAL OFFER
        </h4>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-5">
          Explore Irresistible <br /> Promotions!
        </h1>    
        <p className="text-gray-700 md:mb-6 md:leading-relaxed">
          Contrasted dissimilar get joy you instrument out reasonably. Again
          keeps at no meant stuff. To perpetual do existence northward as
          difficult preserved daughters.
        </p>
        <button className="bg-amber-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-800 transition">
          Order Today
        </button>
      </div>     
      </div>
        <div className='flex flex-row justify-center items-center font-semibold text-3xl text-yellow-900 p-5'>------  Food Menu  -------</div>
    <div className='flex flex-row justify-center items-center text-5xl font-Arial p-3'>Our Specials Menu</div>
  
<div className='flex flex-col p-5'>
      </div>
<div className='flex flex-row p-4 md:items-center md:justify-center md:w-[750px] md:h-[90px] rounded-md border-1 border-black dark:border-white  md:mx-[450px] duration-500'>
  
    <div className='flex md:flex-row '>
<div className='flex md:flex-row p-5 md:items-center md:justify-center md:w-[200px] md:h-[70px]  border-black dark:border-white hover:text-white hover:bg-[#d2a679] transition-all md:mx-[10px] duration-500 text-2xl rounded-lg text-yellow-900 '>  Main dishes
    </div><div className='flex md:flex-row p-5 md:items-center md:justify-center md:w-[150px] md:h-[70px] rounded-md  dark:border-white  hover:text-white   hover:bg-[#d2a679] transition-all md:mx-[10px] duration-500 text-yellow-900 text-2xl'> Desserts
    </div><div className='flex hidden md:block md:flex-row p-5 md:items-center md:justify-center md:w-[150px] md:h-[70px] rounded-md  dark:border-white  hover:text-white hover:bg-[#d2a679] transition-all md:mx-[10px] duration-500 text-yellow-900 text-2xl'> Sea Food
    </div><div className='flex hidden md:block md:flex-row p-5 md:items-center md:justify-center md:w-[150px] md:h-[70px] rounded-md   dark:border-white hover:text-white hover:bg-[#d2a679] transition-all md:mx-[10px] duration-500 text-2xl text-yellow-900 '> Beverages
    </div>
    </div>
    </div>

<div className="md:max-w-[500px] mx-auto text-center rounded-[10px]">


      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-x-[520px] m-2 p-1 justify-items-center items-center min-h-[500px]  place-content-center"
        
      >
     {menu.map(item=>(
          <div key={item.id} className="border border-gray-300 md:m-[10px] p-0 md:w-[450px] rounded-[30px] bg-white">
           
            <img src={item.img} alt={item.name} className="md:w-full p-[1px] rounded-[20px] md:h-[300px] object-cover"/>
                <div className=" md:h-[70px] md:w-[350px] relative flex flex-col flex-row px-2  md:mt-[-40px] md:items-center md:justify-left  bg-white rounded-[20px] ">
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



        
       <div className=" min-h-[750px] flex flex-col md:flex-row justify-center md:h-[500px] md:w-[85%] rounded-[20px] items-center bg-black p-1 md:mx-35">
   
      <div className="relative flex justify-center items-center md:mb-0 md:mr-12 p-5">
     
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75"
          alt="Main Dish"
          className=" md:w-120 md:h-120 md:object-cover md:shadow-2xl"
        /> 
       
     
</div>

      <div className="max-w-[40%] text-center md:text-left">
         <div className=" md:text-5xl font-semibold text-white mb-15">
          Are you Ready to Start <br /> your online Order?
        </div>
     
     
        <div className="text-white mb-6 leading-relaxed">
          Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now


        </div>
        <div className="flex md:flex-row items-center">
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
      <div className='flex md:flex-row flex-col md:p-5 md:justify-center'>
<div className="w-full md:w-[860px] h-[506px] aspect-video mx-auto">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/F3zw1Gvn4Mk"
    title="Mr Fox Restaurant Promo Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>
 

    <div className=" absolute top-[-100px] md:h-[450px] md:w-[700px] md:mx-[-100px] relative flex flex-col px-2   bg-white  ">
      
  <div className="flex flex-col">
    <div className="font-bold text-4xl p-10">  Opening Hours</div>
        <div className=" text-1xl text-gray-500  mx-10"> A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The <br></br>Patio Time Bar opens in the center.. </div>
        <div className='p-3 mx-10'></div>
        <div className='font-semibold md:text-2xl md:mx-10 md:p-1'>Sunday to Tuesday:  -------------  10:00 - 09:00</div>
        <div className='font-semibold md:text-2xl md:mx-10 md:p-1'>Wednesday to Thursday:  ------------- 11:30 - 10:30</div>
        <div className='font-semibold md:text-2xl md:mx-10 md:p-1'>Friday & Saturday:  --------------  10:30 - 12:00</div>
        <div className='flex flex-row p-3'>
           <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
                    className="w-[50px] h-[50px] mx-[50px]  rounded-[75%] bg-yellow-600   p-3 "
                  />
                  <div className="">
                    <div className="text-1xl text-gray-500">Call Anytime</div>
                    <div className="text-2xl font-semibold">+964733-378901</div>
                  </div>
        </div>



  </div>
  </div>
  </div>
  <Chef/>
    <Blog/>


<div className='p-20'></div>
<Footer/>
</div>
  )
  }
  