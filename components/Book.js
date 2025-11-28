"use client";
export default function Book(){
    return(
        <div className="min-h-[500px] md:h-[600px] md:w-[850px]  md:mx-[100px] mx-[10px] relative flex flex-col px-2  md:mt-[-140px] mt-[-80px] items-center  dark:bg-black border-1 dark:border-gray-500  bg-gray-200 rounded-[50px] ">
        
     <div className="flex md:flex-row w-{1/2}">
         <img src="https://play-lh.googleusercontent.com/8wLUlZ4RTW9MhdU5YrGKTilM-jPTC2Yc1g9hpbrP6dgv_EW1p3PpexuIIw8hTuVfTID0" className='h-[70px] md:w-[70px]  mx-5  p-[-20] rounded-full  '/>
      
        <div className="dark:text-white md:text-3xl text-2xl  font-serif font-semibold mx-[10px] p-5">Book A Table </div>
     </div>
      <input placeholder="Phone" 
  required={true} 
  className="bg-white p-5 my-3 border-1 border-yellow-400 border-2 border-gray-200 rounded-lg w-[90%]"
  onChange={(event)=>setphone(event.target.value)}
  />


      <select
        required
        className="bg-white w-[90%] border-1 border-yellow-400 border-2 border-gray-200 rounded-lg text-gray-500 p-5 my-3"
        onChange={(event) => setTimeSlot(event.target.value)}
      >
        <option value="">Select a time slot</option>
        <option value="9-10">⏰ 9:00 AM – 10:00 AM</option>
        <option value="10-11">🕙 10:00 AM – 11:00 AM</option>
        <option value="1-2">🌞 1:00 PM – 2:00 PM</option>
        <option value="4-5">🌇 4:00 PM – 5:00 PM</option>
      </select>
 
<div className="flex flex-col w-[90%] border-1 border-yellow-400 bg-white border-2 border-gray-200 text-gray-500 rounded-lg p-5 my-3">
<label htmlFor="date" onChange={(event) => setdate(event.target.value)} >Date:</label>
  <input type="date" id="date" name="date" required></input>
  </div>
      <select
        required
        className="bg-white w-[90%] border-1 border-yellow-400 border-2 border-gray-200 rounded-lg text-gray-500 p-5 my-3"
        onChange={(event) => setPerson(event.target.value)}
      >
        <option value="">Select No. of Person</option>
        <option value="1">1 Person</option>
        <option value="2">2 Person</option>
        <option value="3">3 Person</option>
        <option value="4">4 Person</option>
      </select >
 <div className='p-2'></div>
   <button className=" text-white border-1 border-yellow-400 w-[51%] h-[50px] bg-[#B8860B] rounded-lg font-bold"
   onClick={(event)=>{
      alert("You Record has been Saved Thanks for Your Valuable Time!");
        console.log("Book A Table");
       console.log("Phone Number:", email);
      console.log("Time Slot:", timeSlot);
      console.log("Date:", date);
      console.log("No. of Person:",person); 
    router.push(`/home`);
   }}>Book A Table</button>


     </div>
    )
}