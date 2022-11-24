import styled from "styled-components";
interface Props {
  type: String;
  _hide?: boolean;
}

export const Container = styled.div<Props>`
  ${(props) =>
    props.type === "container" && {
      position: "sticky",
      top: 0,
      display: "flex",
      padding: "2px 50px",
      alignItems: "center",
      zIndex: 1000,
      "@media screen and (max-width: 1300px)": {
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",

        bottom: 0,
      },
    }}

  ${(props) =>
    props.type === "nav-wrapper" && {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flex: 1,

      "@media screen and (max-width: 500px)": {
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    }}

    ${(props) =>
    props.type === "links-wrapper" && {
      display: "flex",
      marginRight: "-20px",
      alignItems: "center",
    }}

    ${(props) =>
    props.type === "link-wrapper" && {
      height: "auto",
      width: "100%",

      //   backgroundColor: props.theme.colors.content_dark,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
`;
