"use Client";
export default function Blog(){
    return(
        <div className=" dark:bg-black bg-gray-100">

<div className="flex flex-col  md:flex-row justify-center space-x-10 space-y-0 dark:bg-black items-center mt-[100px] mx-[100px]">


  <div className='flex flex-col hidden md:block items-left p-10 w-[1000px] h-[400px] rounded-md border-2  border-black dark:border-white  dark:text-white  transition-all duration-500'>
  <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75" className=' w-[150px] h-[150px] rounded-full mx-2'/>
    <div className='font-bold font-serif text-2xl p-2 mt-2'>
      Quality Foods
    </div>
    <div className='md:text-left text-gray-500 p-4 md:px-4'>
      Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
      </div>
  </div>

  <div className='flex flex-col hidden md:block items-left  p-10 w-[1000px] h-[400px] rounded-md border-2 border-black dark:border-white dark:text-white transition-all duration-500'>
    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75" className=' w-[150px] h-[150px] rounded-lg mx-2'/>
      
    <div className='font-bold font-serif md:text-2xl md:mt-2 md:p-2'>  
      Fast Delivery
    </div>
    <div className='text-left px-4 text-gray-500 p-2 px-2'>
      Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.
    </div>
  </div>


  <div className='flex flex-col hidden md:block items-left p-10 w-[1000px] h-[400px] rounded-md border-2 border-black dark:border-white dark:text-white transition-all duration-500'>
    <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F15.png&w=640&q=75" className=' w-[150px] h-[150px] rounded-full mx-2'/>
    <div className='font-bold font-serif text-2xl mt-2 p-2'>
      Delicious Recipes
    </div>
    <div className='text-left md:px-4 text-gray-500 md:p-4'>
      Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Traveling by introduced of mr terminated.</div>
    </div>
</div>
        </div>)
}