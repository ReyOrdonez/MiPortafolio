"use client";

const TechnologyButton = ({ name, className }) => {
  return (
    <a
      className={`shadow-custom border rounded-[4px] px-5 py-1 border-gray-300 hover:bg-zinc-600 ${className}`}
    >
      <label>{name}</label>
    </a>
  );
};

export default TechnologyButton;
