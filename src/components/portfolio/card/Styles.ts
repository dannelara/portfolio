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
      backgroundPosition: "center" /* Center the image */,
      backgroundRepeat: "no-repeat" /* Do not repeat the image */,
      backgroundSize: "cover",
      backgroundColor: "white",
      borderRadius: "15px",
      transition: "0.5s",
      marginBottom: "25px",
      ":hover": { cursor: "pointer" },
      backgroundBlendMode: "multiply",
      " @media (max-width: 1050px)": {
        width: "95%",
        height: "250px",
      },
    }}

  ${(props) =>
    props.type === "bg_cover" && {
      height: "100%",
      width: "100%",
      backgroundColor: props.theme.colors.bg_cover,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "inherit",
    }}

    ${(props) =>
    props.type === "item-big" && {
      display: props.showBigScreen ? "flex" : "none",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // width: "auto",
      height: "100%",
      animation: "grow_big 0.5s forwards",
      margin: "auto auto",
      zIndex: 100,
      backgroundColor: props.theme.colors.bg_cover_dark,
      justifyContent: "center",
      flexWrap: "wrap",
      // alignItems: "center",
      padding: 10,
    }}
    
    ${(props) =>
    props.type === "title-cover" && {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
      width: "100%",
      color: "white",
      textAlign: "center",
      "> span": {
        fontSize: "20px",
        fontWeight: "15px",
      },
    }}
    ${(props) =>
    props.type === "content-cover" && {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100%",
      width: "100%",
    }}

    ${(props) =>
    props.type === "content-scroll" && {
      height: "100%",
      overflowY: "scroll",
    }}

    ${(props) =>
    props.type === "content-wrapper" && {
      height: "auto",
      padding: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "25px",
    }}

    
    ${(props) =>
    props.type === "content-code" && {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
    }}
`;
