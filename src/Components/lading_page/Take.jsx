import React from 'react'

function Take() {
  return (
    <div className='min-h-screen p-5'>
        <div className='bg-[#5852FE] seventy w-full h-[60vh] rounded'>
          <div className=" flex  flex-col md:flex-row p-10">
            <div className='w-full'>
            <div className=" text-white text-[33px] font-semibold font-['Poppins'] capitalize">take quiz and earn  points</div>
            <div className=" text-white text-opacity-60 text-[25px] font-semibold font-['Poppins'] capitalize">win and earn points to purchase course and acquire more skills from the experts.</div>
            <button class="inline-flex text-white mt-10 bg-slate-950 bg-opacity-60 rounded-[80px] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg">
            play now
            </button>
            </div>
            <div className='w-full'>
                <img style={{height:"70vh", position:"relative", bottom:"80px"}} src="/vecteezy_3d-winner-award-gold-trophy-icon-or-3d-business-success_10915898_609 1.png" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Take