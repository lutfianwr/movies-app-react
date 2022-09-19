//import React, { Component } from "react";

const Card = (props) => {
  return (
    <>
      <div className="container grow flex flex-col justify-between shadow-xl dark:bg-neutral-800 dark:text-gray-200 bg-white rounded-lg">
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
          <div className="p-2 max-h-24">
            <div className="font-bold text-lg text-center">{props.title}</div>
            <div className="font-semibold text-center text-xs">
              {props.year.substring(0, 4)}
            </div>
          </div>
        </div>
        {!props.isFavorite ? (
          <button
            onClick={props.onClickFavorite}
            className="bg-red-500 text-red-100 hover:bg-white text-sm py-2 px-4 w-full border-b-4 border-red-700 hover:border-red-300 hover:text-red-500 rounded-b-lg dark:hover:bg-neutral-800 dark:hover:border-black"
          >
            &#x2764; Add to Favorite
          </button>
        ) : (
          <button
            onClick={props.onClickRemove}
            className="bg-red-700 text-red-100 hover:bg-white text-sm py-2 px-4 w-full border-b-4 border-red-900 hover:border-red-300 hover:text-red-500 rounded-b-lg dark:hover:bg-neutral-800 dark:hover:border-black"
          >
            🆇 Remove from Favorite
          </button>
        )}
      </div>
    </>
  );
};

export default Card;
