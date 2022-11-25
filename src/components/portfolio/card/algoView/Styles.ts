import styled from "styled-components";
interface Props {
  type: String;
  height?: number;
  bg_color?: string;
}

export const Container = styled.div<Props>`
  ${(props) =>
    props.type === "wrapper" && {
      position: "relative",
      width: "100%",
      hegiht: `100%`,
      maxHeight: "100%",
      display: "flex",
      //   backgroundColor: props.theme.colors.bg_cover_dark,
      justifyContent: "center",
      alignItems: "end",
      padding: "15px",
      gap: "2px",
    }}

  ${(props) =>
    props.type === "pillar" && {
      width: "5px",
      height: `${props.height}px`,
      backgroundColor: props.bg_color,
    }}
`;
