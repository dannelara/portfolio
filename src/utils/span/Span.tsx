import React from "react";
import { StyledSpan } from "./styles";

interface SpanProps {
  children: string | JSX.Element | JSX.Element[] | (Text & JSX.Element[]);
  type: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  id?: string;
  focus?: Boolean;
  className?: string;
}

export const Span: React.FC<SpanProps> = ({
  type,
  children,
  onClick,
  id,
  focus,
  className,
}) => {
  return (
    <StyledSpan
      type={type}
      onClick={onClick}
      id={id}
      focus={focus}
      className={className}
    >
      {children}
    </StyledSpan>
  );
};
