"use client";
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default function Blog() {
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
    <div className="text-white md:text-5xl font-[serif] font-sans">Blog Standard</div>
    
    <div className="text-white md:text-2xl p-5 font-[serif] font-sans"> 🏡 Home &#62; Blog-standard</div>
    </div>
       <div className="flex flex-col items-center p-5"></div>



</div>
</div>
  </div>
  </div>
   <div className='flex flex-row justify-center items-center  text-2xl text-yellow-900 p-5'>----- News & Blog -----</div>
    <div className='flex flex-row justify-center items-center text-4xl font-Arial p-1'>Our Latest News & Blog</div>
    <div className='flex flex-col justify-center items-center  md:text-lg p-10 mx-20'>
        <div className="flex flex-col">
        <div className="flex flex-col mx-10">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75" className='h-[700px] w-[1200px] rounded-[20px]'/>
         <div className=" md:h-[400px] md:w-[1060px] relative flex flex-row px-2  mt-[-40px]  mx-[50px]  bg-white  ">
                      <div className=" md:h-[130px] md:w-[130px] relative flex flex-row px-2 ml-[800px] mx-[50px] mt-[-50px] bg-[#d2a679]  ">       
                         <div className="flex flex-col">
                        <div className='text-5xl text-white font-bold mx-[16px] p-3 '>24</div>
                        <div className='text-3xl text-white mx-[25px] '>NOV</div>
        </div>
        </div>  
        <div className="flex flex-col  absolute left-[1] p-15 ">
             <div className='text-lg text-gray-600  mt-2 mx-2 p-2'> 🗓 12 August 2024 👾 John Baus</div>
        
            <div className='text-3xl text-black font-marcallus font-semibold p-2  '>Picked up a Brussels burger Sprouts with ham</div>
              <div className='text-lg text-gray-600  mt-2 mx-2 p-2'> Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now

</div>
            <div className='text-2xl text-amber-700  mt-2 p-1'>READ MORE &#62;</div>
        
          
       </div>
      </div>
           </div>
<div className="flex flex-col mx-10 p-10" ></div>
            <div className="flex flex-col mx-10">
            
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75" className='h-[700px] w-[1200px] rounded-[20px]'/>
         <div className=" md:h-[400px] md:w-[1060px] relative flex flex-row px-2 mx-[50px] mt-[-40px]    bg-white  ">
                      <div className=" md:h-[130px] md:w-[130px] relative flex flex-row px-2 ml-[800px] mx-[50px] mt-[-50px] bg-[#d2a679]  ">
                        
                        <div className="flex flex-col"><div className='text-4xl text-white font-bold mx-[16px] p-3 '>18</div>
                                   <div className='text-2xl text-white mx-[25px] '>NOV</div>
                                   </div>
        </div>
        <div className="flex flex-col  absolute left-[1] p-15 ">
             <div className='text-lg text-gray-600  mt-2 mx-2 p-2'> 🗓 13 August 2024 👾 Admin </div>
        
            <div className='text-3xl text-black font-marcallus font-semibold p-2  '>This prefabricated passive house highly</div>
              <div className='text-lg text-gray-600  mt-2 mx-2 p-2'> Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now

</div>
            <div className='text-2xl text-amber-700  mt-2 p-1'>READ MORE &#62; </div>
        
          
       </div>
        </div>
        </div>
        <div className='p-10'></div>
         <div className="flex flex-col mx-10">
            
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75" className='h-[700px] w-[1200px] rounded-[20px]'/>
         <div className=" md:h-[400px] md:w-[1060px] relative flex flex-row px-2 mx-[50px] mt-[-40px]    bg-white  ">
                      <div className=" md:h-[130px] md:w-[130px] relative flex flex-row px-2 ml-[800px] mx-[50px] mt-[-50px] bg-[#d2a679]  ">
                        
                        <div className="flex flex-col"><div className='text-4xl text-white font-bold mx-[16px] p-3 '>18</div>
                                   <div className='text-2xl text-white mx-[25px] '>NOV</div>
                                   </div>
        </div>
        <div className="flex flex-col  absolute left-[1] p-15 ">
             <div className='text-lg text-gray-600  mt-2 mx-2 p-2'> 🗓 14 August 2024 👾 John Baus </div>
        
            <div className='text-3xl text-black font-marcallus font-semibold p-2  '>Overcame breeding point concerns has.</div>
              <div className='text-lg text-gray-600  mt-2 mx-2 p-2'> Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now

</div>
            <div className='text-2xl text-amber-700  mt-2 p-1'>READ MORE &#62; </div>
        
          
       </div>
        </div>
        </div>
</div>
        <div className="p-10"></div>
    <div className='flex flex-row border-2 h-[100px] p-4 w-[450px]'>
<div className='flex flex-col p-5 items-center justify-center w-[200px] h-[70px]  border-black border-1 dark:border-white hover:text-white hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-2xl rounded-lg text-yellow-900 '>  1
    </div><div className='flex flex-row p-5 items-center justify-center w-[150px] h-[70px] rounded-md border-1 dark:border-white  hover:text-white   hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-yellow-900 text-2xl'> 2
    </div><div className='flex flex-row p-5 items-center justify-center w-[150px] h-[70px] rounded-md border-1 dark:border-white  hover:text-white hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-yellow-900 text-2xl'> 3
    </div><div className='flex flex-col p-5 items-center justify-center w-[150px] h-[70px] rounded-md  border-1 dark:border-white hover:text-white hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-2xl text-yellow-900 '> 4
    </div><div className='flex flex-col p-5 items-center justify-center w-[150px] h-[70px] rounded-md  border-1 dark:border-white hover:text-white hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-2xl text-yellow-900 '> &#62;
    </div>
        </div>
        </div>
      <div className="p-20"></div>
        <Footer />
    </div>
  );
}