import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/context";
import React, { useContext } from "react";
import { TbMoonStars, TbSun } from "react-icons/tb";

const Header = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = (mode) => {
    setTheme(mode);
  };

  return (
    <>
      <nav className="z-50 sticky top-0 flex items-center justify-between flex-wrap bg-neutral-800 p-2 md:p-4 shadow-lg">
        <div className="flex items-center flex-shrink-0 text-white">
          <div>
            <Link className="lg:flex-grow" to="/">
              <span className="font-bold text-xl">
                MOVIES
                <span className="text-red-500 font-bold text-3xl">21</span>
              </span>
            </Link>
          </div>
          <div className=" flex-grow sm:items-center w-auto  hidden md:block">
            <div className="flex font-bold text-white md:pl-4">
              <Link className="sm:flex-grow " to="/favorites">
                Favorites
              </Link>
            </div>
          </div>
          <div className="text-center">
            <input
              type="text"
              className="
          w-24 md:w-72 mx-2 md:mx-6
          form-control
          block
          px-2
          text-sm
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
              id="exampleFormControlInput3"
              placeholder="Search"
              onKeyDown={props.onKeyDown}
            />
          </div>
        </div>
        <div className="block sm:inline-block cursor-pointer md:px-4">
          {theme === "dark" ? (
            <div className="bg-white rounded-full p-2">
              <TbSun
                className="md:w-8 md:h-8 text-neutral-800"
                onClick={() => handleThemeChange("light")}
              />
            </div>
          ) : (
            <div className="bg-neutral-800 rounded-full p-2 border-white border-2">
              <TbMoonStars
                className="md:w-7 md:h-7 text-white"
                onClick={() => handleThemeChange("dark")}
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
