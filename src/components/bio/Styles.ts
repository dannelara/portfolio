import styled from "styled-components";
interface Props {
  type: String;
}

export const Container = styled.div<Props>`
  ${(props) =>
    props.type === "content-small-wrapper" && {
      height: "50%",
      width: "100%",
      display: "flex",
      alignItems: "start",
      textAlign: "center",
      justifyContent: "center",
      gap: 25,
      "@media screen and (max-width: 500px)": {
        padding: 10,
        gap: 0,
      },
    }}

  ${(props) =>
    props.type === "content-small" && {
      height: "100%",
      width: "auto", // Change here
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      "@media screen and (max-width: 500px)": {
        width: "auto",
      },
    }}

    ${(props) =>
    props.type === "small" && {
      height: "20%",
    }}

    

    
    ${(props) =>
    props.type === "desc" && {
      width: "90%",
    }}
`;
