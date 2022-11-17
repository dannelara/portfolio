import styled from "styled-components";
interface Props {
  type: String;
}

export const Container = styled.div<Props>`
  ${(props) =>
    props.type === "content-cover" && {
      height: "100%",
      width: "80%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 25,
    }}
`;
