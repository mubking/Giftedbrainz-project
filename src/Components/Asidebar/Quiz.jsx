import React from 'react'

function Quiz() {
    const tasks = [
        {  name:"advance in cryptocurrency", info: "", play: "" },
        {  name: 'UI/UX Design', info:"", play:"" },
        {  name: ' chioma chibuzor', info:"", play:"" },
        {  name: 'bello dammy', info:"", play:"" },
        {  name: 'amari chima', info:"", play:"" },
        {  name: 'diallo aadan', info:"", play:"" },
        {  name: 'diallo aadan', info:"", play:"" },
        {  name: 'diallo aadan', info:"", play:"" },
        {  name: 'diallo aadan', info:"", play:"" },
        {  name: 'diallo aadan', info:"", play:"" },
        {  name: 'diallo aadan', info:"", play:"" },
      ];
  return (
    <div className='p-5 w-full h-screen bg-white'>
        <div className=" text-black text-3xl font-semibold capitalize">play and win big time.</div>
        <div className="flex items-center  justify-between mt-10 ">
        <div className=" text-black text-opacity-50 text-lg font-semibold capitalize">test your knowledge with quiz and <br /> earn SQP points.
        </div>
        <div>
        <a href="" className='font-semibold capitalize'>See All....</a>
        </div>
        </div>
        <div className="overflow-x-auto mt-10">
        <table className="min-w-full">
            <thead>
            <tr>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                
                </th>
            
                {/* <th className="px-6 py-3  text-xs font-medium text-center text-gray-500 uppercase tracking-wider">
                name 
                </th> */}
                {/* <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                totaled answerecd
                </th> */}
                {/* <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                reward
                </th> */}
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[gray]">
            {tasks.map((task, index) => (
                <tr key={index} className="hover:bg-gray-100">
                {/* <td className="px-6 py-4 whitespace-nowrap text-center">{task.number}</td> */}
                <td className="px-6 py-4 whitespace-nowrap ">{task.name}</td>
                <td className="px-6 py-4 whitespace-nowrap capitalize ">{task.info} 
                <button className="border border-[blue] hover:border-red-700 bg-white text-[black] hover:text-black font-semibold py-2 px-4 rounded-full">
                more info
                </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap ">{task.play} <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                play now 
                </button> </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div> 
    </div>
  )
}

export default Quiz