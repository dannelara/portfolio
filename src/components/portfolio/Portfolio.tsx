import React from "react";
import { Section, Wrapper } from "../../utils";
import { Container } from "./Styles";
import data from "../../data/portfolio";
import { Card } from "../card/Card";
interface PortfolioProps {
  id: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
  return (
    <Section type="section-auto" id={id}>
      <Wrapper type="content-flex">
        <Container type="content-cover">
          {data.map((d, k) => {
            return <Card title={d.title} desc={d.desc} key={k}></Card>;
          })}
        </Container>
      </Wrapper>
    </Section>
  );
};
