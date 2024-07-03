import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Bio() {
    return (
    <>
        <div className="flex flex-col">
          <TypeAnimation
            sequence={["Hello!", 1000, "pineapple pizza lover!", 1000]}
            speed={50}
            style={{
              fontSize: "2.5rem",
              color: "#eebbc3",
            }}
            repeat={Infinity}
          />
          <h2 className="text-lg font-medium mt-2">
            A passionate developer who is always looking for growth and good food.
          </h2>
          <div className="flex flex-col mt-4">
            <h2 className="text-lg font-medium">My tech stack: </h2>
            <div className="flex flex-wrap gap-1 mt-2">
              {techStack.map((lang, index) =>  (
              <span className="text-[#fffffe]" key={index}>
                {lang}
                {index < techStack.length - 1 && " | "}
              </span>
            ))}
            </div>
          </div>
        </div>
    </>
    );
  }
  
const techStack = [
    "HTML5",
    "CSS",
    "SASS",
    "Tailwind",
    "Javascript",
    "React",
    "Redux",
    "Firebase",
    "Nest JS",
    "Adonis JS",
];