import styled from "styled-components";
interface Props {
  type: String;
}

export const Container = styled.div<Props>`
  ${(props) =>
    props.type === "section-big" && {
      height: "100vh",
      width: "100%",
      marginBottom: 5,
    }}
`;
