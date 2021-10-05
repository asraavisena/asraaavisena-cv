import React from "react";

export default function WorkExperiences() {
  return (
    <div
      id="work-experiences"
      className="max-w-5xl flex h-auto flex-col flex-wrap mx-auto "
    >
      <h1 className="text-3xl mb-5">Work Experiences</h1>
      <div className="flex-col justify-center mb-8">
        <div className="grid grid-cols-2 gap-5">
          <div className="max-w-full rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
