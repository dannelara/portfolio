import React from "react";
import { Container } from "./Styles";

interface CardProps {
  title: string;
  desc: string;
}

export const Card: React.FC<CardProps> = ({ title, desc }) => {
  return (
    <Container>
      <p>{title}</p>
    </Container>
  );
};
