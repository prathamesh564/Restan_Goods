 "use Client";

 export default function Chef() {
   return(
        <div
          className="min-h-150"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1418379431/photo/luxury-paper-texture-cream-or-gold-seamless-repeating-pattern.jpg?b=1&s=170x170&k=20&c=kSEwLnFHl3vnX2vlpazp1mJKPbHxPFr0l-QNGowADh4=')"}} >
         
          <div className=" text-center ">
            <div className="text-yellow-900 test-md pt-20 items-center justify-center" >------ MASTER CHEFS ------</div>
            <div className="text-black md:text-5xl text-3xl p-4 font-bold font-serif mb-6">
              Meet Our Special Chefs
            </div>
            <div className="flex md:flex-row flex-col md:mt-10 justify md:items-center md:gap-25 md:ml-50 ">
              <div className="flex flex-col ">
                <div>
                  <img
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/1-1.jpg"
                    className="md:w-[350px] h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-yellow-900 md:w-[310px]  md:h-18 md:mt-[-80px]  md:mx-[20px]">
                  <div className="text-center text-white font-serif text-md font-bold   p-2">
                    Alexander Petllo
                    <br />
                    Assistant Chef
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div>
                  <img
                    src="https://wp.validthemes.net/restan/wp-content/uploads/2024/01/2-2.jpg"
                    className="w-[350px] h-auto   rounded-[100%] p-4 border border-gray-900"
                  />
                </div>
                <div className="bg-yellow-900 md:w-[310px] h-18 mx-[20px] mt-[-80px] ">
                  <div className="text-center font-serif text-white text-md font-bold p-2">
                    Mendia Juxef
                    <br />
                    Burger King
                  </div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00eW8B6XAtmNmhHEMVENWGe8XvwkZX7QXDi4q1oz6Lt_fJZixkuxbQcnXaKTq8NADf5Y&usqp=CAU"
                    className="w-[350px] h-auto   rounded-[100%] p-4 border border-gray-900 "
                  />
                </div>
                <div className="bg-yellow-900 md:w-[310px] mx-[20px] h-18 mt-[-80px]">
                  <div className="text-center  font-serif text-white text-md font-bold  p-2">
                    Petro William
                    <br />
                    Main Chef
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    );
}