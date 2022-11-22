import styled from "styled-components";
interface Props {
  type: String;
  bg_image?: String;
  showBigScreen?: Boolean;
}

export const Container = styled.div<Props>`
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
      width: "80%",
      height: "95%",

      margin: "auto auto",
      zIndex: 10000,
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
    }}
    ${(props) =>
    props.type === "content-cover" && {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      height: "100%",
      width: "100%",
      overflowY: "scroll",
      gap: "50px",
    }}

    ${(props) =>
    props.type === "content-wrapper" && {
      height: "auto",
      width: "100%",
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
      width: "50%",
      // backgroundColor: props.theme.colors.bg_cover_dark,
    }}
`;
