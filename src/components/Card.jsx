import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <>
        <div className="container grow flex flex-col justify-between rounded-lg shadow-xl">
          <div>
            <img
              className="max-w-full h-auto rounded-t-lg"
              src={
                this.props.img
                  ? `https://image.tmdb.org/t/p/w500${this.props.img}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={this.props.img}
            />
            <button className="bg-rose-500 hover:bg-rose-400 text-rose-100 hover:text-white text-xs py-2 px-4 w-full">
              Add to Favorite
            </button>
          </div>

          <div className="py-4 px-2 bg-white h-full">
            <div className="font-bold text-xl mb-2 text-center">
              {this.props.title}
            </div>
          </div>

          <div className="">
            <button
              onClick={this.props.onClickItem}
              className="bg-amber-500 hover:bg-amber-400 text-amber-100 hover:text-white text-xs py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 w-full rounded-b-lg"
            >
              Detail
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
