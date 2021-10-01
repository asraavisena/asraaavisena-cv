import React from "react";
export default function Navbar() {
  // ! LATER: LOGO IMPLEMENT
  return (
    <nav className="py-5 bg-red-600 flex justify-left">
      <ul className="flex mx-9">
        <li className="mr-6">
          <a
            className="text-white uppercase text-xl font-bold hover:text-yellow-900 font-navbar "
            href="#1"
          >
            About Me
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-white uppercase text-xl font-bold hover:text-yellow-900 font-navbar "
            href="#2"
          >
            Education
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-white uppercase text-xl font-bold hover:text-yellow-900 font-navbar "
            href="#3"
          >
            Skills
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-white uppercase text-xl font-bold hover:text-yellow-900 font-navbar "
            href="#4"
          >
            Portofolio
          </a>
        </li>
      </ul>
    </nav>
  );
}
