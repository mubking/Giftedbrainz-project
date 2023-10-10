import React from "react";
import { AiOutlineSearch } from "react-icons/Ai";
import { IoNotificationsOutline } from "react-icons/io5";
function Dash() {
  const tasks = [
    { number: 1, task: ' what is UI/UX Design', totalAnswered: 10, points: 50 },
    { number: 2, task: 'principle of design', totalAnswered: 8, points: 40 },
    { number: 3, task: 'interaction design', totalAnswered: 12, points: 60 },
    { number: 4, task: 'user research', totalAnswered: 12, points: 60 },
    { number: 5, task: 'prototype', totalAnswered: 12, points: 60 },
    { number: 6, task: 'data analysis', totalAnswered: 12, points: 60 },
  ];
  return (
    
    <>
      <div className="w-full min-h-screen bg-[white] p-5 ">
        <div className="flex flex-row  items-center gap-10">
          <h1 className="text-3xl">Dashboard</h1>

          <div className="field flex w-full ">
            <div className="fas flex justify-center items-center">
              <AiOutlineSearch style={{ height: "100%", width: "100%" }} />
            </div>
            <input
              type="text"
              placeholder=" enter your username "
              className="w-full"
            />
          </div>
          <IoNotificationsOutline style={{ fontSize: "50px", width: "" }} />
          <img className="h-12" src="/Ellipse.png" alt="" />
        </div>
        <div className="mt-10 gap-5 flex ">
          <div className="one bg-[blue] w-[30%] h-40 text-center text-white two  ">
            <h2 className="mt-5 text-2xl">Total Earnings</h2>
            <h1 className="text-2xl">#203,978</h1>
          </div>
          <div className="one bg-[#34A853] w-[30%]  h-40 text-center text-white two ">
            <h2 className="mt-5 text-2xl">Total Points</h2>
            <h1 className="text-2xl">2000SQP</h1>
          </div>
          <div className="one bg-[#f5761A] w-[30%] h-40 text-center text-white  two">
            <h2 className="mt-5 text-2xl">Referrals Earnings</h2>
            <h1 className="text-2xl">#12,000</h1>
          </div>
        </div>
          <h1 className=" capitalize mt-10 text-2xl bold ">earnings history</h1>
          <div className="overflow-x-auto mt-10">
      <table className="min-w-full divide-y divide-red-500">
        <thead>
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Number
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Task
            </th>
            <th className="px-6 py-3  text-xs font-medium text-center text-gray-500 uppercase tracking-wider">
              Total Answered
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Points
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-[gray]">
          {tasks.map((task, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-center">{task.number}</td>
              <td className="px-6 py-4 whitespace-nowrap capitalize text-center">{task.task}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{task.totalAnswered}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center">{task.points} pts</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      </div>
    </>
  );
}

export default Dash;
