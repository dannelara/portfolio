import React from "react";
import { Image, Section, Span, Wrapper } from "../../utils";
import image_src from "../../img/profile.jpg";

import { Container } from "./Styles";

interface BioProps {}

export const Bio: React.FC<BioProps> = ({}) => {
  return (
    <Section type="section-big">
      <Wrapper type="content-flex">
        <Wrapper type="content">
          <Container type="content-small-wrapper">
            <Container type="content-small">
              <Container type="small">
                <Span type="big">Hello I'm Daniel Lara</Span>
                <Span type="big">I like automating stuff.</Span>
              </Container>
            </Container>
            <Container type="content-small">
              <Image type="hero" alt="profile" src={image_src}></Image>
            </Container>
          </Container>
          <Container type="content-small-wrapper">
            <Container type="desc">
              <Span type="default">
                Let me introduce myself, - I'm a full-stack developer who is
                passionate about back-end development, algorithms and data
                structures. Currently, I’m studying web programming at Linneus
                University in Sweden.
              </Span>
            </Container>
          </Container>
        </Wrapper>
        <Wrapper type="content" _color="dark"></Wrapper>
      </Wrapper>
    </Section>
  );
};
