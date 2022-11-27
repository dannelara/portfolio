import React from "react";
// import { Container } from "./Styles";

interface BarProps {
  height: number;
  bg_color: string;
}

export const Bar: React.FC<BarProps> = ({ height, bg_color }) => {
  return (
    <div
      style={{
        height: height,
        backgroundColor: bg_color,
        minWidth: "1.5%",
        display: "inline-block",
      }}
      className="array-bar"
    ></div>
  );
};
