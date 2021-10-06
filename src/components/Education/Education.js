import React from "react";

export default function Education(props) {
  return (
    <div
      className={"mb-8 flex justify-between items-center w-full " + props.left}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-600 shadow-xl w-8 h-8 rounded-full">
        <div className="mx-auto font-semibold text-lg text-white"></div>
      </div>
      <div className="order-1 bg-green-300 opacity-70 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-900 text-xl">
          {props.education.date}
        </h3>
        <p className="text-base leading-snug font-semibold tracking-wide text-gray-900 text-opacity-100">
          {props.education.description}
        </p>
      </div>
    </div>
  );
}
