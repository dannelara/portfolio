import React from "react";
import { Container } from "./Styles";

interface WrapperProps {
  children?: JSX.Element | JSX.Element[];
  type: String;
}

export const Wrapper: React.FC<WrapperProps> = ({ type, children }) => {
  return <Container type={type}>{children}</Container>;
};
