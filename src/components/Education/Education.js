import React from "react";

export default function Education(props) {
  return (
    <div
      className={
        "lg:mb-8 mb-5 flex justify-between items-center w-full " + props.left
      }
    >
      <div className="order-1 w-5/12 lg:block hidden"></div>
      <div className="z-20 flex items-center order-1 bg-gray-600 shadow-xl w-8 h-8 rounded-full lg:block hidden">
        <div className="mx-auto font-semibold lg:text-lg text:sm text-white"></div>
      </div>
      <div className="order-1 bg-green-300 opacity-70 rounded-lg shadow-xl lg:w-5/12 w-full lg:px-6 lg:py-4 p-3">
        <h3 className="mb-3 font-bold text-gray-900 lg:text-xl text-base">
          {props.education.date}
        </h3>
        <p className="lg:text-base text-sm leading-snug font-semibold tracking-wide text-gray-900 text-opacity-100">
          {props.education.description}
        </p>
      </div>
    </div>
  );
}
