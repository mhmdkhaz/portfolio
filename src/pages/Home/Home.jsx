import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubAlt,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { styled } from "styled-components";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full pb-10 h-screen">
      <h1 className="uppercase text-4xl text-[#00A3E1]">HELLO, WORLD!</h1>
      <h1 className="capitalize text-center text-white text-5xl mt-5">
        I<span style={{ color: "#00A3E1" }}>'</span>m mohammed khazaa
        <span style={{ color: "#00A3E1" }}>.</span>
      </h1>
      <p className="uppercase text-[#777] text-2xl mt-3">FRONT-END DEVELOPER</p>
      <p className="text-center text-white w-full md:w-2/3 text-[18PX] mt-3">
        Experienced Front End Developer specializing in creating engaging and
        responsive user interfaces. Passionate about delivering exceptional user
        experiences and improving performance and functionality. Seeking to work
        in a stable and stimulating environment that fosters creativity and
        innovation. My goal is to leverage my technical and creative skills to
        enhance user experience and achieve the company's objectives in the
        field of Front End Development
      </p>
      <div className="icon flex gap-5 mt-5 text-white">
        <Link
          className="border rounded-full px-2 py-1 "
          href="https://www.linkedin.com/in/mohammed-khazaa-32b12819a/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link
          className="border rounded-full px-2 py-1 "
          href="https://github.com/mhmdkhaz"
        >
          <FontAwesomeIcon icon={faGithubAlt} />
        </Link>
        <Link
          className="border rounded-full px-2 py-1 "
          href="https://api.whatsapp.com/send?phone=01002409654"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
      </div>
    </div>
  );
}

export default Home;


const Link = styled.a`
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    background-color: #00a3e1;
    color: white;
    box-shadow: 0 3px 10px rgb(255, 255, 255, 0.7);
  }
`;
