import styled from "styled-components";
interface Props {
  type: String;
  _color?: String;
  hover_effect?: Boolean;
}

export const Container = styled.div<Props>`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ${(props) =>
    props.type === "main" && {
      position: "relative",
      height: "100%",
      width: "100%",
      backgroundColor: props.theme.colors.default,
    }}

  ${(props) => props.type === "content-wrapper" && { height: "inherit" }}

    ${(props) =>
    props.type === "content-flex" && {
      height: "inherit",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "@media screen and (max-width: 1050px)": {
        flexWrap: "wrap",
      },
    }}

    ${(props) =>
    props.type === "content" && {
      height: "80%",
      width: "80%",
      borderRadius: 5,
      "@media screen and (max-width: 1050px)": {},
      "@media screen and (max-width: 500px)": {
        height: "auto",
        minHeight: "25%",
      },
    }}
`;
