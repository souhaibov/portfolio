import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import "../style/Skills.css"

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon style={{width:"50px",color:"RoyalBlue4"}}/>
         <br/>
          <h1 >
            Skills & Technologies
          </h1>
          <br/>
          <p> I have used the technologies below in university studies and in many courses and trainings and I have carried out many projects using them. I have an experience of more than 8 years in the repair of computers (hardware and software) and I use perfectly all the necessary software for most operating systems. </p>
        </div>
        <div className="skills_tech">
          {skills.map((el) => (
            <div key={el} className="skills">
              
                <BadgeCheckIcon style={{width:"50px",color:"RoyalBlue4"}} />
                <h2 >
                  {el}
                </h2>
             
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
