export default function Offer() {
  return (

<div className=" flex flex-col md:flex-row justify-center h-[500px] items-center bg-yellow-500 p-1 md:mx-50 border-dashed border-4 border-yellow-300 rounded-[50px]
 ">
   
      <div className="relative flex justify-center items-center md:mb-0 md:mr-12 p-5">
        <img
          src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F15.png&w=1080&q=75"
          alt="Main Dish"
          className="w-80 h-80 md:w-70 md:h-70 object-cover rounded-full shadow-2xl"
        />
        <div className="absolute bottom-4 right-4 bg-white rounded-full px-6 py-4 text-center shadow-md">
          <div className="text-gray-800 font-semibold">Save</div>
          <div className="text-2xl font-bold text-black">55%</div>
        </div>
      </div>


      <div className="max-w-md text-center md:text-left">
        <h4 className="text-sm text-gray-700 tracking-wide mb-2">
          TODAY SPECIAL OFFER
        </h4>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-5">
          Explore Irresistible <br /> Promotions!
        </h1>    
        <p className="text-gray-700 mb-6 leading-relaxed">
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