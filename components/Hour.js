"use Client";
export default function Blog(){
    return(
      <div className='flex md:flex-row flex-col  md:justify-left'>
<div className="w-full md:w-[860px] w-[full]  md:h-[506px] h-[450px] aspect-video md:mx-[30px] mx-[10px]">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/F3zw1Gvn4Mk"
    title="Mr Fox Restaurant Promo Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>
 

    <div className=" absolute top-[-100px] md:mx-[-50px] md:h-[450px] md:w-[700px]  relative flex flex-col md:px-6  dark:bg-gray-600 bg-white  ">
      
  <div className="flex flex-col">
    <div className="font-bold font-serif dark:text-white text-2xl md:text-4xl p-10">  Opening Hours</div>
        <div className=" text-1xl text-gray-500 dark:text-white font-serif mx-10"> A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The <br></br>Patio Time Bar opens in the center.. </div>
        <div className='p-3 md:mx-10'></div>
        <div className='md:font-semibold md:text-2xl dark:text-white md:mx-10 font-serif md:p-1'>Sunday to Tuesday:  ------------  10:00 - 09:00</div>
        <div className='md:font-semibold md:text-2xl dark:text-white md:mx-10 font-serif md:p-1'>Wednesday to Thursday:  ------- 11:30 - 10:30</div>
        <div className='md:font-semibold md:text-2xl dark:text-white md:mx-10  font-serif md:p-1'>Friday & Saturday:  --------------  10:30 - 12:00</div>
        <div className='flex flex-row p-3'>
           <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F6.png&w=128&q=75"
                    className="w-[50px] h-[50px] mx-[50px]  rounded-[75%] bg-yellow-600   p-3 "
                  />
                  <div className="">
                    <div className="text-1xl dark:text-white text-gray-500">Call Anytime</div>
                    <div className="md:text-2xl text-lg font-semibold">+964733-378901</div>
                  </div>
        </div>

</div>
</div>
 </div>
    )
}