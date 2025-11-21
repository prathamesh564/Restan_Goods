"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="absolute md:top-15 top-1 left-0 w-full z-20 flex md:flex-wrap md:flex-col items-center">
      <div className="md:flex md:flex-wrap md:flex-row flex-col  md:w-full md:justify-center  md:items-center md:gap-10 md:py-4 text-white font-bold">
        
        <button className="md:hover:text-amber-400 md:transition-all" onClick={() => router.push("/home")}>
          Home
        </button>
        
        <button className="hover:text-amber-400  transition-all" onClick={() => router.push("/about")}>
          About Us
        </button>
        <button className="hover:text-amber-400 transition-all" onClick={() => router.push("/chef")}>
          Chef
        </button>
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
          className="h-[60px] hidden md:block md:w-[150px]"
        />

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
    </div>
  );
}
