import styled from "styled-components";
interface Props {
  type: String;
  bg_image?: String;
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
`;
