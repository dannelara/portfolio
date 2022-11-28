import React, { useRef, useEffect, useState } from "react";
import { Span } from "../../../../utils";
import { Container } from "./Styles";
import { MdOutlineRestartAlt } from "react-icons/md";
import { Bar } from "./bar/Bar";
import * as ALGOS from "../algorithms/algorithms";

const PRIMARY_COLOR = "white";
const SECONDARY_COLOR = "GREEN";

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
  const [algoRunning, setAlgoRunning] = useState(false);
  const [values, setValues] = useState<BarProps[]>([]);

  const setUp = () => {
    setValues((old) => (old = []));

    for (let i = 0; i < cnt; i++) {
      const val = Math.floor(Math.random() * 350);
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
    const arrayBars = Array.from(
      document.getElementsByClassName(
        "array-bar"
      ) as HTMLCollectionOf<HTMLElement>
    );
    arrayBars.length = 0;
    setUp();
  };

  const start = async () => {
    setAlgoRunning(true);
    const arrayBars = Array.from(
      document.getElementsByClassName(
        "array-bar"
      ) as HTMLCollectionOf<HTMLElement>
    );

    await ALGOS.quick_sort(arrayBars, cnt, 30, PRIMARY_COLOR, SECONDARY_COLOR);
    setAlgoRunning(false);
  };

  useEffect(() => {
    setUp();
  }, []);

  return (
    <Container type="wrapper" ref={containerRef}>
      <Container type="controll-wrapper">
        <Container type="controll">
          <Span type="" onClick={algoRunning ? async () => {} : start}>
            Start
          </Span>
        </Container>
        <Container type="controll">
          <Span type="">Code</Span>
        </Container>
        <Container type="controll">
          <MdOutlineRestartAlt
            onClick={algoRunning ? () => {} : reset}
            style={{
              width: "30px",
            }}
          />
        </Container>
      </Container>

      <Container type="wrapper-pillars">
        {/* <Container type="reset-wrapper">
          <MdOutlineRestartAlt onClick={algoRunning ? () => {} : reset} />
        </Container> */}

        {values.map((val, k) => {
          return <Bar height={val.height} bg_color={val.bg_color} key={k} />;
        })}
      </Container>
    </Container>
  );
};
