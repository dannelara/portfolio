import styled from "styled-components";
interface Props {
  type: string;
  src: string;
  alt: string;
}

export const Img = styled.img<Props>`
  @keyframes moveIn_img {
    from {
      opacity: 0;
      transform: translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }

    to {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    }
  }
  ${(props) =>
    props.type === "hero" && {
      animation: "moveIn_img 1s forwards",
      height: "80%",
      maxWidth: "100%",
      minWidth: "50%",
      borderRadius: "100%",

      "@media screen and (max-width: 500px)": {
        display: "none",
      },
    }}
`;
