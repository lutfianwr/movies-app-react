import { Link } from "react-router-dom";
import { ThemeContext } from "../utils/context";
import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";

const Header = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (mode) => {
    setTheme(mode);
  };

  return (
    <>
      <nav className="sticky top-0 flex items-center justify-between flex-wrap bg-red-900 p-2 md:p-4 shadow-lg">
        <div className="flex items-center flex-shrink-0 text-white">
          <div className="p-2">
            <BiCameraMovie />
          </div>
          <div>
            <Link className="text-sm lg:flex-grow " to="/">
              <span className="font-semibold text-2xl tracking-tight">
                Movies<span className="text-red-500 font-bold">21</span>
              </span>
            </Link>
          </div>
          <div className="block flex-grow sm:items-center w-auto">
            <div className="flex font-bold text-white md:pl-4">
              <Link className="sm:flex-grow " to="/favorites">
                My Favorites
              </Link>
            </div>
          </div>{" "}
        </div>
        <div className="text-center">
          <input
            type="text"
            className="
          w-24 md:w-72
          form-control
          block
          px-2
          py-1
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
        <div className="block sm:inline-block cursor-pointer md:px-4">
          {theme === "dark" ? (
            <FaSun
              className="w-8 h-8 text-white "
              onClick={() => handleThemeChange("light")}
            />
          ) : (
            <FaMoon
              className="w-8 h-8 text-white"
              onClick={() => handleThemeChange("dark")}
            />
          )}
        </div>{" "}
      </nav>
    </>
  );
};

export default Header;
