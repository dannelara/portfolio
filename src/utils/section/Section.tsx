import React from "react";
import { Container } from "./Styles";
interface SectionProps {
  children?: JSX.Element | JSX.Element[];
  type: String;
}

export const Section: React.FC<SectionProps> = ({ type, children }) => {
  return <Container type={type}>{children}</Container>;
};
