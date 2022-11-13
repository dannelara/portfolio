import React from "react";
import { StyledSpan } from "./styles";

interface SpanProps {
  children: string | JSX.Element | JSX.Element[] | (Text & JSX.Element[]);
  type: string;
}

export const Span: React.FC<SpanProps> = ({ type, children }) => {
  return <StyledSpan type={type}>{children}</StyledSpan>;
};
