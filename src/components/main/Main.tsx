import React, { useEffect } from "react";
import { Wrapper } from "../../utils";
import { Bio } from "../bio/Bio";
import { Footer } from "../footer/Footer";
import { Nav } from "../nav/Nav";
import { Portfolio } from "../portfolio/Portfolio";
import { Skills } from "../skills/Skills";
import { GlobalStateContext } from "../../global/GlobalState";

export const Main: React.FC = ({}) => {
  const { full_screen } = React.useContext(GlobalStateContext);

  useEffect(() => {
    const body = document.querySelector("body");

    if (body !== null) {
      body.style.overflow = full_screen ? "hidden" : "";
    }
  }, [full_screen]);

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
