import React from "react";
import { Container } from "./Styles";
interface SectionProps {
  children?: JSX.Element | JSX.Element[];
  type: String;
  id: string;
  _moveInEffect?: Boolean;
}

export const Section: React.FC<SectionProps> = ({
  type,
  children,
  id,
  _moveInEffect,
}) => {
  return (
    <Container type={type} id={id} _moveInEffect={_moveInEffect}>
      {children}
    </Container>
  );
};
