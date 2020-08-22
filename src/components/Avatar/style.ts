import styled from "styled-components";

export const StyAvatar = styled.div<{ size: number }>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: 50%;
  border: 1px solid #000;
  > img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
  }
`;
