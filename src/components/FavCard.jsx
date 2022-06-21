//import React, { Component } from "react";

const FavCard = (props) => {
  return (
    <>
      <div className="container grow flex flex-col justify-between rounded-lg shadow-xl">
        <div>
          <img
            onClick={props.onClickItem}
            className="max-w-full h-auto rounded-t-lg cursor-pointer"
            src={
              props.img
                ? `https://image.tmdb.org/t/p/w500${props.img}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={props.img}
          />

          <button
            onClick={props.onClickItem}
            className="bg-yellow-500 hover:bg-yellow-400 text-amber-100 hover:text-white text-xs py-2 px-4 w-full "
          >
            Detail
          </button>
        </div>

        <div className="py-4 px-2 dark:bg-neutral-600 dark:text-gray-200 bg-white h-full">
          <div className="font-bold text-xl mb-2 text-center">
            {props.title}
          </div>
        </div>

        <div className="">
          <button
            onClick={props.onClickRemove}
            className="bg-slate-500 hover:bg-slate-400 text-slate-100 hover:text-white text-xs py-2 px-4 w-full border-b-4 border-slate-700 hover:border-slate-500 rounded-b-lg"
          >
            Remove from Favorite
          </button>
        </div>
      </div>
    </>
  );
};

export default FavCard;
