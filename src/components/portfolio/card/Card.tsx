import React, { useEffect, useRef, useState, lazy } from "react";
import { Span } from "../../../utils";
import { Snippet } from "./Snippet/Snippet";
import { Container } from "./Styles";
import { GlobalStateContext } from "../../../global/GlobalState";

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

  const handleClick = (e: any) => {
    setShowBigScreen(!showBigScreen);
    // Set global value to true / false in order to change nav background-color.
    setFull_screen(!full_screen);
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
        <Container type="item-big" showBigScreen={showBigScreen}>
          <Container type="content-cover">
            <Container type="content-scroll">
              {data.length ? (
                data.map((data, k) => {
                  return (
                    <Container type="content-wrapper" key={k}>
                      <Container type="title-cover">
                        <Span type="big">{data.title}</Span>
                      </Container>

                      <Container type="content-code">
                        <Snippet code={data.code} language={data.languague} />
                      </Container>
                    </Container>
                  );
                })
              ) : (
                <div></div>
              )}
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
