export default function Footer() {
    return(
        <footer className="bg-black md:h-[300px] text-amber-100 clip-path:eli" >
         <div className="flex md:flex-row ">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=1920&q=75" className=' absolute  h-[150px] md:w-[150px] mx-0'/>
             
            <div className=" text-center md:width-full md:p-10 text-white align-baseline ">
                   <div className=" md:h-[300px] md:w-[1350px] md:mx-[100px] relative flex md:flex-row   mt-[-140px] items-center  bg-black  ">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                         <div className="flex flex-row">
                        <div className="text-1xl p-1 ">
                            <div className="text-2xl p-1">
            About Us </div>
           <div className="text-1xl md:p-1 ">
           Continued at zealously necessary is </div>
            <div className="text-1xl p-1 ">
           Surrounded sir motionless she end</div>
            <div className="text-1xl p-1 ">
           literature. Gay direction neglected.
            </div>
            

           
           
           
           
            </div> 
            </div>
                    </div>
                    <div className="flex flex-col mx-[40px]">
                        <div className='flex flex-row'>
                              <div className="flex flex-col">
                             <div className="text-2xl text-semibold p-1 ">
            Explore
            </div> 
             <div className="text-1xl p-4 ">
            Our Home
            </div>  <div className="text-1xl p-1 ">
           Contact US
            </div>  <div className="text-1xl p-1 ">
            Reviews 
            </div> 


                        </div>
                           <div className="flex flex-col mx-[40px]">
                        <div className='flex flex-row'>
                              <div className="flex flex-col">
              <div className = "font-bold text-[30px] text-white ml-0  mb-10 flex flex-col">Contact Info</div>
                <div className = "text-white text-[17px] mb-5 -mt-5 w-70">1234 - Bandit Tringi St, Sonipat, Haryana</div>
                <div className = "text-white text-[17px] mb-5">Phone: +91 1234567890</div>
                <div className = "text-white text-[17px] mb-5">Email: food@restan.com </div>
            </div></div>
            </div>
              <div >
            
                           <div className="flex flex-col mx-[40px]">
                        <div className='flex flex-row'>
                              <div className="flex flex-col">
                <div className = "font-bold text-[30px] text-white  mt-20 mb-10 flex flex-col">Newsletter</div>
                <div className = "text-white text-[17px]  mb-5 -mt-5 cursor-pointer hover:text-yellow-400">Join our subscribers list to get the latest news and special offers. </div>
                <input type = "Email" placeholder="Your Email Address" className = "w-60 h-10 mt-5 -ml-5 rounded-[5px] pl-2 border-b-1 border-b-gray-300 text-[16px]">
                </input>
            </div>    </div>    </div>    </div>


             
                            </div>
                    </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col">
            <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75" className='h-[70px] md:w-[150px] md:mx-[120px]  '/>
            <div className="md:text-2xl p-10 ">
            Copy rights @Preethamdas @Prathameshvshenoy 
            </div>
            </div>
            </div>
            </div>
        </footer>
    );
}