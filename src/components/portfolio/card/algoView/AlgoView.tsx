import React, { useRef, useEffect, useState } from "react";
import { Span } from "../../../../utils";
import { Container } from "./Styles";
import { MdOutlineRestartAlt } from "react-icons/md";
interface AlgoViewProps {
  width: number;
  height: number;
  cnt: number;
}

interface Pillar {
  color: string;
  height: number;
}
export const AlgoView: React.FC<AlgoViewProps> = ({ height, width, cnt }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<Pillar[]>([]);
  const [updatedCnth, setUpdatedCnth] = useState(0);

  const reset = () => {
    setUp();
  };

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const setUp = () => {
    setValues([]);

    for (let i: number = 0; i < cnt; i++) {
      const val = Math.floor(Math.random() * 500);

      setValues((current) => [
        ...current,
        {
          color: `white`,
          height: val,
        },
      ]);
    }
  };

  const insert_sort = (val: number): Pillar[] => {
    for (let j = val; j > 0; j--) {
      if (values[j].height < values[j - 1].height) {
        swap(j);
      } else {
        break;
      }
    }

    return values;
  };

  const start = async () => {
    for (let i = 0; i < values.length; i++) {
      // values[i].color = "red";
      const newVals = insert_sort(i);
      setValues(newVals);
      setUpdatedCnth((old) => old + 1);
      await sleep(50);
    }
  };

  const swap = (i: number) => {
    let temp = values[i];
    values[i] = values[i - 1];
    values[i - 1] = temp;
  };

  useEffect(() => {
    setUp();
  }, []);

  useEffect(() => {}, [updatedCnth]);

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
        <Container type="reset-wrapper">
          <MdOutlineRestartAlt onClick={reset} />
        </Container>
        {values &&
          values.map((pilar, k) => {
            return (
              <Container
                type="pillar"
                bg_color={pilar.color}
                height={pilar.height}
                key={k}
              ></Container>
            );
          })}
      </Container>
    </Container>
  );
};
