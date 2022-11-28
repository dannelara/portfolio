import styled from "styled-components";
interface Props {
  // height: number;
  // bg_color: string;
}

export const Container = styled.div<Props>`
  width: 5px;
  @media screen and (max-width: 800px) : {
    width: 1%;
  }
`;
