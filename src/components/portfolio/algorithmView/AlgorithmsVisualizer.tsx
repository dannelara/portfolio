import React, { useEffect, useState } from "react";
import { Container } from "./Styles";
import * as ALGOS from "../../../utils/algorithms/algorithms";
import { Span } from "../../../utils";
import { MdOutlineRestartAlt } from "react-icons/md";
import { Bar } from "./bar/Bar";

const PRIMARY_COLOR = "white";
const SECONDARY_COLOR = "GREEN";

interface Data {
  title: string;
  enum: ALGO;
}

enum ALGO {
  INSERT_SORT,
  QUICK_SORT,
}

interface AlgorithmsVisualizerProps {
  cnt: number;
  algoData: Data[];
}

interface BarProps {
  height: number;
  bg_color: string;
}

export const AlgorithmsVisualizer: React.FC<AlgorithmsVisualizerProps> = ({
  cnt,
  algoData,
}) => {
  const [active, setActive] = useState(false);

  const [values, setValues] = useState<BarProps[]>([]);
  const [algo, setAlgo] = useState(0);

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
    console.log(active);
    if (!active) {
      setUp();
    }
  };

  const start = async () => {
    if (!active) {
      // FIX THIS!!!
      setActive((prev) => (prev = true));

      console.log(active);
      // Get bars from document.
      const arrayBars = Array.from(
        document.getElementsByClassName(
          "array-bar"
        ) as HTMLCollectionOf<HTMLElement>
      );

      switch (algo) {
        case 0:
          await ALGOS.insert_sort(
            arrayBars,
            30,
            PRIMARY_COLOR,
            SECONDARY_COLOR
          );
          break;
        case 1:
          await ALGOS.quick_sort(arrayBars, 30, PRIMARY_COLOR, SECONDARY_COLOR);
          break;
        default:
          break;
      }

      setActive((prev) => (prev = false));
    }
  };

  const onAlgoChange = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (!active) {
      Array.from(
        document.getElementsByClassName(
          "span-controll"
        ) as HTMLCollectionOf<HTMLElement>
      ).forEach((span) => {
        span.style.backgroundColor = "transparent";
        span.style.color = "white";
      });

      e.currentTarget.style.backgroundColor = "white";
      e.currentTarget.style.color = "black";
      setAlgo(parseInt(e.currentTarget.id));
    }
  };

  useEffect(() => {
    setUp();
  }, []);

  return (
    <Container type="wrapper">
      <Container type="controll-wrapper">
        <Container type="controll">
          <Span type="controll" onClick={start}>
            Start
          </Span>
        </Container>
        <Container type="controll">
          <Span type="controll">Code</Span>
        </Container>
        <Container type="controll">
          <MdOutlineRestartAlt
            onClick={reset}
            style={{
              width: "30px",
            }}
          />
        </Container>
      </Container>
      <Container type="wrapper-pillars">
        {values.map((val, k) => {
          return <Bar height={val.height} bg_color={val.bg_color} key={k} />;
        })}
      </Container>
      <Container type="controll-wrapper">
        {algoData.map((algo, k) => (
          <Container type="controll" key={k}>
            <Span
              type="span-controll"
              id={`${algo.enum}`}
              focus={k === 0 ? true : false}
              onClick={onAlgoChange}
              className="span-controll"
            >
              {algo.title}
            </Span>
          </Container>
        ))}
      </Container>
    </Container>
  );
};
