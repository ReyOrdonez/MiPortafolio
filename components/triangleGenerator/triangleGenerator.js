"use client";

import { useEffect, useMemo, useState } from "react";
import Triangle from "../triangleComponent/triangle";

const TriangleGenerator = ({ trianglesNumber }) => {
  const initialArray = useMemo(() => {
    return Array(trianglesNumber).fill(null);
  }, [trianglesNumber]);

  const [triangleArray, setTriangleArray] = useState(initialArray);
  useEffect(() => {
    const generator = setInterval(() => {
      setTriangleArray((prev) => [...prev, 0]);
    }, 20000);
    return () => {
      clearInterval(generator);
    };
  }, []);
  return (
    <div className="fixed w-[100vw] pointer-events-none top-[-5%]">
      {triangleArray.map((_, key) => (
        <Triangle key={key} />
      ))}
    </div>
  );
};

export default TriangleGenerator;
