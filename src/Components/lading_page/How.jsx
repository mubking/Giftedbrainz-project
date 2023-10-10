import React from 'react'

function How() {
  return (
    <div className='w-full p-5 min-h-screen flex  items-center flex-col'>
        <div className=" text-black text-center five w-[20%] text-2xl  font-semibold font-['Poppins'] capitalize" style={{border:"2px solid red"}} >how it’s works</div>
        <div className="flex flex-row four mt-5 gap-36">
            <div className="flex flex-col">
                <div className=''>
                <img src="/stepone.png" alt=""  style={{height:"40vh"}}/>

                </div>
                <div>
                    <p>nigerians and other african countries <br /> can come and challenge one another.</p>
                    <p className='mt-5'>in a daily active quiz competition and <br /> stand a chance to win cash prize more <br /> than #100,000 weekly/monthly <br /> respectively or it’s equivalent in uSDT.</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div>
                <img src="/steptwo.png" alt=""  style={{height:"40vh"}}/>

                </div>
                <div>
                    <p>you will acquire valuable skills <br /> and knowledge in blockchain, <br /> De-fi, nFTs, UI/UX Design, <br /> fashion/cosmetic and so on.</p>
                </div>
            </div>
        </div>
        <div className="flex flex-row four mt-5 gap-36">
            <div className="flex flex-col">
                <div className=''>
                <img src="/about.png" alt=""  style={{height:"40vh"}}/>

                </div>
                <div>
                 <p>you will participate in intellectual <br /> contest for a life changing prize. <br /> you have the chance to join our <br /> innovative and creative team.</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div>
                <img src="/stepthree.png" alt=""  style={{height:"40vh"}}/>

                </div>
                <div>
                 <p>you enjoy steady affiliate <br /> earnings. refer your friends and <br /> earn 40% affiliate commision.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default How