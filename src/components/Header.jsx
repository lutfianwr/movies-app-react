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
      <nav className="sticky top-0 flex items-center justify-between flex-wrap bg-yellow-500 p-4">
        <div className="flex items-center flex-shrink-0 text-white mr-4">
          <div className="p-2">
            <BiCameraMovie />
          </div>
          <div>
            <Link className="text-sm lg:flex-grow " to="/">
              <span className="font-semibold text-xl tracking-tight">
                LayarTancep21
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full block flex-grow  sm:items-center w-auto ">
          <div className="text-sm flex ">
            <div className="block sm:inline-block lg:mt-0 text-yellow-100 hover:text-white mr-4">
              <Link className="text-sm md:flex-grow " to="/">
                Home
              </Link>
            </div>

            <div className="block sm:inline-block lg:mt-0 text-yellow-100 hover:text-white">
              <Link className="text-sm sm:flex-grow " to="/favorites">
                My Favorite
              </Link>
            </div>
          </div>
        </div>
        <div className="block sm:inline-block cursor-pointer">
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
        </div>
      </nav>
    </>
  );
};

export default Header;
