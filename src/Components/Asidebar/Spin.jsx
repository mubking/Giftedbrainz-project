"use client";
import React, { useState } from "react";

function Spin() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationDegree, setRotationDegree] = useState(0);
  const [finalDegree, setFinalDegree] = useState(0);

  const startSpin = () => {
    setIsSpinning(true);

    // Generate a random rotation degree between 0 and 359 degrees.
    const randomDegree = Math.floor(Math.random() * 360);

    // Calculate the final degree by adding the random degree to the current rotation.
    const newFinalDegree = finalDegree + randomDegree;

    // Set the final degree as the new rotation degree.
    setFinalDegree(newFinalDegree);

    // Add a delay to stop the spin after a certain duration (e.g., 5 seconds).
    setTimeout(() => {
      setIsSpinning(false);
    }, 5000); // Adjust the duration as needed.
  };
  const ulStyles = {
    width: "25em",
    height: "25em",
    border: "10px solid black",
    margin: "1em auto",
    borderRadius: "50%",
    listStyle: "none",
    overflow: "hidden",
    transition: isSpinning ? "transform 5s ease-in-out" : "none",
    transform: isSpinning
      ? `rotate(${finalDegree}deg)`
      : `rotate(${finalDegree % 360}deg)`, // Ensure finalDegree is within 0-359 degrees.
  };
  return (
    <div>
      <h1>Spin the wheel</h1>
      <div
        className="w-0 h-0 absolute"
        style={{
          borderLeft: "15px solid transparent",
          borderRight: "15px solid transparent",
          borderTop: "50px solid black",
          left: "58%",
          top: "-20px",
          zIndex: "1",
        }}
      ></div>
      <ul className="relative p-0" style={ulStyles}>
        <li
          className="bg-black transform text-white rotate-0 skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%]"
          style={{ transformOrigin: "0% 100%" }}
        >
          <div
            className="text capitalize absolute  "
            style={{
              left: "-100%",
              width: "200%",
              height: "200%",
              textAlign: "center",
              transform: "skewY(60deg) rotate(15deg)",
              padding: "20px",
              cursor: "pointer",
              fontSize: "18px",
              display: "block",
            }}
            contentEditable="true"
            spellCheck="false"
          >
            empty
          </div>
        </li>

        <li
          className="bg-[red]  transform    skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%]"
          style={{ rotate: "30deg", transformOrigin: "0% 100%" }}
        >
          <div
            className="text capitalize  absolute "
            style={{
              left: "-100%",
              width: "200%",
              height: "200%",
              textAlign: "center",
              transform: "skewY(60deg) rotate(15deg)",
              padding: "20px",
              cursor: "pointer",
              fontSize: "18px",
              display: "block",
            }}
            contentEditable="true"
            spellCheck="false"
          >
            empty
          </div>
        </li>
        <li
          className="bg-[#2E3192]  transform  skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] "
          style={{ rotate: "60deg", transformOrigin: "0% 100%" }}
        >
          <div
            className="text capitalize  absolute"
            style={{
              left: "-100%",
              width: "200%",
              height: "200%",
              textAlign: "center",
              transform: "skewY(60deg) rotate(15deg)",
              padding: "20px",
              cursor: "pointer",
              fontSize: "18px",
              display: "block",
            }}
            contentEditable="true"
            spellCheck="false"
          >
            50 pts
          </div>
        </li>
        <li
          className="bg-[red] transform  skew-y-[-60deg]  overflow-hidden absolute top-0 right-0 w-[50%] h-[50%]"
          style={{ rotate: "90deg", transformOrigin: "0% 100%" }}
        >
          <div
            className="text capitalize absolute "
            contentEditable="true"
            style={{
              left: "-100%",
              width: "200%",
              height: "200%",
              textAlign: "center",
              transform: "skewY(60deg) rotate(15deg)",
              padding: "20px",
              cursor: "pointer",
              fontSize: "18px",
              display: "block",
            }}
            spellCheck="false"
          >
            250 pts
          </div>
        </li>
        <li
          className="bg-[#F7941D] transform  skew-y-[-60deg]  overflow-hidden absolute top-0 right-0 w-[50%] h-[50%]"
          style={{ rotate: "120deg", transformOrigin: "0% 100%" }}
        >
          <div
            className="text capitalize absolute "
            style={{
              left: "-100%",
              width: "200%",
              height: "200%",
              textAlign: "center",
              transform: "skewY(60deg) rotate(15deg)",
              padding: "20px",
              cursor: "pointer",
              fontSize: "18px",
              display: "block",
            }}
            contentEditable="true"
            spellCheck="false"
          >
            5 pts{" "}
          </div>
        </li>
        <li
          className="bg-[red] transform  skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] "
          style={{ rotate: "150deg", transformOrigin: "0% 100%" }}
        >
          <div
            className="text capitalize  absolute"
            style={{
              left: "-100%",
              width: "200%",
              height: "200%",
              textAlign: "center",
              transform: "skewY(60deg) rotate(15deg)",
              padding: "20px",
              cursor: "pointer",
              fontSize: "18px",
              display: "block",
            }}
            contentEditable="true"
            spellCheck="false"
          >
            empty
          </div>
        </li>
        <li
          className="bg-[#2E3192] transform  skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] "
          style={{ rotate: "180deg", transformOrigin: "0% 100%" }}
        >
          <div
            className="text capitalize  absolute"
            style={{
              left: "-100%",
              width: "200%",
              height: "200%",
              textAlign: "center",
              transform: "skewY(60deg) rotate(15deg)",
              padding: "20px",
              cursor: "pointer",
              fontSize: "18px",
              display: "block",
            }}
            contentEditable="true"
            spellCheck="false"
          >
            50 pts
          </div>
        </li>

        <li
          className="bg-[black] text-white transform  skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] "
          style={{ rotate: "210deg", transformOrigin: "0% 100%" }}
        >
          <div
            className="text capitalize  absolute"
            style={{
              left: "-100%",
              width: "200%",
              height: "200%",
              textAlign: "center",
              transform: "skewY(60deg) rotate(15deg)",
              padding: "20px",
              cursor: "pointer",
              fontSize: "18px",
              display: "block",
            }}
            contentEditable="true"
            spellCheck="false"
          >
            empty
          </div>
        </li>
        <li
          className="bg-[red] transform  skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] "
          style={{ rotate: "240deg", transformOrigin: "0% 100%" }}
        >
          <div
            className="text capitalize absolute "
            style={{
              left: "-100%",
              width: "200%",
              height: "200%",
              textAlign: "center",
              transform: "skewY(60deg) rotate(15deg)",
              padding: "20px",
              cursor: "pointer",
              fontSize: "18px",
              display: "block",
            }}
            contentEditable="true"
            spellCheck="false"
          >
            100 pts
          </div>
        </li>
        <li
          className="bg-[blue] transform  skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] "
          style={{ rotate: "270deg", transformOrigin: "0% 100%" }}
        >
          <div
            className="text capitalize  absolute"
            style={{
              left: "-100%",
              width: "200%",
              height: "200%",
              textAlign: "center",
              transform: "skewY(60deg) rotate(15deg)",
              padding: "20px",
              cursor: "pointer",
              fontSize: "18px",
              display: "block",
            }}
            contentEditable="true"
            spellCheck="false"
          >
            empty
          </div>
        </li>
        <li
          className="bg-[red] transform  skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] "
          style={{ rotate: "300deg", transformOrigin: "0% 100%" }}
        >
          <div
            className="text capitalize absolute "
            style={{
              left: "-100%",
              width: "200%",
              height: "200%",
              textAlign: "center",
              transform: "skewY(60deg) rotate(15deg)",
              padding: "20px",
              cursor: "pointer",
              fontSize: "18px",
              display: "block",
            }}
            contentEditable="true"
            spellCheck="false"
          >
            empty
          </div>
        </li>
        <li
          className="bg-[#F7941D] transform  skew-y-[-60deg] overflow-hidden absolute top-0 right-0 w-[50%] h-[50%] "
          style={{ rotate: "330deg", transformOrigin: "0% 100%" }}
        >
          <div
            className="text capitalize absolute "
            style={{
              left: "-100%",
              width: "200%",
              height: "200%",
              textAlign: "center",
              transform: "skewY(60deg) rotate(15deg)",
              padding: "20px",
              cursor: "pointer",
              fontSize: "18px",
              display: "block",
            }}
            contentEditable="true"
            spellCheck="false"
          >
            25 pts
          </div>
        </li>
      </ul>
      <div
        className=" w-0 h-0 absolute"
        style={{
          borderLeft: " 15px solid transparent",
          borderRight: " 15px solid transparent",
          borderTop: " 50px solid black",
          left: "58%",
          top: "-20px",
          zIndex: "1",
        }}
      ></div>

      <div className="flex justify-center items-center mt-5">
        <button
          className="inline-flex ite text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={startSpin}
        >
          Spin now
        </button>
      </div>
    </div>
  );
}

export default Spin;
