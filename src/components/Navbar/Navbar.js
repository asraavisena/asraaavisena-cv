import React from "react";
import { ThemeContext } from "../ThemeContext/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  // ! LATER: LOGO IMPLEMENT
  return (
    <nav className="py-3 bg-green-600 dark:bg-green-700 md:flex sticky top-0 z-50 justify-center">
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
        </ul>
        <div className="transition duration-500 ease-in-out rounded-full p-2">
          {theme === "dark" ? (
            <p className="text-white uppercase font-bold hover:text-green-300 hover:underline font-navbar ">
              <svg
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-4 fill-current "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z" />
              </svg>
            </p>
          ) : (
            <p className="text-black uppercase font-bold hover:text-green-300 hover:underline font-navbar">
              <svg
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="h-4 fill-current "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10v-20zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
              </svg>
            </p>
          )}
        </div>
      </div>
    </nav>
  );
}
