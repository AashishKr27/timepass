import React from "react";
import SkillsItems from "./SkillsItems";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div id="skills" className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a] ">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div data-aos="fade-left">
          <SkillsItems title="React JS Developer" year="2022-present" />
          <SkillsItems title="Mern Stack Developer" year="2022-present" />
          <SkillsLanguage
            skill1="HTML"
            skill2="CSS"
            skill3="JavaScript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div data-aos="fade-right">
          <SkillsItems title="Next JS Developer" year="2022-present" />
          <SkillsItems title="Node JS Developer" year="2022-present" />
          <SkillsLanguage
            skill1="React Js"
            skill2="Next JS"
            skill3="Tailwind CSS"
            level1="w-[81%]"
            level2="w-[78%]"
            level3="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
