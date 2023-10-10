"use client"
import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Competition() {
  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 0, 
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 0,
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 1,
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 1,
    },
    {
      question: 'Which gas do plants absorb from the atmosphere?',
      options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Methane'],
      correctAnswer: 0,
    },
    {
      question: 'Which gas do plants absorb from the atmosphere?',
      options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Methane'],
      correctAnswer: 0,
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFirstQuestion, setIsFirstQuestion] = useState(true);
  const timer = 60; // 60 seconds per question
  const [remainingTime, setRemainingTime] = useState(timer);

  const handleAnswerSubmit = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 10); // Update the score by 10 for each correct answer
    }
  
    const nextQuestion = currentQuestion + 1;
  
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setIsFirstQuestion(false);
      startTimer();
    } else {
      toast.success('Quiz completed! Your total score: ' + score + '/' + quizData.length * 10);
    }
  };
  


  const startTimer = () => {
    setRemainingTime(timer);
  };



  const handleNext = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsFirstQuestion(false);
      startTimer();
    } else {
      toast.success(`Quiz completed! Your total score: ${score}/${quizData.length * 10}`);
    }
  };
  
  

  useEffect(() => {
    let timerInterval;
  
    if (remainingTime > 0) {
      timerInterval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
  
      // Moved handleAnswerSubmit logic inside useEffect
      if (selectedAnswer !== null) {
        // Submit the answer and update the score
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
          setScore(score + 10);
        }
  
        const nextQuestion = currentQuestion + 1;
  
        if (nextQuestion < quizData.length) {
          setCurrentQuestion(nextQuestion);
          setSelectedAnswer(null);
          setIsFirstQuestion(false);
          startTimer();
        } else {
          toast.success(
            'Quiz completed! Your total score: ' + score + '/' + quizData.length * 10
          );
        }
      } else {
        // Handle the case where the user did not select an answer in time
        handleNext();
      }
    }
  
    return () => clearInterval(timerInterval);
  }, [remainingTime, selectedAnswer, score, currentQuestion, quizData]);
  
  
 return (
    <div className=' flex flex-col h-screen w-full  justify-center items-center  '>
      <div className="text-center text-black text-[25px] font-semibold font-['Poppins'] capitalize">question 1 - 15</div>
      <div className="text-center text-black  text-opacity-60 text-2xl font-semibold font-['Poppins'] capitalize">note: choose your answer below and <br /> press continue once done.</div>
      <div className="w-[70%] h-[40vh] bg-zinc-300 rounded-[20px] text-center flex flex-col items-center justify-center" >
      <div className='text-2xl'>
      Question {currentQuestion + 1} of {quizData.length}
      </div>  
      <div className='text-3xl'>
      {quizData[currentQuestion].question}
      </div>    
      </div>
      
      <div className="flex flex-row w-full justify-center items-center mt-10 gap-5">
  <div className="me w-[34%] h-[10vh] bg-zinc-300 rounded-[20px]">
    <div
      className=""
      onClick={() => setSelectedAnswer(0)} 
      style={{
        cursor: 'pointer',
        padding: '20px',
        borderRadius: '20px',
        backgroundColor: selectedAnswer === 0 ? 'lightblue' : 'inherit',
      }}
    >
      A. {quizData[currentQuestion].options[0]}
    </div>
  </div>
  <div className="me w-[34%] h-[10vh] bg-zinc-300 rounded-[20px] ">
    <div
      className=""
      onClick={() => setSelectedAnswer(1)} // Select option B (index 1)
      style={{
        cursor: 'pointer',
        padding: '20px',
        borderRadius: '20px',
        backgroundColor: selectedAnswer === 1 ? 'lightblue' : 'inherit',
      }}
    >
      B. {quizData[currentQuestion].options[1]}
    </div>
  </div>
</div>




     <div className="flex flex-row w-full justify-center items-center mt-10 gap-5">
  <div className="me w-[34%] h-[10vh] bg-zinc-300 rounded-[20px]">
    <div
      className=""
      onClick={() => setSelectedAnswer(2)} 
      style={{
        cursor: 'pointer',
        padding: '20px',
        borderRadius: '20px',
        backgroundColor: selectedAnswer === 2 ? 'lightblue' : 'inherit',
      }}
    >
      C. {quizData[currentQuestion].options[2]}
    </div>
  </div>
  <div className="me w-[34%] h-[10vh] bg-zinc-300 rounded-[20px]">
    <div
      className=""
      onClick={() => setSelectedAnswer(3)} 
      style={{
        cursor: 'pointer',
        padding: '20px',
        borderRadius: '20px',
        backgroundColor: selectedAnswer === 3 ? 'lightblue' : 'inherit',
      }}
    >
      D. {quizData[currentQuestion].options[3]}
    </div>
  </div>
</div>
<div className="text-xl mt-5">
  Remaining Time: {remainingTime} seconds
</div>
<div className="flex justify-between mt-5 gap-5">
  {/* <button
    className={`inline-flex text-white ${
      isFirstQuestion ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-500'
    } border-0 py-2 px-32 focus:outline-none ${
      isFirstQuestion ? 'hover:bg-gray-300' : 'hover:bg-indigo-600'
    } rounded text-lg`}
    onClick={handlePrevious}
    disabled={isFirstQuestion}
  >
    Previous
  </button> */}
  <button
    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-32 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    onClick={handleNext}
  >
    Next
  </button>
  <ToastContainer />


</div>

   

     </div>
    
  )
}

export default Competition