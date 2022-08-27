//import React, { Component } from "react";

const Card = (props) => {
  return (
    <>
      <div className="container grow flex flex-col justify-between shadow-xl">
        <div className="content cursor-pointer" onClick={props.onClickItem}>
          <div>
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
            onClick={props.onClickFavorite}
            className="bg-red-400 text-red-100 hover:bg-red-200 text-xs py-2 px-4 w-full border-b-4 border-red-700 hover:border-red-300 hover:text-black"
          >
            &#x2764; Favorite
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
