import React from "react";
import { Img } from "./styles";

interface ImageProps {
  children?: JSX.Element;
  type: string;
  src: string;
  alt: string;
}

export const Image: React.FC<ImageProps> = ({ type, src, alt }) => {
  return <Img type={type} src={src} alt={alt}></Img>;
};
