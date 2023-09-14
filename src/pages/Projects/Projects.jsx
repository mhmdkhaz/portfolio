import React from "react";
import styled from "styled-components";
import Card from "../../component/Card";

function Projects() {
  let projects = [
    {
      img: "images/project/landing.png",
      name: "Landing game",
      github: "https://github.com/mhmdkhaz/LandingPageGame",
      liveDemo: "landing-page-game.vercel.app",
    },
    {
      img: "images/project/movix.png",
      name: "movix",
      github: "https://github.com/mhmdkhaz/Movix",
      liveDemo: "movix-mhmdkhaz.vercel.app",
    },
    {
      img: "images/project/gampapp.png",
      name: "game app",
      github: "https://github.com/mhmdkhaz/gameWeb",
      liveDemo: "game-web-eta.vercel.app",
    },
    {
      img: "images/project/dashpord.png",
      name: "dashboard",
      github: "https://github.com/mhmdkhaz/HugeDashboard",
      liveDemo: "https://mhmdkhaz.github.io/HugeDashboard/",
    },
    {
      img: "images/project/travel.png",
      name: "travel",
      github: "https://github.com/mhmdkhaz/travel",
      liveDemo: "travel-mhmdkhaz.vercel.app",
    },
    {
      img: "images/project/ecomerce.png",
      name: "sprystore ",
      github: "https://github.com/mhmdkhaz/sprystore",
      liveDemo: "https://mhmdkhaz.github.io/sprystore/",
    },
  ];

  return (
    <div className="pb-5">
      <div className="flex justify-center">
        <H3 className="apitalize text-center text-white mb-5 text-3xl">
          Projects
        </H3>
      </div>
      <div className="project grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => {
          return (
            <Card
              key={index}
              img={project.img}
              name={project.name}
              github={project.github}
              liveDemo={project.liveDemo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

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
