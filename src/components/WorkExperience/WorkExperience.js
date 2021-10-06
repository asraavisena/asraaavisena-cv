import React from "react";

export default function WorkExperience(props) {
  return (
    <div className="max-w-full rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="mb-2">
          <p className="font-bold text-xl">{props.workExperience.name}</p>

          <p className="text-gray-800 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            <svg
              className="h-3 fill-current text-green-700 pr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            {props.workExperience.location}
          </p>
        </div>
        <div className="mb-2">
          <p className="text-gray-800 text-xs lg:text-base font-semibold flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-green-700 pr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>
            {props.workExperience.title}
          </p>
          <p className="text-gray-800 text-xs lg:text-base font-semibold flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-green-700 pr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z" />
            </svg>
            {props.workExperience.duration}
          </p>
        </div>
        <div>
          <p className="text-gray-700 text-base">
            {props.workExperience.responsibles}
          </p>
        </div>
      </div>
    </div>
  );
}
