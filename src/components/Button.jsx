//import React, { Component } from "react";

const Button = (props) => {
  return (
    <div className="text-center bg-gray-200 p-5 dark:bg-neutral-800 transition-all">
      <button
        className=" bg-gray-500 hover:bg-gray-400 text-gray-100 hover:text-white text-xs py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded-lg w-1/3"
        onClick={props.onClick}
      >
        Load More
      </button>
    </div>
  );
};
export default Button;
