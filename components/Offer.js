export default function Offer() {
  return (
<div className=" flex flex-col md:flex-row justify-center md:h-[600px]  rounded-[20px] md:items-center bg-[#f5c86b] p-1 border-dashed border-4 border-yellow-300 md:mx-50">
   
      <div className="relative flex md:justify-center md:items-center md:mb-0 mr-12  md:p-5">
        <div className="flex flex-col">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F1.png&w=1080&q=75"
          alt="Main Dish"
          className="md:w-53 hidden md:block md:h-53 rounded-full"
        />
         <div className='p-5'></div><img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F12.png&w=1080&q=75"
          alt="Main Dish"
          className="md:w-50 hidden md:block md:h-50 rounded-full"
        />

        </div>
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75"
          alt="Main Dish"
          className="md:w-75 md:h-75px  rounded-full "
        /> 
        <div className="absolute md:bottom-20 botton-10 right-4 bg-white rounded-full md:px-6 md:py-4 text-center shadow-md">
          <div className="text-gray-800 font-semibold">Save</div>
          <div className="text-2xl font-bold text-black">55%</div>
        </div>
     
</div>

      <div className="max-w-md text-center md:text-left">
        <h4 className="text-sm text-gray-700 font-serif tracking-wide mb-2">
          TODAY SPECIAL OFFER
        </h4>
        <h1 className="text-4xl md:text-5xl font-bold font-serif  text-black mb-5">
          Explore Irresistible <br /> Promotions!
        </h1>    
        <p className="text-gray-700 md:mb-6 md:leading-relaxed">
          Contrasted dissimilar get joy you instrument out reasonably. Again
          keeps at no meant stuff. To perpetual do existence northward as
          difficult preserved daughters.
        </p>
        <button className="bg-amber-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-amber-800 transition">
          Order Today
        </button>
      </div>     
      </div>
  );
}  