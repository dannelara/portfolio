import React from "react";
import { Container } from "./Styles";

interface BarProps {
  height: number;
  bg_color: string;
}

export const Bar: React.FC<BarProps> = ({ height, bg_color }) => {
  return <Container height={height} bg_color={bg_color}></Container>;
};
