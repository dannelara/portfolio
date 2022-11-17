import React from "react";
import { Wrapper } from "../../utils";
import { Bio } from "../bio/Bio";
import { Footer } from "../footer/Footer";
import { Nav } from "../nav/Nav";
import { Portfolio } from "../portfolio/Portfolio";
import { Skills } from "../skills/Skills";

interface MainProps {}

export const Main: React.FC<MainProps> = ({}) => {
  return (
    <Wrapper type="content-wrapper">
      <Nav />
      <Bio id="bio" />
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <Footer id="contact" />
    </Wrapper>
  );
};
