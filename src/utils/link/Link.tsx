import React from "react";
import { A } from "./styles";

interface LinkProps {
  children?: string | JSX.Element | JSX.Element[];
  href: string;
  type: string;
  _hide?: Boolean;
  color?: string;
}

export const Link: React.FC<LinkProps> = ({
  type,
  href,
  children,
  color,
  _hide,
}) => {
  return (
    <A type={type} href={href} color={color} _hide={_hide}>
      {children}
    </A>
  );
};
