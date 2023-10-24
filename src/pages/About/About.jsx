import React from "react";
import styled from "styled-components";

import { BiLogoTailwindCss } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";

import {
  faDisplay,
  faDatabase,
  faRoute,
  faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faBootstrap,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  let skills = [
    {
      name: "html5",
      icon: <FontAwesomeIcon icon={faHtml5} />,
    },
    {
      name: "css3",
      icon: <FontAwesomeIcon icon={faCss3} />,
    },
    {
      name: "js",
      icon: <FontAwesomeIcon icon={faJs} />,
    },
    {
      name: "Bootstrap",
      icon: <FontAwesomeIcon icon={faBootstrap} />,
    },
    {
      name: "Responsive Design",
      icon: <FontAwesomeIcon icon={faDisplay} />,
    },
    {
      name: "Tailwind CSS",
      icon: <BiLogoTailwindCss />,
    },
    {
      name: "reactjs",
      icon: <FontAwesomeIcon icon={faReact} />,
    },
    {
      name: "react router",
      icon: <FontAwesomeIcon icon={faRoute} />,
    },
    {
      name: "styled component",
      icon: <SiStyledcomponents />,
    },
    {
      name: "git-github",
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      name: "rest api",
      icon: <FontAwesomeIcon icon={faDatabase} />,
    },
    {
      name: "data analysis",
      icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} />,
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="education flex flex-col items-start w-full md:w-2/3">
          <H3 className="uppercase text-white text-2xl ">EDUCATION</H3>
          {/* edeucation */}
          <div className="relative mt-14 ml-8 md:ml-0">
            <LeftLine className="leftLine"></LeftLine>
            <div className="content">
              <h4 className="capitalize text-white text-xl">
                Technical Computer College
              </h4>
              <h5 className="capitalize mt-1 text-[#00a3e1]">
                damasucs university
              </h5>
              <div className="text-white mt-4 ">
                <span>
                  Hello, I graduated from the Technical Institute for Computer
                  Science with a major in Software Engineering. During my
                  academic journey, I acquired a range of skills and gained
                  valuable experience in various areas. Here's an overview of my
                  university life:
                </span>
                <ul className="list-disc list-inside mt-4 text-[#e1e1e1]">
                  <li>
                    Front-End Development: I developed expertise in designing
                    and building user interfaces (UI) using technologies like
                    HTML, CSS, and JavaScript. I also adopted frameworks like
                    React to enhance the user experience.
                  </li>
                  <li>
                    Data Analysis: I have honed my data analysis skills and used
                    them to analyze projects to extract patterns and insights
                    from data.
                  </li>
                  <li>
                    Fundamental Programming: I learned fundamental programming
                    languages like C#, enabling me to develop advanced software
                    applications and efficient coding solutions.
                  </li>
                  <li>
                    Passion for Learning: I am enthusiastic about continuous
                    learning and keeping up with the latest technological
                    advancements.
                  </li>
                </ul>
              </div>
            </div>
            <Year className="year">
              <To className="to">2022</To>
              <From className="from">2018</From>
            </Year>
          </div>
        </div>
        {/* infromation */}
        <div className="information w-full md:w-1/3 md:mt-0 mt-5">
          <H3 className="uppercase text-white text-2xl ">
            Personal Information
          </H3>
          <ul className="mt-14">
            <li className="text-white leading-8 text-[16px]">
              <span className="capitalize">age : </span>
              <span className="text-[#e1e1e1] capitalize">23 years</span>
            </li>
            <li className="text-white leading-8 text-[16px]">
              <span className="capitalize">Residence : </span>
              <span className="text-[#e1e1e1] capitalize">cairo</span>
            </li>
            <li className="text-white leading-8 text-[16px]">
              <span className="capitalize">Address :</span>{" "}
              <span className="text-[#e1e1e1] capitalize"></span>
            </li>
            <li className="text-white leading-8 text-[16px]">
              <span className="capitalize">email : </span>
              <span className="text-[#e1e1e1]">kh659034@gmail.com</span>
            </li>
            <li className="text-white leading-8 text-[16px]">
              <span className="capitalize">phone : </span>
              <span className="text-[#e1e1e1]">01002409654</span>
            </li>
            <li className="text-white leading-8 text-[16px]">
              <span className="capitalize">Freelance : </span>
              <span className="text-[#e1e1e1]">Available</span>
            </li>
          </ul>
        </div>
      </div>
      {/* skills  */}
      <div className="skills mt-8 text-white">
        <h1 className="text-center uppercase tracking-widest text-3xl">
          skills
        </h1>
        <ul className="capitalize tracking-wider flex flex-wrap justify-center gap-4 mt-3 py-4">
          {skills.map((skill, index) => {
            return (
              <ListSkills
                key={index}
                className="flex flex-col justify-center items-center"
              >
                {skill.icon}
                {skill.name}
              </ListSkills>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default About;

const H3 = styled.h3`
  position: relative;
  border-bottom: 2px solid #00a3e1;
  padding: 5px 5px;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 2px;
    background-color: #00a3e1;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 5px;
    width: 2px;
    background-color: #00a3e1;
  }
`;

const LeftLine = styled.span`
  width: 2px;
  height: 100%;
  background-color: #e1e1e1;
  position: absolute;
  top: 0;
  left: -15px;
  background-color: #00a3e1 !important;
  &::before {
    content: "";
    background-color: #00a3e1;
    width: 10px;
    height: 10px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    border: 2px solid #e1e1e1;
    position: absolute;
    left: -4px;
    top: -10px;
  }
  &::after {
    content: "";
    background-color: #00a3e1;
    width: 10px;
    height: 10px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    border: 2px solid #e1e1e1;
    position: absolute;
    left: -4px;
    bottom: -10px;
  }
`;

const Year = styled.span`
  display: block;
  height: 100%;
  left: -20px;
  top: 0;
  position: absolute;
`;

const To = styled.span`
  font-size: 16px;
  position: absolute;
  top: -18px;
  -webkit-transform: translateX(-120%);
  -ms-transform: translateX(-120%);
  transform: translateX(-120%);
  color: #ffffff;
`;

const From = styled.span`
  font-size: 16px;
  position: absolute;
  bottom: -18px;
  -webkit-transform: translateX(-120%);
  -ms-transform: translateX(-120%);
  transform: translateX(-120%);
  color: #ffffff;
`;

// skills
const ListSkills = styled.li`
  background-color: #00a3e1 !important;
  color: #fff;
  padding: 10px 22px;
  border-radius: 8px;
`;
