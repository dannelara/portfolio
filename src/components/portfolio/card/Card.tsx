import React from "react";
import { Span } from "../../../utils";
import { Container } from "./Styles";

interface CardProps {
  title: string;
  desc: string;
  bg_image: String;
}

export const Card: React.FC<CardProps> = ({ title, desc, bg_image }) => {
  return (
    <Container type="cover" bg_image={bg_image}>
      <Container type="bg_cover">
        <Span type="card-main">{title}</Span>
      </Container>
    </Container>
  );
};
