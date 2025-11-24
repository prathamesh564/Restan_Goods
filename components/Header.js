"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Header() {
  const router = useRouter();
const [open, setOpen] = useState(false);
  return (
    <div className="absolute md:top-15 top-1 left-0 w-full z-20 flex md:flex-wrap md:flex-col flex-col ">
      <div className="md:flex md:flex-wrap md:flex-row flex-col  md:w-full md:justify-center items-center  md:gap-10  md:py-3 py-1 text-white font-bold">
        
        
        <button className="md:hover:text-amber-400 hidden md:block md:transition-all" onClick={() => router.push("/home")}>
          Home
        </button>
        
        <button className="hover:text-amber-400 hidden md:block  transition-all" onClick={() => router.push("/about")}>
          About Us
        </button>
        <button className="hover:text-amber-400 hidden md:block transition-all" onClick={() => router.push("/chef")}>
          Chef
        </button>
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
          className="h-[60px] hidden md:block md:w-[150px]"
        />

        <button className="hover:text-amber-400 hidden md:block transition-all" onClick={() => router.push("/cart")}>
          Cart
        </button>
        <button className="hover:text-amber-400 hidden md:block transition-all" onClick={() => router.push("/blog")}>
          Blog
        </button>
        <button className="hover:text-amber-400 hidden md:block transition-all" onClick={() => router.push("/menu")}>
          Menu
        </button>
 </div>
        <button
        onClick={() => setOpen(!open)}
        className="absolute left-10 top-[20px] hover:text-amber-400 mx-0 left-0 md:text-4xl text-2xl text-white ml-0 z-20 transition-all"
      >
        ☰
      </button>
      {open && (
         <div className="flex   md:flex-col flex-col  md:w-[130px] w-[140px]  md:mr-0 ml-[-1px]  md:gap-3   py-0 dark:bg-gray-700 bg-gray-200 dark:text-white  text-black font-bold">
        
        
        <button className="md:hover:text-amber-400 md:transition-all" onClick={() => router.push("/home")}>
          Home
        </button>
        
        <button className="hover:text-amber-400  transition-all" onClick={() => router.push("/about")}>
          About Us
        </button>
        <button className="hover:text-amber-400 transition-all" onClick={() => router.push("/chef")}>
          Chef
        </button>
        <button className="hover:text-amber-400 transition-all" onClick={() => router.push("/cart")}>
          Cart
        </button>
        <button className="hover:text-amber-400 transition-all" onClick={() => router.push("/blog")}>
          Blog
        </button>
        <button className="hover:text-amber-400 transition-all" onClick={() => router.push("/menu")}>
          Menu
        </button>
      
        </div>

  
  )
}
</div>

)}
