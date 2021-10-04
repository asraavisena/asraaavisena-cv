import React from "react";
import { useSelector } from "react-redux";
import Skill from "../Skill/Skill";

export default function Skills() {
  const { progSkills, frontEnd, backEnd, others } = useSelector((state) => {
    return {
      progSkills: state.skills.progSkills,
      frontEnd: state.skills.frontEnd,
      backEnd: state.skills.backEnd,
      others: state.skills.others,
    };
  });
  return (
    <div
      id="skills"
      className="max-w-5xl flex h-auto flex-col flex-wrap mx-auto "
    >
      <h1 className="text-3xl mb-5">Skills</h1>
      <div className="flex-col justify-center mb-8">
        <h2 className="text-xl mb-3 text-center">Programming Languages</h2>
        <div className="grid grid-cols-3 gap-5">
          {progSkills.map((el, index) => {
            return <Skill key={el.skills.name + index} skills={el} />;
          })}
        </div>
      </div>
      <div className="flex-col justify-center mb-8">
        <h2 className="text-xl mb-3 text-center">Front End Skills</h2>
        <div className="grid grid-cols-3 gap-5">
          {frontEnd.map((el, index) => {
            return <Skill key={el.skills.name + index} skills={el} />;
          })}
        </div>
      </div>
      <div className="flex-col justify-center mb-8">
        <h2 className="text-xl mb-3 text-center">Back End Skills</h2>
        <div className="grid grid-cols-3 gap-5">
          {backEnd.map((el, index) => {
            return <Skill key={el.skills.name + index} skills={el} />;
          })}
        </div>
      </div>
      <div className="flex-col justify-center mb-8">
        <h2 className="text-xl mb-3 text-center">Others Skills</h2>
        <div className="grid grid-cols-3 gap-5">
          {others.map((el, index) => {
            return <Skill key={el.skills.name + index} skills={el} />;
          })}
        </div>
      </div>
    </div>
  );
}
