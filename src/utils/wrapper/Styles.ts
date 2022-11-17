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
      // transition: "0.4s",
      // ":hover": {
      //   transform: props.hover_effect ? "scale(105%)" : "",
      //   zIndex: 2,
      // },

      // backgroundColor:
      //   props._color === "dark" ? props.theme.colors.content_dark : "",
      height: "80%",
      width: "80%",
      borderRadius: 5,
      "@media screen and (max-width: 1050px)": {
        // width: "75%",
      },

      "@media screen and (max-width: 500px)": {
        height: "auto",
        minHeight: "25%",
      },
    }}
`;
