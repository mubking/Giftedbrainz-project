"use client";
import React, { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

function Course() {
  const accordionData = [
    {
      title: '1. UI/UX Design',
      content: 'You’ll be taught by our experienced and qualified teachers, and get updates through our website, telegram page, and newsletters.',
    },
    {
      title: '2. backend web development',
      content: '',
    },
    {
      title: '3. front-end web development',
      content: '',
    },
    {
      title: '4. page management',
      content: '',
    },
    {
      title: '5. advance cryptocurrency',
      content: '',
    },
    {
      title: '6. quantum mechanics',
      content: '',
    },
    {
      title: '7. graphics design',
      content: '',
    },
    {
      title: '8. african health and herb methodology',
      content: '',
    },
    {
      title: '9. true africa history',
      content: '',
    },
    {
      title: '10.skin care production',
      content: '',
    },
    {
      title: '11.deFi & nFTs',
      content: '',
    },
    // Add more accordion data as needed
  ];

  const AccordionItem = ({ title, content, index }) => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const toggleContentVisibility = () => {
      setIsContentVisible(!isContentVisible);
    };

    return (
      <div key={index} className='bg-[blue] w-full md:w-[40%] p-3 mb-5'>
        <div className="flex flex-row justify-between items-center">
          <div className='text-white'>{title}</div>
          <div onClick={toggleContentVisibility}>
            {isContentVisible ? (
              <AiOutlineMinusCircle size={30} color="White" />
            ) : (
              <AiOutlinePlusCircle size={30} color="White" />
            )}
          </div>
        </div>
        {isContentVisible && (
          <div className="content">
            <div className="text-white text-opacity-50 font-semibold font-['Poppins'] capitalize">{content}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='w-full p-5 min-h-screen flex items-center flex-col'>
      <div className="text-black text-center five w-[20%] text-2xl font-semibold font-['Poppins'] capitalize" style={{ border: "2px solid black" }}>available courses</div>
      <div className='flex flex-wrap w-full gap-5 justify-center items-center mt-10 flex-col md:flex-row'>
        {accordionData.map((item, index) => (
          <AccordionItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Course;
