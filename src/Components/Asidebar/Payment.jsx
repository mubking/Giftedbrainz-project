import React from 'react'

function Payment() {
  return (
    <div className=' w-full h-screen p-5'>
        <div className=" text-black text-3xl font-semibold capitalize">payment method</div>
        <div className="- text-black text-opacity-50 text-lg mt-4 font-semibold capitalize">select your payment method and Proceed <br /> with the widrawals.</div>

        <div className="flex gap-10  mt-10">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Paystack
            </button>
            <button class="inline-flex text-white bg-zinc-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Bank  Transfer
            </button>
        </div>
    </div>
  )
}

export default Payment