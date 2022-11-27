import React, { useEffect, useRef, useState, lazy } from "react";
import { Span } from "../../../utils";
import { Snippet } from "./Snippet/Snippet";
import { Container } from "./Styles";
import { GlobalStateContext } from "../../../global/GlobalState";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { SortingVisualizer } from "./algoView/SortingVisualizer";

interface CardProps {
  title: string;
  desc: string;
  bg_image: String;
}

interface Data {
  title: string;
}

export const Card: React.FC<CardProps> = ({ title, desc, bg_image }) => {
  const { full_screen, setFull_screen } = React.useContext(GlobalStateContext);

  const [showBigScreen, setShowBigScreen] = useState(false);
  const [data, setData] = useState<Data[]>([]);
  const [currentElementInView, seetCurrentElementInView] = useState(0);

  const handleClick = (e: any) => {
    setShowBigScreen(!showBigScreen);
    // Set global value to true / false in order to change nav background-color.
    setFull_screen(!full_screen);
  };

  // const nextElement = () => {
  //   if (currentElementInView < data.length - 1) {
  //     seetCurrentElementInView((old) => (old += 1));
  //   }
  // };

  // const prevElement = () => {
  //   if (currentElementInView > 0) {
  //     seetCurrentElementInView((old) => (old -= 1));
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      const data = await import(`../../../data/${title.toLowerCase()}.ts`);
      setData(data.default);
    };

    fetchData();
  }, []);

  return (
    <Container type="cover" bg_image={bg_image}>
      <Container type="bg_cover" onClick={handleClick}>
        <Span type="card-main">{title}</Span>
      </Container>
      <Container type="item-big" showBigScreen={showBigScreen}>
        <Container type="close-container">
          <AiOutlineClose onClick={handleClick} />
        </Container>

        <Container type="content-wrapper">
          <Container type="top">
            {data.map((d, k) => (
              <Span type="card-main" key={k}>
                {d.title}
              </Span>
            ))}
          </Container>

          <Container type="content">
            <SortingVisualizer cnt={50} />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
