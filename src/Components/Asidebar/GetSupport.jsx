import React from 'react'

function GetSupport() {
  return (
    <div className=' w-full min-h-screen p-5'>
        <div className=" text-black text-3xl font-semibold capitalize">get supports</div>
        <div className=" mt-5 text-black text-opacity-50 text-lg font-semibold capitalize">contact us with your message.  our<br /> team will get back to you soon.</div>
     <div className=" mt-2 flex flex-col gap-3 ">
      <label htmlFor="username"><div className=" text-black text-xl font-semibold capitalize">username</div></label>
        <input
            type="text"
            className="w-[50%] h-[8vh] px-4 bg-zinc-300 bg-opacity-40 rounded-[100px]  text-blue-600  focus:border-green-500 "
        />
    </div>
     <div className=" mt-2 flex flex-col gap-3 ">
      <label htmlFor="username"><div className=" text-black text-xl font-semibold capitalize">Your Email</div></label>
        <input
            type="text"
            className="w-[50%] h-[8vh] px-4 bg-zinc-300 bg-opacity-40 rounded-[100px]  text-blue-600  focus:border-green-500 "
        />
    </div>
     <div className=" mt-2 flex flex-col gap-3 ">
      <label htmlFor="username"><div className=" text-black text-xl font-semibold capitalize"> Type Your message here</div></label>
      <textarea className='px-4 w-[50%] bg-zinc-300 bg-opacity-40 rounded  text-blue-600  focus:border-green-500' name="" id="" cols="30" rows="8">
        
      </textarea>
    
    </div>
    <button class="inline-flex mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Submit
      </button>
    </div>
  )
}

export default GetSupport;