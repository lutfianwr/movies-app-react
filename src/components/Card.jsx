import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <>
        <div className="container grow flex flex-col justify-between rounded-lg bg-gray-200">
          <img
            //max-w-sm rounded overflow-hidden shadow-lg mx-5 my-5
            className="w-fit h-auto rounded-t-lg"
            src={`https://image.tmdb.org/t/p/w500${this.props.img}`}
            //src={this.props.img}
            alt={this.props.img}
          />
          <div className="py-4">
            <div className="font-bold text-xl mb-2 text-center">
              {this.props.title}
            </div>
          </div>
          <div className="">
            <button className="bg-amber-500 hover:bg-amber-400 text-white text-xs py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 w-full rounded-b-lg">
              Add to Favorite
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
