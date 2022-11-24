import styled from "styled-components";
interface Props {
  href: string;
  color?: string;
  _hide?: Boolean;
}

export const A = styled.a<Props>`
  ${(props) =>
    props.type === "cover" && {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      fontFamily: "Recoleta, sans-serif",
      color: "white",
      fontSize: "25px",
      lineHeight: 1,
      fontWeight: 700,
      letterSpacing: "-0.03em",
      textDecoration: "none",
      "@media (max-width: 500px)": {
        height: "100px",
      },
    }}

  ${(props) =>
    props.type === "external" && {
      fontSize: "20px",
      lineHeight: 1,
      fontWeight: 700,
      letterSpacing: "-0.03em",
      color: props.color,
    }}

    ${(props) =>
    props.type === "nav" && {
      color: props.color,
      transition: "ease-in 0.5s",
      fontSize: "13.5px",
      lineHeight: "20px",
      fontWeight: 700,
      letterSpacing: "1px",
      textTransform: "none",
      textDecoration: "none",
      padding: 5,
    }}

    ${(props) =>
    props.type === "logo" && {
      color: "black",
      fontSize: "20px",
      lineHeight: "20px",
      fontWeight: 700,
      letterSpacing: "1px",
      textTransform: "none",
      textDecoration: "none",
      padding: 5,
      "@media screen and (max-width: 500px)": {
        display: props._hide ? "none" : "",
      },
    }}
`;
