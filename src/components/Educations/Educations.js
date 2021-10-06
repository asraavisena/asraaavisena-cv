import React from "react";
import { useSelector } from "react-redux";
import Education from "../Education/Education";

export default function Educations() {
  const { educations } = useSelector((state) => {
    return {
      educations: state.educations.educations,
    };
  });
  return (
    <div
      id="educations"
      className="max-w-5xl flex h-auto flex-col flex-wrap mx-auto mb-5"
    >
      <h1 className="text-3xl mb-5">Educations</h1>
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden px-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-70 border-green-500 min-h-full border"
            style={{ left: "50%" }}
          ></div>
          {educations.map((el, index) => {
            if (index % 2 === 0) {
              return (
                <Education
                  education={el.education}
                  key={`Education ${index}`}
                  left={""}
                />
              );
            } else {
              return (
                <Education
                  education={el.education}
                  key={`Education ${index}`}
                  index={index}
                  left={"flex-row-reverse"}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
