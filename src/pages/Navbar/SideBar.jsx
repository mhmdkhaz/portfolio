import React, { Fragment, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  faAddressCard,
  faCloudArrowDown,
  faGift,
  faLaptopCode,
  faPaperPlane,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const [show, setShow] = useState(false);

  const headerRef = useRef(null);

  const elementNavbar = [
    {
      to: "/",
      Text: "home",
      Icon: <FontAwesomeIcon icon={faAddressCard} />,
    },
    {
      to: "about",
      Text: "about",
      Icon: <FontAwesomeIcon icon={faGift} />,
    },
    {
      to: "Projects",
      Text: "Projects",
      Icon: <FontAwesomeIcon icon={faLaptopCode} />,
    },
    {
      to: "contact",
      Text: "contact",
      Icon: <FontAwesomeIcon icon={faPaperPlane} />,
    },
  ];
  // make show is true
  const isShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <Fragment>
      {/* overlay sidebar */}
      <Overlay className={`overlay ${show ? "show md:hidden" : ""}`}></Overlay>
      {/* sidedbar */}
      <Header
        ref={headerRef}
        className={`fixed lg:left-0 top-0 w-52 h-full z-50  ${
          show ? "left-0" : "-left-full"
        }`}
      >
        <aside>
          {/* button close open sidet in mobile */}
          <OpenSide
            className="fixed right-5 bottom-5 block lg:hidden cursor-pointer rounded-full border border-white px-2 py-1 text-[#00a3e1] text-xl"
            onClick={isShow}
          >
            <FontAwesomeIcon icon={faBars} />
          </OpenSide>
          <figure className="relative">
            <img src="images/protfolio.jpg" alt="" />
            <h1 className="text-xl capitalize bg-[#00A3E1] p-2 text-white absolute bottom-0 left-2/4 -translate-x-2/4 w-full text-center">
              mohammed khazaa
            </h1>
          </figure>
          <ul>
            {elementNavbar.map((linkNavbar) => (
              <NavLink
                key={linkNavbar.Text}
                onClick={isShow}
                className="flex justify-start pl-9 text-sm text-center text-[#777] leading-[45px] border-b border-solid border-[#202226] transition-all duration-150 hover:text-white"
                to={`${linkNavbar.to}`}
              >
                <span>{linkNavbar.Icon}</span>
                <h2 className="pl-3 uppercase tracking-wider">
                  {linkNavbar.Text}
                </h2>
              </NavLink>
            ))}

            <li>
              <a
                rel="noreferrer"
                download="Mohammed-Khaza_CV.pdf"
                href="pdf/CV.pdf"
                target="_blank"
                className="flex justify-start pl-9 text-sm text-center text-[#777] leading-[45px]  transition-all duration-150 hover:text-white"
              >
                <span>
                  <FontAwesomeIcon icon={faCloudArrowDown} />
                </span>
                <h2 className="pl-3 uppercase tracking-wider">Get My CV</h2>
              </a>
            </li>
          </ul>
        </aside>
      </Header>
      {/* content pages  */}
      <div className="ml-0 lg:ml-[200px] px-10 lg:px-36 pt-12 bg-[#2c2d2f] ">
        <Outlet />
      </div>
    </Fragment>
  );
}

export default SideBar;

const Header = styled.header`
  background-color: #17181b;
  transition: all 0.3s linear;
`;

const OpenSide = styled.div`
  transition: all 0.3s linear;
  &:hover {
    background-color: #00a3e1;
    color: white;
    box-shadow: 0 3px 10px rgb(255, 255, 255, 0.7);
  }
`;

const Overlay = styled.div`
  transition: opacity 0.3s linear;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: linear-gradient(
    to left,
    rgba(23, 24, 27, 1),
    rgba(0, 163, 225, 0.2)
  );
  opacity: 0;
  visibility: hidden;

  &.show {
    opacity: 1;
    visibility: visible;
  }
`;
