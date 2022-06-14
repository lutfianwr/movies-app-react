import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-5 my-5">
          <img
            className="w-full h-auto"
            src={this.props.img}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              {this.props.title}
            </div>
          </div>
          <div className="px-6 py-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #animation
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #family
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #action
            </span>
          </div>
          <div>
            <button className="bg-amber-500 hover:bg-amber-400 text-white text-xs py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500  w-full">
              Add to Favorite
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
