import React from "react";
import { Container } from "./styles";

interface SkillProps {
  children?: JSX.Element | JSX.Element[];
  name: string;
}

export const Skill: React.FC<SkillProps> = ({ name }) => {
  return <Container>{name}</Container>;
};
