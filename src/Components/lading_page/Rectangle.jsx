import React from 'react'

function Rectangle() {
  return (
    <div className='min-h-screen flex flex-col justify-center w-full p-5  mt-5'>
        <div className="flex flex-row w-full text-center gap-5 one items-center">
          <div className="w-full capitalize group bg-white h-[60vh]  focus:outline-none hover:bg-indigo-600 rounded text-lg  flex flex-col  items-center" style={{borderRadius:"20px", border:"2px solid gray"}}>
          <img src="/Win.png" alt="" style={{ height: "10vh", marginTop: "20px" }} className="group-hover:filter group-hover:grayscale" />          
            <h2 className='mt-2 group-hover:text-white'>Learn</h2>
            <p className='mt-5 text-[gray]'> you’ll be taught by our experience and qualified teachers, and get update through our website, telegram page and newsletters.</p>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded text-lg mt-5">
            Tailwind Snippets
          </button>
          </div>
          <div className="w-full group capitalize bg-white h-[60vh] focus:outline-none hover:bg-indigo-600 rounded text-lg  flex flex-col  items-center" style={{borderRadius:"20px", border:"2px solid gray"}}>
          <img src="/Win.png" alt="" style={{ height: "10vh", marginTop: "20px" }} className="group-hover:filter group-hover:grayscale" />            <h2 className='mt-2 group-hover:text-white'>Quiz</h2>
            <p className='mt-5 text-[gray] text-center'>Test your intellectual growth and win weekly/monthly prizes respectively.</p>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded text-lg mt-20">
            Tailwind Snippets
          </button>
          </div>
          <div className="w-full capitalize bg-white h-[60vh] focus:outline-none rounded text-lg flex flex-col items-center group hover:bg-indigo-600" style={{ borderRadius: "20px", border: "2px solid gray" }}>
          <img src="/Win.png" alt="" style={{ height: "10vh", marginTop: "20px" }} className="group-hover:filter group-hover:grayscale" />
          <h2 className='mt-2  group-hover:text-white'>Learn</h2>
          <p className='mt-5 text-[gray]'>You’ll be taught by our experienced and qualified teachers and get updates through our website, Telegram page, and newsletters.</p>
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded text-lg mt-5">
            Tailwind Snippets
          </button>
          </div>

        </div>
    </div>
  )
}

export default Rectangle;