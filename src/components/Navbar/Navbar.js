import React from "react";
export default function Navbar() {
  // ! LATER: LOGO IMPLEMENT
  return (
    <nav className="py-3 bg-green-600 md:flex justify-left sticky top-0 z-50 justify-center">
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
    </nav>
  );
}
