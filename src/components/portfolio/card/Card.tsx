import React, { useEffect, useRef, useState, lazy } from "react";
import { Span } from "../../../utils";

import { Container } from "./Styles";
import { GlobalStateContext } from "../../../global/GlobalState";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

interface CardProps {
  title: string;
  // bg_image: String;
  children?: JSX.Element | JSX.Element[];
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  const { full_screen, setFull_screen } = React.useContext(GlobalStateContext);

  const [showBigScreen, setShowBigScreen] = useState(false);
  // const [currentElementInView, seetCurrentElementInView] = useState(0);

  const handleClick = (e: any) => {
    setShowBigScreen(!showBigScreen);
    setFull_screen(!full_screen);
  };

  return (
    <Container type="cover" bg_image={""}>
      <Container type="bg_cover" onClick={handleClick}>
        <Span type="card-main">{title}</Span>
      </Container>
      <Container type="item-big" showBigScreen={showBigScreen}>
        <Container type="close-container">
          <AiOutlineClose onClick={handleClick} />
        </Container>

        <Container type="content-wrapper">
          <Container type="content">{children}</Container>
        </Container>
      </Container>
    </Container>
  );
};
