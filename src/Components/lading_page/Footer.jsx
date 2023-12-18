import React from 'react'

function Footer() {
  return (
    <footer className='w-full p-5 bg-[blue] min-h-[150vh] md:min-h-[100vh] flex flex-col items-center relative'>
        <div className=" text-white text-[34px] mt-5 text-center font-bold font-['Poppins'] capitalize">join our newsletter
        </div>
        <div className="flex mt-5 w-full">
        <input type="email"placeholder="hello@smartquiz.com"className="bg-white p-3 rounded-l border  border-gray-300 outline-none text-gray-600"/>
        <button className="bg-[white] text-[red] text-[18px] p-[11px] rounded-r">Join Now</button>
       </div>
       <div className="flex w-full md:w-[60%]  flex-col md:flex-row gap-4 md:gap-28 mt-10 text-white">
        <div className="w-full text-[30px] font-extrabold capitalize">
          <label htmlFor="">Product</label>
          <div className="flex flex-col gap-2">
          <a href="">
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[20px] font-semibold capitalize '>course</li>
          </a>
          <a href="">
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[20px] font-semibold capitalize '>quiz </li>
          </a>
          <a href="">
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[18px] font-semibold capitalize '>refer program</li>
          </a>
          <a href="">
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[20px] font-semibold capitalize '>spin rewards</li>
          </a>
          <a href="">
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[20px] font-semibold capitalize '></li>
          </a>

          </div>
          </div>
        <div className="w-full text-[30px] font-extrabold capitalize flex flex-col  gap-2">
          <label htmlFor="">About</label>
          <a href="">
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[20px] font-semibold capitalize '>what we do</li>
          </a>
          <a href="">
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[20px] font-semibold capitalize '>our mission</li>
          </a>
          <a href="">
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[20px] font-semibold capitalize '>contact us</li>
          </a>
          <a href="">
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[20px] font-semibold capitalize '>FAQ</li>
          </a>
           <a href="">
           <li className=' list-none cursor-pointer text-white text-opacity-70 text-[17px] font-semibold capitalize '>privacy  & policy</li>
           </a>
        </div>
        <div className="w-full text-[30px] font-extrabold capitalize flex flex-col  gap-2">
          <label htmlFor="">Resources</label>
          <a href="">
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[18px] font-semibold capitalize '>Docs</li>
          </a>
          <a href="">
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[18px] font-semibold capitalize '>careers</li>
          </a>
         <a href="">
         <li className=' list-none cursor-pointer text-white text-opacity-70 text-[18px] font-semibold capitalize '>blog</li>
         </a>
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[18px] font-semibold capitalize '></li>
          <li className=' list-none cursor-pointer text-white text-opacity-70 text-[18px] font-semibold capitalize '></li>
        </div>
       </div>
 
    <footer className=" w-full text-white text- text-opacity-60 font-semibold font-['Poppins'] capitalize p-4 text-center absolute bottom-0">
      <p>&copy; 2023 copyright by <span className='text-[purple] '>MubaraqCodes</span> . all right reserved.</p>
    </footer>


    </footer>
  )
}

export default Footer