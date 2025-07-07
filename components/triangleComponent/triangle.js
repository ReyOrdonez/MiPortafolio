"use client";
import { useState, useEffect } from "react";

const Triangle = () => {
  const [position, setPosition] = useState(null);
  const [duration, setDuration] = useState(20);
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    setPosition(Math.random() * 90 + 1);
    setDuration(Math.random() * 20 + 7);
    setDelay(`${Math.random() * 10}s`);
  }, []);

  return (
    <div
      className="z-[-1] absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-myGreen"
      style={{
        animation: `fall ${duration}s linear infinite`,
        left: `${position}%`,
        animationDelay: delay,
      }}
    ></div>
  );
};

export default Triangle;
