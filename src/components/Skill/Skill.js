import React from "react";

export default function ProgSkills(props) {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-100">
            {props.skills.skills.name}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-green-600">
            {props.skills.skills.rating}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
        <div
          style={{
            width: `${props.skills.skills.rating}%`,
          }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"
        ></div>
      </div>
    </div>
  );
}
