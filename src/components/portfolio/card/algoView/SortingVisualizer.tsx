import React, { useRef, useEffect, useState } from "react";
import { Span } from "../../../../utils";
import { Container } from "./Styles";
import { MdOutlineRestartAlt } from "react-icons/md";
import { Bar } from "./bar/Bar";

const PRIMARY_COLOR = "white";
const SECONDARY_COLOR = "red";

interface SortingVisualizerProps {
  cnt: number;
}

interface BarProps {
  height: number;
  bg_color: string;
}
export const SortingVisualizer: React.FC<SortingVisualizerProps> = ({
  cnt,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [values, setValues] = useState<BarProps[]>([]);

  // const [updatedCnth, setUpdatedCnth] = useState(0);
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const setUp = () => {
    for (let i = 0; i < cnt; i++) {
      const val = Math.floor(Math.random() * 500);
      setValues((old) => [
        ...old,
        {
          height: val,
          bg_color: PRIMARY_COLOR,
        },
      ]);
    }
  };

  const reset = () => {
    setUp();
  };

  const start = async () => {};

  useEffect(() => {
    setUp();

    console.log(values.length);
  }, []);

  return (
    <Container type="wrapper" ref={containerRef}>
      <Container type="controll-wrapper">
        <Container type="controll">
          <Span type="" onClick={start}>
            Start
          </Span>

          {/* <Span type="controller" onClick={start}>
          Start
        </Span> */}
        </Container>
        <Container type="controll">
          <Span type="">Code</Span>

          {/* <Span type="controller" onClick={start}>
          Start
        </Span> */}
        </Container>
        {/* <Span type="controller">Source code</Span> */}
      </Container>

      <Container type="wrapper-pillars">
        {/* <Container type="reset-wrapper">
          <MdOutlineRestartAlt onClick={reset} />
        </Container> */}

        {values.map((val, k) => {
          return <Bar height={val.height} bg_color={val.bg_color} key={k} />;
        })}
      </Container>
    </Container>
  );
};
