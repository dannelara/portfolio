import React from "react";
import { Section, Wrapper } from "../../utils";
import { Container } from "./Styles";
import algoData from "../../data/algorithms";
import { Card } from "./card/Card";
import { AlgorithmsVisualizer } from "./algorithmView/AlgorithmsVisualizer";

interface PortfolioProps {
  id: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
  return (
    <Section type="section-auto" id={id}>
      <Wrapper type="content-flex">
        <Container type="content-cover">
          <Card title="Algorithms">
            <AlgorithmsVisualizer cnt={35} algoData={algoData} />
          </Card>
          <Card title="Projects"></Card>
          <Card title="IOT"></Card>
          {/* {data.map((d, k) => {
            return (
              <Card
                title={d.title}
                desc={d.desc}
                key={k}
                bg_image={d.bg_image}
              ></Card>
            );
          })} */}
        </Container>
      </Wrapper>
    </Section>
  );
};
