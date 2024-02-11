import React from 'react'

function Participate() {
  return (
     <div className='w-full p-5 min-h-screen md:h-screen flex items-center flex-col'>
      <div className="text-black text-center five w-[20%] text-2xl font-semibold font-['Poppins'] capitalize" style={{ border: "2px solid black" }}>how to participate</div>
      <div className="flex flex-col md:flex-row gap- w-full justify-center items-center mt-20">
      <div className='w-full md:w-[35%]'>
        <div className="text-black text-[33px] font-semibold font-['Poppins'] capitalize">1. register</div>
        <div className="text-black text-opacity-60 text-[px] font-semibold font-['Poppins'] capitalize p-5">Sign up to become a member of Gifted Brainz.</div>
      </div>
      <div className='w-full md:w-[35%]'>
        <div className="text-black text-[33px] font-semibold font-['Poppins'] capitalize">2. take a challenge</div>
        <div className="text-black text-opacity-60 text-[px] font-semibold font-['Poppins'] capitalize p-5">Participate in a challenge. Answer 15 questions to earn (sQP).</div>
      </div>
    </div>
      <div className="flex flex-col md:flex-row relative gap- w-full justify-center items-center mt-10">
        <div className='w-full md:w-[35%]'>
        <div className=" text-black text-[33px] font-semibold font-['Poppins'] capitalize"> 3. choose your plan</div>
        <div className=" text-black text-opacity-60 text-[px] font-semibold font-['Poppins'] capitalize p-5 ">subscribe directly on the site with weekly plan or monthly plan. </div>
        </div>
        <div className='w-full md:w-[35%] gap-10'>
        <div className=" text-black text-[33px] font-semibold font-['Poppins'] capitalize mt-5 "> 4. refer and earn</div>
        <div className=" text-black text-opacity-60 text-[px] font-semibold font-['Poppins'] capitalize p-5  ">invite your friend. let them about this platform and you’ll earn 40% affiliate commision.</div>
        </div>
      </div>
      </div>
  )
}

export default Participate