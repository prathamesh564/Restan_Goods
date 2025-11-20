"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chef from '@/components/Chef';
// import Footer from'@/components/Footer';
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
    
    <div className="text-white md:text-2xl p-5 font-[serif] font-sans"> 🏡 Home &#62; About Us</div>
    </div>
       <div className="flex flex-col items-center p-5"></div>



</div>
</div>
  </div>
  </div>


<div className="flex md:flex-row md-[10] h-[60%] w-full justify-around items-start mr-[10px]">
      <div className="flex flex-row w-[1/2}"></div>
       <div className="flex flex-row w-[1/2}"></div>
      <div className="min-h-[500px] md:h-[500px] md:w-[100%] md:mx-[10px] relative flex flex-col px-2  items-center bg-amber-100 dark:bg-amber-100 rounded-[50px] ">
         <div className="flex flex-row w-{1/2}">
      <div className="text-amber-800 text-2xl font-bold mx-[90px] p-5"> ------- OUR GLOBAL BRAND PARTNER -------
        </div>
     </div>
     <div className="flex flex-column  items-left flex p-10">
        <div className="flex flex-row  items-left"> <div className="flex flex-column  items-left flex">
        <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75" className='h-[200px] md:w-[300px] p-3  '/> 
      
     </div>
      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75" className='h-[200px] md:w-[300px] mx-[20px] p-5 '/>

      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75" className='h-[200px] md:w-[300px] p-5  '/>
        
         <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75" className='h-[200px] md:w-[300px] p-5  '/>
         <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75" className='h-[200px] md:w-[300px] p-5  '/>
        
        </div></div>
       </div>
         </div>
    <div className="flex md:flex-row  h-[60%] w-full  p-5">
    <div className="flex flex-row ">
       <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F6-full.jpg&w=3840&q=75" className='h-[500px] md:w-[500px]   '/> 
      
     <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1-full.jpg&w=3840&q=75" className='h-[500px] md:w-[500px]   '/> 
 <div className=" absolute bottom-[-100px] md:h-[450px] md:w-[700px] md:mx-[-50px] relative flex flex-col px-2   bg-white  ">
      
  <div className="flex flex-col">
    <div className="font-bold text-2xl text-amber-800 p-5">  About US --- &#62;</div>
        <div className=" text-4xl font-bold text-gray-500  mx-10">
We Invite You<br></br>
To Visit Our Restaurant</div>
        <div className=" text-1xl text-gray-500 p-4 mx-10">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio <br></br>Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you’ll have a hard time forgetting.

</div>
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
  
    
     <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F2.png&w=3840&q=75"
                    className="w-[200px] h-[150px] mx-[50px]  absolute top-[-80px]  mx-[500px] p-3 "
                  />
                   </div></div>
    </div>
     <Chef/>
     
<div className="md:p-20"></div>
     
 
       <div className='flex flex-row p-5 justify-center'>
  <iframe width="860" height="506" src="https://www.youtube.com/embed/F3zw1Gvn4Mk" title="Mr Fox Restaurant Promo Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

    <div className=" absolute top-[-100px] md:h-[450px] md:w-[700px] md:mx-[-50px] relative flex flex-col px-2   bg-white  ">
      
  <div className="flex flex-col">
    <div className="font-bold text-4xl p-10">  Opening Hours</div>
        <div className=" text-1xl text-gray-500  mx-10"> A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The <br></br>Patio Time Bar opens in the center.. </div>
        <div className='p-3 mx-10'></div>
        <div className='font-semibold text-2xl mx-10 p-1'>Sunday to Tuesday:  -----------------  10:00 - 09:00</div>
        <div className='font-semibold text-2xl mx-10 p-1'>Wednesday to Thursday:  ----------------- 11:30 - 10:30</div>
        <div className='font-semibold text-2xl mx-10 p-1'>Friday & Saturday:  -----------------  10:30 - 12:00</div>
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
  
     
     
     
     
     

<div className="md:p-20"></div>
<Footer/>

</div>
  


  )
  }