import React from "react";

interface IProps {
  text: string;
  onClick: () => void;
}

const SolidButton = ({ text = "", onClick }: IProps) => {
  console.log(onClick, 'onClick method');
  return (
    <button
      type="button"
      className="p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SolidButton;
