import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div className="justify-items-center bg-gray-200 p-5 ">
        <button
          className="bg-gray-500 hover:bg-gray-400 text-gray-100 hover:text-white text-xs py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded-lg w-full"
          onClick={this.props.onClick}
        >
          Load More
        </button>
      </div>
    );
  }
}
