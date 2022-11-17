import React, { createRef, useEffect, useMemo, useRef, useState } from "react";
import { Section } from "../../utils";
import { Container } from "./Styles";
import skills from "../../data/skills";
import { Skill } from "./skill/Skill";
interface SkillsProps {
  id: string;
}

export const Skills: React.FC<SkillsProps> = ({ id }) => {
  const ref1 = createRef<HTMLDivElement>();
  // const ref2 = useRef();

  const [useMoveInEffect, setMovinEffect] = useState(false);
  const isInViewport1 = useIsInViewport(ref1);

  function useIsInViewport(ref: any) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

  useEffect(() => {
    if (isInViewport1) {
      setMovinEffect(true);
    }
  }, [isInViewport1]);

  return (
    <Section type="section-big" id={id}>
      <div style={{ width: "0%", height: "0%" }} ref={ref1}></div>
      <Container
        type="content-wrapper"
        _moveIn={useMoveInEffect ? true : false}
      >
        <Container type="content-small">
          {skills.slice(0, Math.floor(skills.length / 2)).map((skill, key) => {
            return <Skill name={skill.name} key={key} />;
          })}
        </Container>
        <Container type="content-small">
          {skills.slice(Math.floor(skills.length / 2)).map((skill, key) => {
            return <Skill name={skill.name} key={key} />;
          })}
        </Container>
      </Container>
    </Section>
  );
};
