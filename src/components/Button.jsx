//import React, { Component } from "react";

const Button = (props) => {
  return (
    <div className="text-center bg-gray-200 pb-5 dark:bg-neutral-900 transition-all">
      <button
        className=" bg-gray-300 hover:bg-gray-500 text-gray-900 hover:text-white text-sm font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-700 rounded-lg w-1/3"
        onClick={props.onClick}
      >
        Load More
      </button>
    </div>
  );
};
export default Button;
