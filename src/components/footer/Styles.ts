import styled from "styled-components";
interface Props {
  type: String;
}

export const Container = styled.div<Props>`
  ${(props) =>
    props.type === "content-wrapper" && {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    }}

  ${(props) =>
    props.type === "content" && {
      height: "15%",
      width: "70%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    }}

    ${(props) =>
    props.type === "content-small-flex" && {
      height: "50%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    }}
`;
