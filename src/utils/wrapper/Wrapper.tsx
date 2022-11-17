import React from "react";
import { Container } from "./Styles";

interface WrapperProps {
  children?: JSX.Element | JSX.Element[];
  type: String;
  _color?: String;
  hover_effect?: Boolean;
}

export const Wrapper: React.FC<WrapperProps> = ({
  type,
  _color,
  children,
  hover_effect,
}) => {
  return (
    <Container type={type} _color={_color} hover_effect={hover_effect}>
      {children}
    </Container>
  );
};
