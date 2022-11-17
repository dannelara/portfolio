import styled from "styled-components";
interface Props {}

export const Container = styled.div<Props>`
  height: 250px;
  width: 45%;
  background-color: ${(props) => props.theme.colors.content_dark};
  border-radius: 15px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  // border-style: solid;
  // border-width: 2px;
  margin-bottom: 25px;
  @media (max-width: 1050px) {
    width: 95%;
    height: 250px;
  }
`;
