"use client";

import { LightbulbOff, Lightbulb } from "lucide-react";
import { useState } from "react";

const ToggleThemeButtonMobile = ({ className }) => {
  const [light, setLight] = useState(false);

  return (
    <div className={`${className} flex items-center mt-5 opacity-85`}>
      {light == false ? (
        <LightbulbOff className="h-7 w-7 mr-[2px]" />
      ) : (
        <Lightbulb className="h-7 w-7 mr-[2px]" />
      )}

      <button
        onClick={() => {
          setLight(!light);
        }}
        className={`w-20 mr-3 bg-myGray border-solid border-white border-[2px] rounded-full p-1`}
      >
        <div
          className={`w-5 h-5 bg-myGreen rounded-full transition-margin ease-in duration-[80ms] ${
            light == true ? "ml-0" : "ml-12"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default ToggleThemeButtonMobile;
