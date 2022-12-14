import React from "react";
import { Link } from "../../utils";
import { Container } from "./Styles";

export const Nav: React.FC = ({}) => {
  return (
    <Container type="container">
      <Container type="nav-wrapper">
        <Link href="" type="logo" color="white" _hide={true}>
          Daniel Lara
        </Link>
        <Container type="links-wrapper">
          <Container type="link-wrapper">
            <Link href="#portfolio" type="nav" color="black">
              Portfolio
            </Link>
          </Container>

          <Container type="link-wrapper">
            <Link href="#skills" type="nav" color="black">
              Skills
            </Link>
          </Container>
          <Container type="link-wrapper">
            <Link href="#contact" type="nav" color="black">
              Contact
            </Link>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
