"use Client";
export default function Blog(){
    return(
        <div className="min-h-screen dark:bg-black bg-gray-100">
        <div className='flex flex-row justify-center items-center  text-2xl dark:text-white text-yellow-900 p-5 font-serif'>----- News & Blog -----</div>
    <div className='flex flex-row justify-center items-center text-4xl dark:text-white font-Arial p-1 font-serif'>Our Latest News & Blog</div>
    <div className='flex md:flex-row md:justify-center md:items-center  md:text-lg md:p-10 md:mx-20'>
        <div className="flex md:flex-row flex-col">
        <div className="flex flex-col md:mx-10">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75" className="md:h-[500px] md:w-[700px] rounded-[20px]"/>
       <div className=" h-[250px] md:w-[560px] relative flex flex-row px-2 mx-[50px] mt-[-40px]    bg-white  ">
                      <div className=" h-[90px] hidden md:block md:w-[90px] relative flex md:flex-row md:px-2 md:ml-[400px] mx-[50px] md:mt-[-50px] bg-[#B8860B]  ">
                        
                        <div className="flex flex-col"><div className='text-4xl text-white font-bold mx-[5px] p-2 font-serif '>18</div>
                                   <div className='text-2xl text-white mx-[12px] font-serif '>NOV</div>
                                   </div>
        </div>
         <div className="flex flex-col  absolute left-0 top-0 p-5 ">
             <div className='md:text-lg text-gray-600  mt-2 mx-2  font-serif'>By Md SohagBurger * Food</div>
        
            <div className='md:text-3xl text-black font-marcallus font-serif font-semibold p-2  '>This prefabricated passive house is highly sustainable</div>
            <div className='md:text-2xl text-amber-700  mt-2 p-1 font-serif'>READ MORE </div>
      </div>
        </div>
        </div>

            <div className=" flex flex-col md:mx-10">
            
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75" className='md:h-[500px] md:w-[700px] rounded-[20px]'/>
         <div className=" h-[250px] md:w-[560px] relative flex flex-row px-2 md:mx-[10px] mx-[50px] mt-[-40px]    bg-white  ">
                      <div className=" hidden md:block md:h-[90px] md:w-[90px] relative flex flex-row px-2 md:ml-[400px] mx-[50px] mt-[-50px] bg-[#B8860B]  ">
                        
                        <div className="flex flex-col"><div className='text-4xl text-white font-bold md:mx-[5px] p-2 font-serif '>24</div>
                                   <div className='text-2xl text-white mx-[12px] font-serif'>DEC</div>
                                   </div>
        </div>
         <div className="flex flex-col  absolute left-0 p-5 ">
             <div className='md:text-lg text-gray-600 font-serif mt-2 mx-2'>By Md SohagBurger * Food</div>
        
            <div className='md:text-3xl text-black font-marcallus font-serif font-semibold p-2  '>This prefabricated passive house is highly sustainable</div>
            <div className='md:text-2xl text-amber-700 font-serif mt-2 p-1'>READ MORE </div>
        
          
       </div>
        </div>
        </div>
</div>
        </div>
        </div>
 
 

    )
}