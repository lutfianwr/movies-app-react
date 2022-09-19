//import React, { Component } from "react";

const FavCard = (props) => {
  return (
    <>
      <div className="container grow flex flex-col justify-between shadow-xl">
        <div>
          <div className="content cursor-pointer" onClick={props.onClickItem}>
            <div className="relative">
              <div className="absolute bg-white rounded-full h-7 w-8 p-1 m-2 font-semibold text-center text-sm dark:bg-neutral-700 dark:text-white">
                <div>{props.votes}</div>
              </div>
              <img
                className="max-w-full md:max-h-96 bg-white dark:bg-neutral-900 rounded-t-lg"
                src={
                  props.img
                    ? `https://image.tmdb.org/t/p/w500${props.img}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={props.img}
              />
            </div>
          </div>

          <div className="p-2 dark:bg-neutral-900 dark:text-gray-200 bg-white max-h-24">
            <div className="font-bold text-lg text-center">{props.title}</div>
            <div className="font-semibold text-center text-xs">
              {props.year.substring(0, 4)}
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={props.onClickRemove}
            className="bg-slate-500 hover:bg-slate-300 text-slate-100 text-sm py-2 px-4 w-full border-b-4 border-slate-700 hover:border-slate-400 hover:text-black rounded-b-lg"
          >
            🆇 Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default FavCard;
