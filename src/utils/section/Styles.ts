import styled from "styled-components";
interface Props {
  type: String;
  _moveInEffect?: Boolean;
}

export const Container = styled.div<Props>`
  ${(props) =>
    props.type === "section-big" && {
      height: "100vh",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}

  ${(props) =>
    props.type === "section-auto" && {
      minHeight: "100vh",
      width: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      marginTop: "1.2em",

      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      // padding: "10px",
    }}
`;
