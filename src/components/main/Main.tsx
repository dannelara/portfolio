import React from "react";
import { Wrapper } from "../../utils";

interface MainProps {}

export const Main: React.FC<MainProps> = ({}) => {
  return (
    <Wrapper type="content-wrapper">
      <Wrapper type="section">{/* <Bio /> */}</Wrapper>
      <Wrapper type="section">
        <p>HEllo world</p>
      </Wrapper>
      <Wrapper type="section">
        <p>HEllo world</p>
      </Wrapper>
    </Wrapper>
  );
};
