import React from "react";
import { Triangle } from "react-loader-spinner";
import styled from "styled-components";

function Loader() {
  return (
    <LoaderDiv className="fixed left-0 top-0 w-full h-full flex justify-center items-center">
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderDiv>
  );
}

export default Loader;

const LoaderDiv = styled.div`
  background-color: #2b2b31;
`;
