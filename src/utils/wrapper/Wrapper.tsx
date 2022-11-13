import React from "react";
import { Container } from "./Styles";

interface WrapperProps {
  children?: JSX.Element | JSX.Element[];
  type: String;
  _color?: String;
}

export const Wrapper: React.FC<WrapperProps> = ({ type, _color, children }) => {
  return (
    <Container type={type} _color={_color}>
      {children}
    </Container>
  );
};
