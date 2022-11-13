import styled from "styled-components";
interface Props {
  type: String;
}

export const Container = styled.div<Props>`
  ${(props) =>
    props.type === "main" && {
      height: "100%",
      width: "100%",
      backgroundColor: props.theme.colors.default,
    }}

  ${(props) =>
    props.type === "content-wrapper" && {
      height: "100%",
      width: "100%",
      //   display: "flex",
    }}

  ${(props) =>
    props.type === "section" && {
      minHeight: "95vh",
      width: "100%",
    }}
`;
