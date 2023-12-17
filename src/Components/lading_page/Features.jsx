import React from 'react'

function Features() {
  return (
    <div className='w-full p-5 min-h-screen flex items-center flex-col'>
    <div className="text-black text-center five w-[20%] text-2xl font-semibold font-['Poppins'] capitalize" style={{ border: "2px solid black" }}> features & benefits</div>
    <div className='mt-5'>
    <div className="flex flex-col md:flex-row w-full gap-5">
            <div className='flex flex-col md:flex-row w-[100%] rounded-[6%]'  style={{ border: "2px solid black" }}>
              <img style={{height:"25vh"}} src="/Rectangle 145.png" alt="" />
              <div className='p-3'>
              <div className=" text-black text-[23px] text-center font-semibold font-['Poppins'] capitalize mt-5">fast withdrawals</div>
              <div className="text-center text-black text-opacity-60 text-[15px] font-semibold font-['Poppins'] capitalize">we pay within 10-24hrs to your specific bank account.</div>
              </div>
            </div>
          
            <div className='flex flex-col  w-[100%] rounded-[6%]'  style={{ border: "2px solid black " }}>
            <div className='bg-[#D9D9D9] w-full justify-center items-center flex p-5 ' style={{borderTopLeftRadius:"16px", borderTopRightRadius:"16px"}}>
                <div>
                <img style={{height:"20vh", width:""}} src="/Group 46 1.png" alt="" />

                </div>
                </div>
              <div className='p-3'>
              <div className=" text-black text-[23px] text-center font-semibold font-['Poppins'] capitalize mt-5">spin and win </div>
              <div className="text-center text-black text-opacity-60 text-[15px] font-semibold font-['Poppins'] capitalize">win amazing price by simply spinning the wheel.</div>
              </div>
              </div>
            <div className='flex flex-col  w-[100%] rounded-[6%]'  style={{ border: "2px solid black " }}>
                <div className='bg-[#D9D9D9] w-full justify-center items-center flex p-5 ' style={{borderTopLeftRadius:"16px", borderTopRightRadius:"16px"}}>
                <div>
                <img style={{height:"20vh", width:""}} src="/red cancel icon.png" alt="" />

                </div>
                </div>
              <div className='p-3'>
              <div className=" text-black text-[23px] text-center font-semibold font-['Poppins'] capitalize mt-5">referrals is not compulsory</div>
              <div className="text-center text-black text-opacity-60 text-[15px] font-semibold font-['Poppins'] capitalize">we pay within 10-24hrs to your specific bank account.</div>
              </div>
            </div>
            <div></div>
            <div></div>
        </div>

    </div>
    
    
    </div>
  )
}

export default Features