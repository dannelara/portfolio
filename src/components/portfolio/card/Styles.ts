import styled from "styled-components";
interface Props {
  type: String;
  bg_image?: String;
  showBigScreen?: Boolean;
}

export const Container = styled.div<Props>`
  @keyframes grow_big {
    from {
      display: 0;
      // width: 0%;
      transform: scale(0);
      // transform: translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      //   rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    to {
      opacity: 1;
      transform: scale(100%);
      // transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      //   rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  ${(props) =>
    props.type === "cover" && {
      height: "250px",
      width: "45%",
      backgroundImage: `url(${props.bg_image})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor: "white",
      borderRadius: "15px",
      transition: "0.5s",
      marginBottom: "25px",

      backgroundBlendMode: "multiply",
      " @media (max-width: 1050px)": {
        width: "95%",
        height: "250px",
      },
      "div[type='bg_cover']": {
        ":hover": {
          cursor: "pointer",
        },
      },
    }}

  ${(props) =>
    props.type === "bg_cover" && {
      height: "100%",
      width: "100%",
      backgroundColor: props.theme.colors.bg_cover_dark,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "inherit",
    }}

    ${(props) =>
    props.type === "item-big" && {
      display: props.showBigScreen ? "flex" : "none",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 10000,
      height: "100vh",
      width: "100vw",
      backgroundColor: props.theme.colors.bg_cover_dark,
      animation: "grow_big 0.5s forwards",

      // position: "absolute",
      // top: 0,
      // left: 0,
      // right: 0,
      // bottom: 0,
      // height: "100vh",
      // animation: "grow_big 0.5s forwards",
      // margin: "auto auto",
      // zIndex: 100,
      // backgroundColor: props.theme.colors.bg_cover_dark,
      // justifyContent: "center",
      // flexWrap: "wrap",
    }}

    ${(props) =>
    props.type === "close-container" && {
      position: "absolute",
      top: 25,
      right: 25,
      "> svg": {
        color: "white",
        fontSize: "35px",
        ":hover": {
          cursor: "pointer",
        },
      },
    }}

    ${(props) =>
    props.type === "content-wrapper" && {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    }}

    
    ${(props) =>
    props.type === "content-controll" && {
      // flex: "3 3",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "> svg": {
        fontSize: "35px",
        "> polygon": {
          fill: "white",
        },
        ":hover": {
          transform: "scale(150%);",
          transition: "ease 0.5s",
          cursor: "pointer",
        },
      },
    }}

    ${(props) =>
    props.type === "content-controller-small" &&
    {
      // width: "100%",
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "space-evenly",
    }}
      
    ${(props) =>
    props.type === "content-big" && {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "fit-content",
      flexWrap: "wrap",
    }}

    ${(props) =>
    props.type === "title-cover" && {
      width: "100%",
      height: "auto",
      "> span": {
        color: "white",
      },
    }}
      
    ${(props) =>
    props.type === "content-code" && {
      width: "auto",
      height: "70%",
      overflowY: "scroll",
      " @media (max-width: 800px)": {
        "> pre": {
          // lineHeight: "1",
          counterReset: "line",
          counterIncrement: "line",
          position: "relative",
          display: "block",
          // marginLeft: "1.5rem",
          padding: 0,
          // maxWidth: "300px",
          textAlign: "start",
          fontSize: "10px",
          // maxWidth: "80%",

          // scrollbarWidth: "0%",
        },
        // width: "fit-content",
        // height: "250px",
      },
    }}
`;
