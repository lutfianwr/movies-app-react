import React, { Component } from "react";

export class header extends Component {
  render() {
    return (
      <>
        <nav className="sticky top-0 flex items-center justify-between flex-wrap bg-amber-500 p-4">
          <div className="flex items-center flex-shrink-0 text-white mr-4">
            <a href="www.youtube.com">
              <span className="font-semibold text-xl tracking-tight">
                LayarTancep21
              </span>
            </a>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-amber-200 border-amber-300 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-amber-200 hover:text-white mr-4"
              >
                Home
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-amber-200 hover:text-white mr-4"
              >
                My Movies
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-amber-200 hover:text-white"
              >
                My Favorite
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default header;
