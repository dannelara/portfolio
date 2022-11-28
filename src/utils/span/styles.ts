import styled from "styled-components";
interface Props {
  type: string;
  focus?: Boolean;
  className?: string;
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
      fontSize: "20px",
      lineHeight: "1.34",
      fontWeight: 300,
    }}


    ${(props) =>
    props.type === "small" && {
      transformStyle: "preserve-3d",
      display: "flex",
      height: "auto",
      width: "100%",

      alignItems: "center",
      justifyContent: "center",
      fontSize: "15px",
      lineHeight: "1.34",
      fontWeight: 500,
    }}
  
    ${(props) =>
    props.type === "card-main" && {
      display: "block",
      padding: "5px",
      color: "white",
      fontSize: "25px",
      lineHeight: "1.34",
      fontWeight: 300,

      borderRadius: "15px",
      letterSpacing: "0.06em",
    }}

    ${(props) =>
    props.type === "btn" && {
      border: "2px solid #d2bdff",
      // height: "30px",
      // width: "61px",
      // // width: "200px",
      // borderRadius: "4px",

      // color: "white",
      // cursor: "pointer",
      // fontFamily: "Roboto, sans-serif",
      // padding: "30px 61px",
      // margin: "25px",

      // fontWeight: 500,
      // fontSize: 20,
      // color: "white",
      // padding: 5,
      // borderRadius: 10,
      // backgroundColor: props.theme.colors.bg_cover_dark,

      // border: "1px solid white",
      // ":hover": {
      //   cursor: "pointer",
      // },
      // color: props.theme.colors.content_title,
    }}

    ${(props) =>
    props.type === "controll" && {
      height: "100%",
      width: "100%",
      padding: "0 2px 2px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      backgroundColor: props.focus ? "white" : "",
      color: props.focus ? "black" : "",
    }}
    ${(props) =>
    props.type === "span-controll" && {
      height: "100%",
      width: "100%",
      padding: "0 2px 2px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      backgroundColor: props.focus ? "white" : "",
      color: props.focus ? "black" : "",
    }}
`;
