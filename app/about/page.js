"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import Footer from'@/components/Footer';
export default function Home() {
 
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
  
       <div
          className="min-h-150"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1418379431/photo/luxury-paper-texture-cream-or-gold-seamless-repeating-pattern.jpg?b=1&s=170x170&k=20&c=kSEwLnFHl3vnX2vlpazp1mJKPbHxPFr0l-QNGowADh4=')"}} >
         
          <div className=" text-center ">
            <div className="text-yellow-900 test-md pt-20 items-center justify-center" >------ MASTER CHEFS ------</div>
            <div className="text-black text-5xl p-4 font-bold mb-6">
              Meet Our Special Chefs
            </div>
            <div className="flex flex-row mt-10 justify items-center gap-25 ml-50 ">
              <div className="flex flex-col ">
                <div>
                  <img
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/1-1.jpg"
                    className="w-[350px] h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-yellow-900 w-[310px]  h-18 mt-[-80px]  mx-[20px]">
                  <div className="text-center text-white text-md font-bold   p-2">
                    Alexander Petllo
                    <br />
                    Assistant Chef
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div>
                  <img
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/2-2.jpg"
                    className="w-[350px] h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-yellow-900 w-[310px] h-18 mx-[20px] mt-[-80px] ">
                  <div className="text-center text-white text-md font-bold p-2">
                    Mendia Juxef
                    <br />
                    Burger King
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00eW8B6XAtmNmhHEMVENWGe8XvwkZX7QXDi4q1oz6Lt_fJZixkuxbQcnXaKTq8NADf5Y&usqp=CAU"
                    className="w-[350px] h-auto   rounded-[100%] p-4 border border-gray-900 "
                  />
                </div>
                <div className="bg-yellow-900 w-[310px] mx-[20px] h-18 mt-[-80px]">
                  <div className="text-center text-white text-md font-bold  p-2">
                    Petro William
                    <br />
                    Main Chef
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
     
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