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
                     <div className='bg-[#f5c86b] md:h-[50px] md:w-full   flex md:flex-column md:flex-row  flex items-center '>
        <div className="text-1xl md:ml-[130px] ml-[1px]"> Phone:+91 8265653623</div>
        <div className="text-1xl md:mx-[40px] mx-[1px]"> Email id: mrxyz@gamil.com</div>
        <img
    src="https://th.bing.com/th/id/OIP.xZU2eaShw9o68_ShqRCFmAHaFP?w=274&h=194&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.3&pid=1.7&rm=3"
    alt="Background"
    className="md:w-[30px] h-[30px]  md:ml-[650px] hidden md:block ml-5 rounded-[50px]"
  />
        <div className="text-1xl font-bold mr-auto hidden md:block md:mx-[10px]">English &#62;</div>
      
            <img src = "https://www.bing.com/th/id/OIP.55DCXbXlKDgEBoZhKxpzLAHaHa?w=205&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.3&pid=3.1&rm=2" className = " h-8 w-8  mr-[10px] rounded-[5px]" alt = "fb"
                ></img>
                <img src = "https://assets1.chainstoreage.com/images/v/max_width_1440/2023-07/twitter-x-logo.png"
                  className = " h-8 w-8 hidden md:block  mr-[10px] " alt = "tw"
                ></img>
                 <img src = "https://pngimg.com/uploads/youtube/youtube_PNG102349.png"  className = " h-8 w-12 hidden md:block  mr-[10px]" alt = "yt"
                ></img>
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIZNwih6eXIffaQEDckh1GtVTsxxkkmMvo4keYRVLAg&s"
                  className = " h-8 w-8 rounded-[10px] mr-[10px]" alt = "l-in"
                ></img>
      </div>
    <div className="relative min-h-[25%] bg-black/50  md:w-full">
             <div className="absolute inset-0 bg-black/30"></div>
        <img
          src="https://restan-nextjs.vercel.app/assets/img/shape/5.jpg"
          alt="Background"
          className="md:w-full h-[550px] md:h-[600px] h-[50px]  bg-black/50 rounded-[10px]"
        />
              <Header />
        <div className="absolute top-0 bg-black/10 left-0 w-full h-full  rounded-[80px]">
         
        <div className="flex md:flex-col p-5 flex-row h-[25%] w-full items-left md:text-white mx-10">
          <div className="flex hidden md:block flex-row ">
           
          </div>
      
      
           <div className="absolute inset-0 md:rounded-[80px] flex md:items-center p-5 md:justify-center">
          
        <div className="flex flex-col items-left items-center ">
         
          <div className="text-white md:text-5xl text-2xl md:mt-1 mt-50 md:ml-0 ml-12 font-serif font-sans">Restaurant Chefs</div>
          
          <div className="text-white md:text-2xl text-sm p-5 md:p-[50]  md:ml-0 ml-12 items-center font-serif font-sans"> 🏡 Home &#62; Chefs</div>
          </div>
             <div className="flex flex-col items-center p-5"></div>
      
      
      
      </div>
      </div>
        </div>
        </div>
  
          <div className=" text-center ">
             <div className='flex flex-row justify-center items-center font-semibold font-serif md:text-3xl text-yellow-900 p-5'>&#60;-------&#60;&#60; Chefs &#62;&#62;-------&#62;</div>
   

            <div className="text-black font-serif md:text-5xl text-2xl p-4 font-bold mb-6">
              Meet Our Special Chefs
            </div>
            <div className="flex md:flex-row flex-col mt-10 justify items-center md:gap-30 gap-10 md:ml-25 ml-0">
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/1-1.jpg"
                    className="md:w-[350px] w-[350px]  h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-[#B8860B] md:w-[350px] w-[320px] h-18 mt-[-80px]">
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
                    className="w-[350px]  h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-[#B8860B] md:w-[350px] w-[320px]   h-18 mt-[-80px] ">
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
                <div className="bg-[#B8860B] md:w-[350px] w-[320px] h-18 mt-[-80px]">
                  <div className="text-center text-white text-md font-bold  p-2">
                    Petro William
                    <br />
                    Main Chef
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col mt-10 justify items-center  md:gap-30 gap-10 md:ml-25 ml-0">
              <div className="flex flex-col">
                <div>
                  <img
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F8.jpg&w=1920&q=75"
                    className="md:w-[350px] w-[330px] h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-[#B8860B] md:w-[350px] w-[320px] md:w-[350px] h-18 mt-[-80px]">
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
                    className="md:w-[350px] w-[320px] h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-[#B8860B] md:w-[350px] w-[320px] h-18 mt-[-80px] ">
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
                <div className="bg-[#B8860B] md:w-[350px] w-[320px] h-18 mt-[-80px]">
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