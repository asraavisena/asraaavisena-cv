import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

export default function Navbar() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  // ! LATER: LOGO IMPLEMENT
  return (
    <nav className="py-3 px-2 bg-green-600 dark:bg-green-700 md:flex sticky top-0 z-50 justify-center">
      <div className="flex justify-between">
        <ul className="flex md:mx-9 mx-2 flex-wrap">
          <li className="md:mr-7 mr-2 text-center">
            <a
              className="text-white uppercase text-xs md:text-lg font-bold hover:text-green-300 hover:underline font-navbar"
              href="#profile"
            >
              About Me
            </a>
          </li>
          <li className="md:mr-7 mr-2 text-center">
            <a
              className="text-white uppercase text-xs md:text-lg font-bold hover:text-green-300 hover:underline font-navbar "
              href="#work-experiences"
            >
              Work Experiences
            </a>
          </li>
          <li className="md:mr-7 mr-2 text-center">
            <a
              className="text-white uppercase text-xs md:text-lg font-bold hover:text-green-300 hover:underline font-navbar "
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li className="md:mr-7 mr-2 text-center">
            <a
              className="text-white uppercase text-xs md:text-lg font-bold hover:text-green-300 hover:underline font-navbar "
              href="#educations"
            >
              Education
            </a>
          </li>

          {/* <li className="md:mr-7 mr-2">
          <a
            className="text-white uppercase text-xs md:text-lg font-bold hover:text-green-300 hover:underline font-navbar "
            href="#portofolios"
          >
            Portofolio
          </a>
        </li> */}
          <li className="md:mr-7 mr-2 text-center">
            <a
              className="text-white uppercase text-xs md:text-lg font-bold hover:text-green-300 hover:underline font-navbar"
              href="#contactme"
            >
              Contact Me
            </a>
          </li>
        </ul>
        <div className="transition duration-500 ease-in-out rounded-full flex items-center cursor-pointer">
          {theme === "dark" ? (
            <p className="text-white text-xl uppercase font-bold hover:text-green-300 hover:underline font-navbar ">
              <RiMoonClearFill
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            </p>
          ) : (
            <p className="text-white text-xl uppercase font-bold hover:text-green-300 hover:underline font-navbar">
              <RiSunFill
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            </p>
          )}
        </div>
      </div>
    </nav>
  );
}
