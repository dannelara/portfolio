import styled from "styled-components";
interface Props {
  type: String;
  _moveIn?: Boolean;
}

export const Container = styled.div<Props>`
  @keyframes move3 {
    from {
      opacity: 0;
      transform: translate3d(0px, 200px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    to {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }

  ${(props) =>
    props.type === "content-wrapper" && {
      display: props._moveIn ? "flex" : "none",
      animation: props._moveIn ? "move3 1.5s forwards" : "",
      transformStyle: "preserve-3d",
      alignItems: "start",
      justifyContent: "center",
      flexDirection: "column",
      gap: 20,
      width: "90%",
    }}

  ${(props) =>
    props.type === "content-small" && {
      width: "100%",
      height: "auto",
      display: "flex",
      gap: "10px",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
    }}
`;
