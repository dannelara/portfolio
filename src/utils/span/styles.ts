import styled from "styled-components";
interface Props {
  type: string;
}

export const StyledSpan = styled.span<Props>`
  @keyframes moveIn {
    from {
      opacity: 0;
      transform: translate3d(-200px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    to {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  ${(props) =>
    props.type === "title" && {
      fontWeight: 700,
      fontSize: 13,
      color: props.theme.colors.content_title,
    }}

  ${(props) =>
    props.type === "big" && {
      "@media screen and (max-width: 900px)": {
        fontSize: 20,
      },

      opacity: 0,
      animation: "moveIn 1s forwards",
      transformStyle: "preserve-3d",
      display: "flex",
      height: "auto",
      width: "100%",

      alignItems: "center",
      justifyContent: "center",

      fontWeight: 700,
      fontSize: 30,
      // fontFamily: "Recoleta, sans-serif",
    }}

    ${(props) =>
    props.type === "default" && {
      opacity: 0,
      animation: "moveIn 1s .5s forwards",
      transformStyle: "preserve-3d",
      display: "flex",
      height: "auto",
      width: "100%",

      alignItems: "center",
      justifyContent: "center",
      // fontFamily: "Sofiapro, sans-serif",
      // color: "#535353",
      fontSize: "20px",
      lineHeight: "1.34",
      fontWeight: 300,
    }}

    ${(props) =>
    props.type === "card-main" && {
      display: "block",
      padding: "5px",
      color: "white",
      fontSize: "40px",
      lineHeight: "1.34",
      fontWeight: 300,
      // boxShadow: `inset 3px 3px 20px 5px ${props.theme.colors.content_bright}`,
      borderRadius: "15px",
      letterSpacing: "0.2em",
      // borderBottom: "1px solid white",
    }}
`;
