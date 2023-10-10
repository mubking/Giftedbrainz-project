import React from 'react'

function Refferal() {
    const tasks = [
        { number: 1, name:"Samuel david", totalAnswered: 10, reward: 50 },
        { number: 2, name: 'adebayo adeniyi', totalAnswered: 8, points: 40 },
        { number: 3, name: ' chioma chibuzor', totalAnswered: 12, points: 60 },
        { number: 4, name: 'bello dammy', totalAnswered: 12, points: 60 },
        { number: 5, name: 'amari chima', totalAnswered: 12, points: 60 },
        { number: 6, name: 'diallo aadan', totalAnswered: 12, points: 60 },
      ];
  return (
    <div className='w-full min-h-screen bg-[white] p-5'>
        <h1 className='capitalize text-2xl'>Refferal history</h1>
        <div className=" text-black text-opacity-50 text-lg mt-5 font-semibold capitalize">manage your friends transactions with <br /> ease.</div>
        <div className="overflow-x-auto mt-10">
        <table className="min-w-full divide-y divide-red-500">
            <thead>
            <tr>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                
                </th>
            
                <th className="px-6 py-3  text-xs font-medium text-center text-gray-500 uppercase tracking-wider">
                name 
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                totaled answerecd
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                reward
                </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[gray]">
            {tasks.map((task, index) => (
                <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-center">{task.number}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{task.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{task.totalAnswered}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">{task.reward} pts</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div> 
    </div>
  )
}

export default Refferal