import React from "react";
import { Wrapper } from "../../utils";
import { Bio } from "../bio/Bio";

interface MainProps {}

export const Main: React.FC<MainProps> = ({}) => {
  return (
    <Wrapper type="content-wrapper">
      <Bio />
      <Bio />
      <Bio />
    </Wrapper>
  );
};
