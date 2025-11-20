"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default function Home() {
 
const router=useRouter();

  return(
    <div className="bg-gray-200 min-h-screen overflow-x-hidden dark:bg-black">
        <div className='bg-[#f5c86b] md:h-[50px] md:w-full   flex md:flex-column md:flex-row  flex items-center '>
        <div className="text-1xl ml-[130px]"> Phone:+91 8265653623</div>
        <div className="text-1xl mx-[40px]"> Email id: mrxyz@gamil.com</div>
        <img
    src="https://th.bing.com/th/id/OIP.xZU2eaShw9o68_ShqRCFmAHaFP?w=274&h=194&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3"
    alt="Background"
    className="md:w-[30px] h-[30px]  ml-[650px] rounded-[50px]"
  />
        <div className="text-1xl font-bold mr-auto mx-[10px]">English &#62;</div>
      
            <img src = "https://www.bing.com/th/id/OIP.55DCXbXlKDgEBoZhKxpzLAHaHa?w=205&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.3&pid=3.1&rm=2" className = " h-8 w-8  mr-[10px] rounded-[5px]" alt = "fb"
                ></img>
                <img src = "https://assets1.chainstoreage.com/images/v/max_width_1440/2023-07/twitter-x-logo.png"
                  className = " h-8 w-8  mr-[10px] " alt = "tw"
                ></img>
                 <img src = "https://pngimg.com/uploads/youtube/youtube_PNG102349.png"  className = " h-8 w-12  mr-[10px]" alt = "yt"
                ></img>
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIZNwih6eXIffaQEDckh1GtVTsxxkkmMvo4keYRVLAg&s"
                  className = " h-8 w-8 rounded-[10px] mr-[10px]" alt = "l-in"
                ></img>
      </div>
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
    <div className="text-white md:text-5xl font-[serif] font-sans">Restaurant Chef</div>
    
    <div className="text-white md:text-2xl p-5 font-[serif] font-sans"> 🏡 Home &#62; Food Menu</div>
    </div>
       <div className="flex flex-col items-center p-5"></div>



</div>
</div>
  </div>
  </div>
    <div className="flex flex-col items-center p-5"></div>
        <div className="flex flex-row ">
    <div className="flex flex-col ml-20 ">
 <img
          src="https://th.bing.com/th/id/OIP.XFtqhIH4p9P-5mdfnCy0BAHaJQ?o=7&cb=ucfimgc2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          className="h-[600px] md:w-[500px]"
        />
        </div>
        <div className="flex absolute top-180 left-115 flex-col ml-[20] ">
<div className='bg-amber-800 w-[130px] h-[130px] '>
    <div className='text-amber-500 text-2xl font-bold p-5 text-center '>Menu</div>
        <div className='text-white text-1xl font-bold  text-center '>BreakFast</div>
</div>
        

   
        </div>
    <div className="flex flex-row ">


    <div className="flex flex-col justify-right">
        <div className="flex flex-row mr-10  ml-190  justify-right">
        <div className='flex flex-row p-1   w-[50px] h-[30px] rounded-md border-1 dark:border-white justify-center hover:text-white   hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-yellow-900 text-1xl'> Half</div>
        <div className='flex flex-row p-1  w-[50px] h-[30px] rounded-md border-1 dark:border-white justify-center hover:text-white   hover:bg-[#d2a679] transition-all mx-[0px] duration-500 text-yellow-900 text-1xl'> Full </div>
        </div>
        <div className='flex flex-row  mr-10 ml-[90px] '>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F1.jpg&w=640&q=75" className='h-[80px] w-[80px] rounded-full m-5'></img>
            <div className="flex flex-col justify-right p-5">
 <div className='text-amber-700 text-2xl font-bold text-center  '>Chicken Alfredo === &#62; </div>
        <div className='text-black text-1xl font-bold  text-left items-left  '>Ricotta / goat cheese / beetroot <br></br>Free Drinks</div>
</div>
 <div className="flex flex-col justify-right p-5 ml-63">
 <div className='text-amber-700 text-2xl font-bold text-center  '>$20 - $40</div>
     
</div>
</div>
   <div className='flex flex-row  mr-10 ml-[90px] '>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F2.jpg&w=640&q=75" className='h-[80px] w-[80px] rounded-full m-5'></img>
            <div className="flex flex-col justify-right p-5">
 <div className='text-amber-700 text-2xl font-bold text-center'>Fish Chips === &#62; </div>
        <div className='text-black text-1xl font-bold  text-left items-left  '>Atlantic / chips / salad / tartare <br></br>Free Drinks</div>
</div>
 <div className="flex flex-col justify-right p-10 ml-63">
 <div className='text-amber-700 text-2xl font-bold text-center  '>$36 - $70</div>
    
</div>
</div>   <div className='flex flex-row  mr-10 ml-[90px] '>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F4.jpg&w=640&q=75" className='h-[80px] w-[80px] rounded-full m-5'></img>
            <div className="flex flex-col justify-right p-5">
 <div className='text-amber-700 text-2xl font-bold text-center  '>Chicken Grill === &#62; </div>
        <div className='text-black text-1xl font-bold  text-left items-left  '>Ricotta / goat cheese / beetroot <br></br>Free Drinks</div>
</div>
 <div className="flex flex-col justify-right p-10 ml-61">
 <div className='text-amber-700 text-2xl font-bold text-center  '>$20 - $40</div>
        
</div>
</div>
<div className='flex flex-row  mr-10 ml-[90px] '>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F3.jpg&w=640&q=75" className='h-[80px] w-[80px] rounded-full m-5'></img>
            <div className="flex flex-col justify-right p-5">
 <div className='text-amber-700 text-2xl font-bold text-center  '>Ebony Fillet Steak === &#62; </div>
        <div className='text-black text-1xl font-bold  text-left items-left  '>Truffle mash / pepper sauce
 <br></br>Free Drinks</div>
</div>
 <div className="flex flex-col justify-right p-10 ml-51">
 <div className='text-amber-700 text-2xl font-bold text-center  '>$20 - $40</div>
        
</div>
</div>
</div>

    </div>
    </div>
       <div className="flex flex-row ">


    <div className="flex flex-col justify-right">
        <div className="flex flex-row mr-10  ml-190  justify-right">
        <div className='flex flex-row p-1   w-[50px] h-[30px] rounded-md border-1 dark:border-white justify-center hover:text-white   hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-yellow-900 text-1xl'> Half</div>
        <div className='flex flex-row p-1  w-[50px] h-[30px] rounded-md border-1 dark:border-white justify-center hover:text-white   hover:bg-[#d2a679] transition-all mx-[0px] duration-500 text-yellow-900 text-1xl'> Full </div>
        </div>
        <div className='flex flex-row  mr-10 ml-[90px] '>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F6.jpg&w=640&q=75" className='h-[80px] w-[80px] rounded-full m-5'></img>
            <div className="flex flex-col justify-right p-5">
 <div className='text-amber-700 text-2xl font-bold text-center  '>Brownies === &#62; </div>
        <div className='text-black text-1xl font-bold  text-left items-left  '>Ricotta / goat cheese / beetroot <br></br>Free Drinks</div>
</div>
 <div className="flex flex-col justify-right p-5 ml-63">
 <div className='text-amber-700 text-2xl font-bold text-center  '>$34 - $65</div>
     
</div>
</div>
   <div className='flex flex-row  mr-10 ml-[90px] '>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F8.jpg&w=640&q=75" className='h-[80px] w-[80px] rounded-full m-5'></img>
            <div className="flex flex-col justify-right p-5">
 <div className='text-amber-700 text-2xl font-bold text-center'>Cheesecakes === &#62; </div>
        <div className='text-black text-1xl font-bold  text-left items-left  '>Atlantic / chips / salad / tartare <br></br>Free Drinks</div>
</div>
 <div className="flex flex-col justify-right p-10 ml-63">
 <div className='text-amber-700 text-2xl font-bold text-center  '>$55 - $100</div>
    
</div>
</div>   <div className='flex flex-row  mr-10 ml-[90px] '>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F7.jpg&w=640&q=75" className='h-[80px] w-[80px] rounded-full m-5'></img>
            <div className="flex flex-col justify-right p-5">
 <div className='text-amber-700 text-2xl font-bold text-center  '>Muffins === &#62; </div>
        <div className='text-black text-1xl font-bold  text-left items-left  '>Ricotta / goat cheese / beetroot <br></br>Free Drinks</div>
</div>
 <div className="flex flex-col justify-right p-10 ml-61">
 <div className='text-amber-700 text-2xl font-bold text-center  '>$66 - $120</div>
        
</div>
</div>
<div className='flex flex-row  mr-10 ml-[90px] '>
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F5.jpg&w=640&q=75" className='h-[80px] w-[80px] rounded-full m-5'></img>
            <div className="flex flex-col justify-right p-5">
 <div className='text-amber-700 text-2xl font-bold text-center  '>CupCakes === &#62; </div>
        <div className='text-black text-1xl font-bold  text-left items-left  '>Truffle mash / pepper sauce
 <br></br>Free Drinks</div>
</div>
 <div className="flex flex-col justify-right p-10 ml-69">
 <div className='text-amber-700 text-2xl font-bold text-center  '>$20 - $40</div>
        
</div>
</div>
</div>
<div className="flex absolute top-320 right-165 flex-col ml-[20] ">
<div className='bg-amber-800 w-[130px] h-[130px] '>
    <div className='text-amber-500 text-2xl font-bold p-5 text-center '>Menu</div>
        <div className='text-white text-1xl font-bold  text-center '>Lunch</div>
</div>
        

   
        </div>
 <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ac/6a/86/caption.jpg?w=1800&h=1800&s=1"
          className="h-[600px] md:w-[500px]"
        />
    </div>
    </div>
      
 
  );
}