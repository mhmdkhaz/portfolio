import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <H3 className="capitalize text-center text-white mb-5 text-3xl">
        contact
      </H3>
      <div className="w-full lg:w-2/3">
        <form action="https://formspree.io/f/mgejyqrk" method="POST">
          <div className="flex flex-wrap lg:flex-nowrap gap-4 mb-5">
            <Input
              type="text"
              name="name" // Add the "name" attribute
              className="w-full"
              placeholder="Name"
              required // Add the "required" attribute
            />
            <Input
              type="email"
              name="email" // Add the "name" attribute
              className="w-full"
              placeholder="Email"
              required // Add the "required" attribute
            />
          </div>
          <TextArea
            name="message" // Add the "name" attribute
            cols="20"
            rows="10"
            className="w-full"
            placeholder="How can we help you?"
            required // Add the "required" attribute
          ></TextArea>
          <Send type="submit">Send Message</Send>
        </form>
      </div>
    </div>
  );
}

export default Contact;

const sharedInputStyles = `
  background-color: transparent;
  border: 1px solid #999;
  padding: 11px 10px ;
  color: #fff;
  transition: all 0.3s;
  border-radius: 2px;
  &::placeholder {
    text-transform: capitalize;
  }
  &::focus {
    border: 1px solid #fff;
  }
  &:checked {
    background:transparent !important;
  }
`;

// Create a styled component for Input using shared styles
const Input = styled.input`
  padding: 5px 2px;
  ${sharedInputStyles}
`;

// Create a styled component for TextArea using shared styles
const TextArea = styled.textarea`
  ${sharedInputStyles}
  height: 100%;
`;

const Send = styled.button`
  margin-top: 10px;
  margin-left: 50%;
  transform: translate(-50%);
  color: #00a3e1;
  border: 1px solid #00a3e1;
  padding: 5px 10px;
  z-index: 9;
  position: relative;
  transition: all 0.3s;
  &::before {
    content: "";
    background-color: #00a3e1;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%);
    width: 0;
    height: 100%;
    transition: all 0.3s;
  }
  &:hover {
    color: #fff;
  }
  &:hover::before {
    width: 100%;
    z-index: -1;
  }
`;

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
