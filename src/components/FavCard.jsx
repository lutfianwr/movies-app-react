//import React, { Component } from "react";

const FavCard = (props) => {
  return (
    <>
      <div className="container grow flex flex-col justify-between shadow-xl">
        <div>
          <div className="content cursor-pointer" onClick={props.onClickItem}>
            <img
              className="max-w-full md:h-96"
              src={
                props.img
                  ? `https://image.tmdb.org/t/p/w500${props.img}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={props.img}
            />
          </div>

          <div className="p-2 dark:bg-neutral-900 dark:text-gray-200 bg-white h-24">
            <div className="font-bold text-xl text-center">{props.title}</div>
          </div>
        </div>
        <div>
          <button
            onClick={props.onClickRemove}
            className="bg-slate-500 hover:bg-slate-300 text-slate-100 text-xs py-2 px-4 w-full border-b-4 border-slate-700 hover:border-slate-400 hover:text-black"
          >
            🆇 Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default FavCard;
