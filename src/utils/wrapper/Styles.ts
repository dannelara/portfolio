import styled from "styled-components";
interface Props {
  type: String;
  _color?: String;
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
      "@media screen and (max-width: 900px)": {
        flexWrap: "wrap",
      },
      height: "inherit",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
    }}

    ${(props) =>
    props.type === "content" && {
      transition: "0.4s",
      ":hover": {
        transform: "scale(105%)",
        zIndex: 2,
      },

      backgroundColor:
        props._color === "dark"
          ? props.theme.colors.content_dark
          : props.theme.colors.content_bright,
      height: "80%",
      width: "48%",
      borderRadius: 5,
      "@media screen and (max-width: 900px)": {
        width: "90%",
        height: "45%",
      },

      "@media screen and (max-width: 500px)": {
        height: "auto",
        padding: 10,
      },
    }}
`;
