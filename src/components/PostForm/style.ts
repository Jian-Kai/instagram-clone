import styled from "styled-components";

export const StyPostForm = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #efefef;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  position: relative;
  transform: translateY(-100%);
  transition: all 0.2s ease;
  &.show {
    box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.4);
    transform: translateY(0);
  }

  .upload {
    > input {
      width: 100%;
      margin-bottom: 15px;
    }
  }
`;

export const StyProgress = styled.div<{ progress: string | null }>`
  height: 10px;
  border: 1px solid #efefef;
  background-color: #efefef;
  border-radius: 3px;
  margin-bottom: 10px;
  &::after {
    content: "";
    display: block;
    width: ${(props) => props.progress || "0%"};
    height: 100%;
    background-color: #0095f6;
  }
`;
