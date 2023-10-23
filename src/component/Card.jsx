import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

function Card({ img, name, github, liveDemo }) {
  return (
    <div>
      <figure>
        <img src={img} className="scale-110" alt="" />
      </figure>
      <div>
        <h2 className="capitalize text-white text-center">{name}</h2>
      </div>
      <div className="icon text-[#00A3E1] flex justify-center gap-4 mt-4">
        <Live
          href={github}
          className="border border-[#00a3e1] px-4 py-1 rounded flex items-center gap-2 cursor-pointer"
        >
          <h2 className="capitalize">Github</h2>
          <FontAwesomeIcon icon={faGithub} />
        </Live>
        <Live
          href={liveDemo}
          className="border border-[#00a3e1] px-4 py-1 rounded flex items-center gap-2 cursor-pointer"
        >
          <h2 className="capitalize">live demo</h2>
          <FontAwesomeIcon icon={faLink} />
        </Live>
      </div>
    </div>
  );
}

export default Card;

const Live = styled.h2`
  transition: all 0.3s linear;
  &:hover {
    background-color: #00a3e1;
    color: white;
    border: 1px solid #fff;
  }
`;
