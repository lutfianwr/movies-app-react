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
            className="bg-amber-500 hover:bg-amber-400 text-amber-100 hover:text-white text-xs py-2 px-4 w-full "
          >
            Detail
          </button>
        </div>

        <div className="py-4 px-2 bg-white h-full">
          <div className="font-bold text-xl mb-2 text-center">
            {props.title}
          </div>
        </div>

        <div className="">
          <button
            onClick={props.onClickFavorite}
            className="bg-rose-500 hover:bg-rose-400 text-rose-100 hover:text-white text-xs py-2 px-4 w-full border-b-4 border-rose-700 hover:border-rose-500 rounded-b-lg"
          >
            Remove from Favorite
          </button>
        </div>
      </div>
    </>
  );
};

export default FavCard;
