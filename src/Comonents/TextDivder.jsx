import React from "react";

const TextDivder = ({text}) => {
  return (
    <div className="flex items-center w-full h-6 gap-x-4 mt-4">
      <h1 className="text-3xl font-bold">{text}</h1>
      <hr className="bg-black w-3/6 h-1 mt-1" />
    </div>
  );
};

export default TextDivder;
