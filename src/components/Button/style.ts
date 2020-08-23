import styled from "styled-components";

export const StyButton = styled.button<{
  backgroundColor: string;
  color: string;
}>`
  width: 100%;
  height: 100%;
  min-width: 40px;
  min-height: 40px;
  border-radius: 5px;
  border: 1px solid transparent;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  cursor: pointer;
`;
