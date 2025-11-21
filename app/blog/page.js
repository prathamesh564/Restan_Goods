"use client";
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Offer from"@/components/Offer";
export default function Blog() {
  const router = useRouter();
  return (
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
       <div className="text-white md:text-5xl text-2xl md:mt-1 mt-50 md:ml-0 ml-12 font-serif font-sans">Blog Page</div>
       
       <div className="text-white md:text-2xl p-6 font-serif md:ml-0 ml-10  font-sans"> 🏡 Home &#62; Blog</div>
       </div>
          <div className="flex flex-col items-center p-5"></div>
   
   
   
   </div>
   </div>
     </div>
     </div>
   <div className='flex flex-row justify-center items-center  md:text-2xl text-1xl dark:text-white text-yellow-900 p-5'>&#60;-------&#60;&#60; News & Blog  &#62;&#62;-------&#62;</div>
    <div className='flex flex-row justify-center items-center md:text-4xl text-1xl dark:text-white font-Arial p-1'>Our Latest News & Blog</div>
    <div className='flex flex-col md:justify-center justify-left items-center  md:text-lg p-10 md:mx-20 mx-10'>
        <div className="flex flex-col">
        <div className="flex flex-col mx-10">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75" className='md:h-[700px] h-[250px] md:w-[1200px] w-[300px] rounded-[20px]'/>
         <div className="  md:h-[400px] h-[190px] md:w-[1060px] w-[275px] relative flex flex-row px-2  md:mt-[-40px] mt-[-50px]   md:mx-[50px] mx-[10px] dark:bg-black border-1 border-gray-200 bg-white ">
                      <div className=" md:h-[130px] md:w-[130px] relative flex flex-row px-2 ml-[800px] hidden md:block mx-[50px] mt-[-50px] bg-[#d2a679]  ">       
                         <div className="flex flex-col">
                        <div className='md:text-5xl font-serif text-white font-bold mx-[16px] p-3 '>24</div>
                        <div className='md:text-3xl font-serif text-white mx-[25px] '>NOV</div>
        </div>
        </div>  
        <div className="flex flex-col  absolute md:left-[1]  md:p-15 p-0 ">
             <div className='md:text-lg text-sm text-gray-600 font-serif dark:text-white   md:mt-2 mt-0 mx-2 md:p-2 p-0'> 🗓 12 August 2024 👾 John Baus</div>
        
            <div className='md:text-3xl text-1xl text-black font-marcallus dark:text-yellow-600 font-semibold font-serif   md:p-2 p-0  '>Picked up a Brussels burger Sprouts with ham</div>
              <div className='md:text-lg text-xs text-gray-600  md:mt-2 mt-0 mx-2 font-serif dark:text-white  md:p-2 p-0'> Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now

</div>
             <button className=" dark:text-black justify-center items-center md:w-[250px] md:mt-[10px] mt-0 md:w-[200px] w-[130px] rounded-lg md:h-[60px] h-[25px] bg-[#f5c86b] font-bold"
   onClick={(event)=>{
    router.push(`/about`);
   }}>READ MORE &#62;</button>
        
        
          
       </div>
      </div>
           </div>
<div className="flex flex-col mx-10 p-10" ></div>
            <div className="flex flex-col mx-10 ">
            
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75" className='md:h-[700px] h-[250px] md:w-[1200px] w-[300px] rounded-[20px]'/>
         <div className="  md:h-[400px] h-[190px] md:w-[1060px] w-[275px] relative flex flex-row px-2  md:mt-[-40px] mt-[-50px]   md:mx-[50px] mx-[10px] dark:bg-black border-1 border-gray-200  bg-white  ">
                      <div className=" md:h-[130px] md:w-[130px] relative flex hidden md:block flex-row px-2 md:ml-[800px]  mx-[50px] mt-[-50px] bg-[#d2a679]  ">
                        
                        <div className="flex hidden md:block flex-col"><div className='text-4xl text-white font-serif  font-bold mx-[16px] p-3 '>18</div>
                                   <div className='text-2xl font-serif  text-white mx-[25px] '>NOV</div>
                                   </div>
        </div>
        <div className="flex flex-col  absolute md:left-[1]  md:p-15 p-0 ">
             <div className='md:text-lg text-sm text-gray-600 font-serif  dark:text-white   md:mt-2 mt-0 mx-2 md:p-2 p-0'> 🗓 13 August 2024 👾 Admin </div>
        
            <div className='md:text-3xl text-1xl text-black font-marcallus font-semibold font-serif dark:text-yellow-600  md:p-2 p-0  '>This prefabricated passive house highly</div>
              <div className='md:text-lg text-xs text-gray-600  md:mt-2 mt-0 mx-2 font-serif dark:text-white   md:p-2 p-0'> Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now

</div>
            <button className=" dark:text-black justify-center items-center md:w-[250px] md:mt-[10px] mt-0 md:w-[200px] w-[130px] rounded-lg md:h-[60px] h-[25px] bg-[#f5c86b] font-bold"
   onClick={(event)=>{
    router.push(`/about`);
   }}>READ MORE &#62;</button>
        
          
       </div>
        </div>
        </div>
        <div className='flex flex-col mx-10 p-10'></div>
         <div className=" flex flex-col mx-10">
            
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3-full.jpg&w=3840&q=75" className='md:h-[700px] h-[250px] md:w-[1200px] w-[300px] rounded-[20px]'/>
         <div className="  md:h-[400px] h-[190px] md:w-[1060px] w-[275px] relative flex flex-row px-2  md:mt-[-40px] mt-[-50px] dark:bg-black border-1 border-gray-200  md:mx-[50px] mx-[10px]  bg-white ">
                      <div className=" md:h-[130px]  md:w-[130px] hidden md:block relative flex flex-row px-2 ml-[800px] mx-[50px] mt-[-50px] bg-[#d2a679]  ">
                        
                        <div className="flex hidden md:block flex-col"><div className='text-4xl hidden md:block text-white font-bold mx-[16px] font-serif  p-3 '>28</div>
                                   <div className='text-2xl text-white hidden md:block mx-[25px] font-serif  '>DEC</div>
                                   </div>
        </div>
             <div className="flex flex-col  absolute md:left-[1]  md:p-15 p-0 ">
             <div className='md:text-lg text-sm text-gray-600 font-serif dark:text-white    md:mt-2 mt-0 mx-2 md:p-2 p-0'> 🗓 14 August 2024 👾 John Baus </div>
        
            <div className='md:text-3xl text-1xl text-black font-marcallus font-semibold font-serif dark:text-yellow-600  md:p-2 p-0  '>Overcame breeding point concerns has.</div>
              <div className='md:text-lg text-xs text-gray-600  md:mt-2 mt-0 mx-2 font-serif dark:text-white    md:p-2 p-0'> Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now

</div>
                 <button className=" dark:text-black justify-center items-center md:w-[250px] md:mt-[10px] mt-0 md:w-[200px] w-[130px] rounded-lg md:h-[60px] h-[25px] bg-[#f5c86b] font-bold"
   onClick={(event)=>{
    router.push(`/about`);
   }}>READ MORE &#62;</button>
        
          
       </div>
        </div>
        </div>
</div>
        <div className="p-10"></div>
        <Offer/>
    <div className='flex flex-row border-2 h-[100px] p-4 w-[450px]'>
<div className='flex flex-col p-5 items-center justify-center w-[200px]  hidden md:block h-[70px]  border-black border-1 dark:border-white hover:text-white hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-2xl rounded-lg text-yellow-900 '>  1
    </div><div className='flex flex-row p-5 items-center justify-center  hidden md:block w-[150px] h-[70px] rounded-md border-1 dark:border-white  hover:text-white   hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-yellow-900 text-2xl'> 2
    </div><div className='flex flex-row p-5 items-center justify-center  hidden md:block w-[150px] h-[70px] rounded-md border-1 dark:border-white  hover:text-white hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-yellow-900 text-2xl'> 3
    </div><div className='flex flex-col p-5 items-center justify-center  hidden md:block w-[150px] h-[70px] rounded-md  border-1 dark:border-white hover:text-white hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-2xl text-yellow-900 '> 4
    </div><div className='flex flex-col p-5 items-center justify-center  hidden md:block w-[150px] h-[70px] rounded-md  border-1 dark:border-white hover:text-white hover:bg-[#d2a679] transition-all mx-[10px] duration-500 text-2xl text-yellow-900 '> &#62;
    </div>
        </div>
        </div>
      <div className="md:p-20 p-0"></div>
        <Footer />
    </div>
  );
}