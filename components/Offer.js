export default function offer(){
    return(
        <div className=" flex flex-col md:flex-row justify-center items-center bg-amber-200 p-1 md:mx-50">
   
      <div className="relative flex justify-center items-center md:mb-0 md:mr-12 p-5">
        <img
          src="https://th.bing.com/th/id/OIP.UnbyyOl4U-QFdwucdusDpgHaE0?w=286&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
          alt="Main Dish"
          className="w-50 h-50 md:w-50 md:h-50 object-cover rounded-full shadow-2xl"
        />
        <div className="absolute top-4 left-4 bg-white rounded-full px-6 py-4 text-center shadow-md">
          <div className="text-gray-800 font-semibold">Save</div>
          <div className="text-2xl font-bold text-black">55%</div>
        </div>
      </div>


      <div className="max-w-md text-center md:text-left">
        <h4 className="text-sm text-gray-700 tracking-wide mb-2">
          TODAY SPECIAL OFFER
        </h4>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
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
    )
}