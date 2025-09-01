import React from "react";
import sections from "../aboutSection";
const About = () => {
  return (
    <div className="flex flex-col lg:flex-row  h-auto lg:h-[300px]">
      {/* First Block */}
      <div
        className={`${sections[0].bg} ${sections[0].colSpan} w-full py-10 lg:py-16 px-6 lg:px-10 rounded-4xl flex flex-col justify-center`}
      >
        <h1 className="text-xl lg:text-2xl pb-4">
          {sections[0].id}. {sections[0].title}
        </h1>
        <p className="text-sm lg:text-base leading-relaxed">{sections[0].text}</p>
      </div>

      {/* Remaining Blocks */}
      <div className="flex flex-col lg:flex-row max-sm:gap-4 lg:gap-0 min-md:bg-[#d4efff] w-full lg:w-2/3 rounded-4xl">
        {sections.slice(1).map((section) => (
          <div
            key={section.id}
            className="py-10 lg:py-16 px-6 max-sm:bg-[#d4efff] rounded-4xl lg:px-12 flex-1 flex flex-col justify-center"
          >
            <h1 className="text-xl lg:text-2xl pb-4">
              {section.id}. {section.title}
            </h1>
            <p className="text-sm lg:text-base leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
