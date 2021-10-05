import React from "react";
export default function Navbar() {
  // ! LATER: LOGO IMPLEMENT
  return (
    <nav className="py-3 bg-green-600 flex justify-left sticky top-0 z-50">
      <ul className="flex mx-9">
        <li className="mr-6">
          <a
            className="text-white uppercase text-lg font-bold hover:text-green-300 hover:underline font-navbar "
            href="#profile"
          >
            About Me
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-white uppercase text-lg font-bold hover:text-green-300 hover:underline font-navbar "
            href="#skills"
          >
            Skills
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-white uppercase text-lg font-bold hover:text-green-300 hover:underline font-navbar "
            href="#educations"
          >
            Education
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-white uppercase text-lg font-bold hover:text-green-300 hover:underline font-navbar "
            href="#4"
          >
            Portofolio
          </a>
        </li>
      </ul>
    </nav>
  );
}
