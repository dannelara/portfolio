import React from "react";
import { Link, Section, Span } from "../../utils";
import { Container } from "./Styles";

interface FooterProps {
  id: string;
}

export const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <Section type="section-big" id={id}>
      <Container type="content-wrapper">
        <Container type="content">
          <Container type="content-small-flex">
            <Span type="default">
              <p>Connect with me on</p>
            </Span>
          </Container>
          <Container type="content-small-flex">
            <Link
              href="https://www.linkedin.com/in/daniel-lara-92bb19242/"
              type="external"
              color="#0a66c2"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/dannelara"
              type="external"
              color="#0d1117"
            >
              GitHub
            </Link>
          </Container>
        </Container>
        <Container type="content">
          <Container type="content-small-flex">
            <Span type="default">
              Copyright 2022, Daniel Martinez Lara, All rights reserved.
            </Span>
          </Container>
        </Container>
      </Container>
    </Section>
  );
};
