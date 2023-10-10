"use client"
import React, { useEffect, useState } from 'react';

function Setting() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    let input = document.querySelector('input');

    input.addEventListener('change', () => {
      const file = input.files[0];
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
      }
    });
  }, []); 

  return (
    <div className="p-5 w-full min-h-screen ">
      <div className="text-black font-semibold capitalize text-3xl">settings</div>
      <div className="text-black text-opacity-50 mt-5 text-xl font-semibold capitalize">
        manage all your settings in here.
      </div>

      <img
        src={selectedImage || 'placeholder-image-url.jpg'} 
        alt=""
        className="h-[150px] w-[150px] rounded-full object-cover mt-10 bg-[#ddd]"
      />
      <input type="file" id="file" name="file" className='mt-10' />

      <div className=" mt-2 flex flex-col gap-3 ">
      <label htmlFor="username">Username</label>
      <div className="flex items-center gap-5">
        <input
            type="text"
            className="w-[50%] h-[8vh] px-4 bg-zinc-300 bg-opacity-40  text-blue-600  rounded-[100px]"
        />

        <p > <a href="" className='text-[#5852FE]'>Edit</a></p>
       </div>

      </div>
      <div className=" mt-2 flex flex-col gap-3 ">
      <label htmlFor="username">Your Email</label>
      <div className="flex items-center gap-5">
        <input
            type="text"
            className="w-[50%] h-[8vh] px-4 bg-zinc-300 bg-opacity-40 rounded-[100px]  text-blue-600  focus:border-green-500 "
        />
        <p > <a href="" className='text-[#5852FE]'>Edit</a></p>
       </div>
      </div>
      <div className="btn flex justify-between mt-10">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Save
        </button>
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Log Out
        </button>
      </div>
    </div>
  );
}

export default Setting;
