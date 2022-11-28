import styled from "styled-components";
interface Props {
  type: String;
  height?: number;
  bg_color?: string;
}

export const Container = styled.div<Props>`
  ${(props) =>
    props.type === "wrapper" && {
      position: "relative",
      width: "100%",
      hegiht: "100%",
      maxHeight: "100%",
      display: "flex",
      //   backgroundColor: props.theme.colors.bg_cover_dark,
      justifyContent: "center",
      gap: 20,
      flexWrap: "wrap",
    }}

  ${(props) =>
    props.type === "wrapper-pillars" && {
      width: "50%",
      maxWidth: "50%",

      height: "auto",
      maxHeight: "500px",
      display: "flex",

      alignItems: "end",
      justifyContent: "center",
      gap: 5,
      "@media screen and (max-width: 500px)": {
        maxWidth: "100%",
        width: "90%",
        gap: 2,
      },
    }}

  ${(props) =>
    props.type === "controll-wrapper" && {
      height: "fit-content",
      width: "100%",

      textAlign: "center",
      display: "flex",

      justifyContent: "center",
      gap: 20,
    }}

    ${(props) =>
    props.type === "controll" && {
      border: "2px solid #d2bdff",
      height: "30px",
      width: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      cursor: "pointer",
      //   padding: "0 2px 2px",
      "> svg": {
        transition: "1s",
        color: "white",
        fontSize: "30px",
        cursor: "pointer",
        ":hover": {
          transform: "rotate(-360deg)",
        },
      },
    }}
`;
