"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [statusCounter, setStatusCounter] = useState("Finish" | "Start");
  const [colorDynamic, setColorDynamic] = useState(false);

  const incrementCounter = () => {
    counter < 10 && setCounter((prevState) => prevState + 1);
    counter === 10 && console.log(setStatusCounter("Finish"));
  };

  const deccrementCounter = () => {
    counter > 0 && setCounter((prevState) => prevState - 1);
    counter === 0 && console.log(setStatusCounter("Start"));
  };

  const displayAppCounter = () => {
    setShowCounter((prevState) => !prevState);
    console.log(showCounter);
  };

  const dynamicBackgroundColor = () => {
    setColorDynamic((prevState) => !prevState);
  };
  return (
    <div className="h-screen flex gap-4 flex-col justify-center items-center bg-black text-white">
      <h1>Hello World!</h1>
      <p>Hello It's me Riky Adi Putra</p>
      <div className="bg-white p-6 w-[300px] h-[300px] rounded-2xl">
        <div
          className={`${
            colorDynamic ? "bg-black text-white" : "bg-white text-black"
          } h-full flex items-center justify-center rounded-2xl`}
        >
          Color Dynamic
        </div>
        <div className="flex justify-center">
          <button
            onClick={dynamicBackgroundColor}
            className="text-black border-solid border-2 border-black text-center"
          >
            Set Color Background
          </button>
        </div>
      </div>
      <div>Show App Counter</div>
      <button
        onClick={displayAppCounter}
        className="border-solid border-2 border-white p-2 rounded-sm font-monts font-bold text-[20px]"
      >
        Display App Counter
      </button>
      {showCounter ? (
        <div className="bg-white text-black p-4 rounded-lg w-[300px]">
          <h1 className="text-center">{statusCounter}</h1>
          <div className="flex justify-between items-center">
            <button
              onClick={incrementCounter}
              className="p-4 text-[25px] font-bold bg-blue-500 rounded-lg"
            >
              +
            </button>
            {counter}
            <button
              onClick={deccrementCounter}
              className="p-4 text-[25px] font-bold bg-blue-500 rounded-lg"
            >
              -
            </button>
          </div>
        </div>
      ) : (
        <div>App Counter Not Display</div>
      )}
    </div>
  );
}
