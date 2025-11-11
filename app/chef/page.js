 "use client";
 import Header from'@/components/Header';
  import {useRouter} from "next/navigation";
  import Footer from'@/components/Footer';
 export default function Chef()
  {  const router = useRouter(); 
    return(
        <div
          className="min-h-screen"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1418379431/photo/luxury-paper-texture-cream-or-gold-seamless-repeating-pattern.jpg?b=1&s=170x170&k=20&c=kSEwLnFHl3vnX2vlpazp1mJKPbHxPFr0l-QNGowADh4=')"}} >
                <Header/>
                <div className="relative min-h-[25%] bg-black/50  md:w-full">
       <div className="absolute inset-0 bg-black/30"></div>
  <img
    src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
    alt="Background"
    className="md:w-full h-[550px]  bg-black/50 rounded-[10px]"
  />
  <div className="absolute top-0 bg-black/10 left-0 w-full h-full  rounded-[80px]">
  <div className="flex md:flex-col p-5 flex-row h-[25%] w-full items-left md:text-white mx-10">
    <div className="flex hidden md:block flex-row ">
     
    </div>


     <div className="absolute inset-0 md:rounded-[80px] flex md:items-center p-5 md:justify-center">
  <div className="flex flex-col items-center ">
    <div className="text-white md:text-5xl font-[serif] font-sans">Restaurant Chef</div>
    
    <div className="text-white md:text-2xl p-5 font-[serif] font-sans"> 🏡 Home &#62; chef</div>
    </div>
       <div className="flex flex-col items-center p-5"></div>



</div>
</div>
  </div>
  </div>
          <div className=" text-center ">
            <div className="text-yellow-900 test-md pt-20" >------ MASTER CHEFS ------</div>
            <div className="text-black text-5xl p-4 font-bold mb-6">
              Meet Our Special Chefs
            </div>
            <div className="flex flex-row mt-10 justify items-center gap-30 ml-50">
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/1-1.jpg"
                    className="w-[350px] h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-yellow-900 w-[350px] h-18 mt-[-80px]">
                  <div className="text-center text-white text-md font-bold  p-2">
                    Alexander Petllo
                    <br />
                    Assistant Chef
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/2-2.jpg"
                    className="w-[350px] h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-yellow-900 w-[350px]   h-18 mt-[-80px] ">
                  <div className="text-center text-white text-md font-bold p-2">
                    Mendia Juxef
                    <br />
                    Burger King
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00eW8B6XAtmNmhHEMVENWGe8XvwkZX7QXDi4q1oz6Lt_fJZixkuxbQcnXaKTq8NADf5Y&usqp=CAU"
                    className="w-[350px] h-auto   rounded-[100%] p-4 border border-gray-900 "
                  />
                </div>
                <div className="bg-yellow-900 w-[350px]  h-18 mt-[-80px]">
                  <div className="text-center text-white text-md font-bold  p-2">
                    Petro William
                    <br />
                    Main Chef
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row mt-10 justify items-center gap-30 ml-50">
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F8.jpg&w=1920&q=75"
                    className="w-[350px] h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-yellow-900 w-[350px] h-18 mt-[-80px]">
                  <div className="text-center text-white text-md font-bold  p-2">
                    Alexander Petllo
                    <br />
                    Assistant Chef
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F9.jpg&w=1920&q=75"
                    className="w-[350px] h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-yellow-900 w-[350px]  h-18 mt-[-80px] ">
                  <div className="text-center text-white text-md font-bold p-2">
                    Mendia Juxef
                    <br />
                    Burger King
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F10.jpg&w=1920&q=75"
                    className="w-[350px] h-auto   rounded-[100%] p-4 border border-gray-900 "
                  />
                </div>
                <div className="bg-yellow-900 w-[350px] h-18 mt-[-80px]">
                  <div className="text-center text-white text-md font-bold  p-2">
                    Petro William
                    <br />
                    Main Chef
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='p-20'></div>
          <Footer/>
        </div>
    )
}