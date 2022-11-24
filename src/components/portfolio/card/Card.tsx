import React, { useEffect, useRef, useState, lazy } from "react";
import { Span } from "../../../utils";
import { Snippet } from "./Snippet/Snippet";
import { Container } from "./Styles";
import { GlobalStateContext } from "../../../global/GlobalState";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

interface CardProps {
  title: string;
  desc: string;
  bg_image: String;
}

interface Data {
  title: string;
  code: string;
  languague: string;
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

  const nextElement = () => {
    if (currentElementInView < data.length - 1) {
      seetCurrentElementInView((old) => (old += 1));
    }
  };

  const prevElement = () => {
    if (currentElementInView > 0) {
      seetCurrentElementInView((old) => (old -= 1));
    }
  };

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
          <Container type="content-controll">
            {currentElementInView > 0 && <FcPrevious onClick={prevElement} />}
          </Container>
          <Container type="content-big">
            <Container type="title-cover">
              {data.length > 0 && (
                <Span type="big">{data[currentElementInView].title}</Span>
              )}
            </Container>
            {/* <Container type="content-controller-small">
              {currentElementInView > 0 && <FcPrevious onClick={prevElement} />}
              {currentElementInView < data.length - 1 && (
                <FcNext onClick={nextElement} />
              )}
            </Container> */}
            <Container type="content-code">
              {data.length > 0 && (
                <Snippet
                  code={data[currentElementInView].code}
                  language={data[currentElementInView].languague}
                />
              )}
              {/* {data.length > 0 && (
                <Snippet
                  code={data[currentElementInView].code}
                  language={data[currentElementInView].languague}
                />
              )} */}
            </Container>
          </Container>

          <Container type="content-controll">
            {currentElementInView < data.length - 1 && (
              <FcNext onClick={nextElement} />
            )}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
