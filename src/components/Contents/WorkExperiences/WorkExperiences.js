import React from "react";
import { useSelector } from "react-redux";
import WorkExperience from "./WorkExperience/WorkExperience";

export default function WorkExperiences() {
  const { workExperiences } = useSelector((state) => {
    return {
      workExperiences: state.workExperiences.workExperiences,
    };
  });

  return (
    <div
      id="work-experiences"
      className="max-w-5xl flex h-auto flex-col flex-wrap mx-auto lg:my-16"
    >
      <div className="mx-6 lg:mx-0">
        <h1 className="text-3xl mb-5 dark:text-gray-200">Work Experiences</h1>
        <div className="flex-col justify-center mb-8 max-w-full">
          <div className="lg:grid grid-cols-2 gap-5 block ">
            {workExperiences.map((el, index) => {
              return (
                <WorkExperience
                  key={`work-experience ${index}`}
                  workExperience={el}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
