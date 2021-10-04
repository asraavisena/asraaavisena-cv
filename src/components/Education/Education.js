import React from "react";

export default function Education(props) {
  console.log(props.left);
  return (
    <div
      className={"mb-8 flex justify-between items-center w-full " + props.left}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <div className="mx-auto font-semibold text-lg text-white"></div>
      </div>
      <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}
