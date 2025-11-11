 "use Client";
 import {useRouter} from "next/navigation";
 export default function Header() {
  const router = useRouter();

  return (
    <div className='md:w-full '>
 <div className='bg-black md:h-[50px] md:w-full   flex md:flex-column md:flex-row  flex items-center bg-black'>
        <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg" className='h-[20px] mx-10 md:w-[150px] '/>
        <div className='hidden md:block rounded-[20px] bg-green-600 w-[100px] h-[40px] flex justify-center items-center font-bold text-white text-center  p-3 gap-7 ml-auto mr-10 cursor-pointer hover:bg-green-900 transition-all'> 
        Buy Now
      </div>
      </div>
     <div className='bg-yellow-900 md:h-[100px] md:w-full flex md:flex-column md:flex-row  flex justify-center items-center'>
    <button className="  text-white font-bold md:ml-[40px] text-lg md:mx-20"
   onClick={(event)=>{
    router.push(`/home`);
   }}>Home</button>
    <button className="  text-white font-bold md:ml-[40px] text-lg md:mx-20"
   onClick={(event)=>{
    router.push(`/about`);
   }}>About us</button>
      <button className="  text-white font-bold md:ml-[40px] text-lg md:mx-20"
   onClick={(event)=>{
    router.push(`/chef`);
   }}>Chef</button>
       <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" className='h-[70px] md:w-[150px] md:mx-20'/>
      <button className="   text-white font-bold md:ml-[40px] text-lg md:mx-20"
   onClick={(event)=>{
    router.push(`/cart`);
   }}>cart</button>
      <div className='hidden md:block  text-white font-bold ml-[40px] text-lg md:mx-20'>Blog</div>
      <div className='hidden md:block  text-white font-bold ml-[40px] text-lg md:mx-20'>contact</div>
      
     </div>
</div>
)
}