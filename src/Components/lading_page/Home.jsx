import React from 'react'

function Home() {
  return (
    <div className=' one flex flex-row  gap-5 bg-white w-full min-h-screen p-10'>
      <div className='w-full'>
        <h1 className='text-5xl'>we breed and reward intellectuals</h1>
        <p className='mt-3 text-2xl text-[#Bebebe]'>earn and learn unlimitedly as a memeber...</p>
        <button class="inline-flex text-white mt-10 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
             Get started
        </button>
      </div>
      <div className='w-full three' style={{ position: 'relative' }}>
        <img src="/Dashboard.png" alt=""  style={{height:"60vh"}}/>
        <img className='two' src="/Dashboard.png" alt="" style={{ position: 'absolute', top: 130, right: 270, height:"50vh" }} />
      </div>

    </div>
  )
}

export default Home