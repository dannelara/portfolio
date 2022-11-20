import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 8px;
  margin-bottom: 10px;
  padding: 2px 10px;
  padding-bottom: 5px;
  border-style: solid;
  border-width: 2px;
  background-color: ${(props) => props.theme.colors.bg_cover};
  border-radius: 100px;
  letter-spacing: 0.1em;
  font-size: 18px;
  font-weight: 300;
  color: white;
  // box-shadow: inset 0 0 25px ${(props) => props.theme.colors.bg_cover};
`;
