import React from "react";
import { StyledSpan } from "./styles";

interface SpanProps {
  children: string | JSX.Element | JSX.Element[] | (Text & JSX.Element[]);
  type: string;
  onClick?: () => Promise<void>;
}

export const Span: React.FC<SpanProps> = ({ type, children, onClick }) => {
  return (
    <StyledSpan type={type} onClick={onClick}>
      {children}
    </StyledSpan>
  );
};
