import React from 'react'

function Gethelp() {
  return (
    <div className='w-full p-5 h-screen bg-white justify-center items-center flex flex-col gap-10' >
        <div className="text-center text-black  text-3xl first-letter:font-semibold capitalize">join our community</div>
        <div className="] text-center text-black text-opacity-50 text-lg font-semibold capitalize">join our social media and  <br /> comminuty for more update.</div>
        <div className="flex flex-row gap-10">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Telegram
        </button>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Twitter 
        </button>
        </div>
        <div className="flex flex-row gap-10">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Facebook 
        </button>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-16 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Discord 
        </button>
        </div>
    </div>
  )
}

export default Gethelp;