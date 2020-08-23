import styled from "styled-components";

export const StyInput = styled.div`
  width: 100%;
  height: 40px;
  padding: 0px 5px;
  margin-bottom: 15px;
  font-size: 16px;
  display: flex;
  align-items: center;
  > label {
    margin-right: 10px;
    flex: 0 1 30%;
    text-align: right;
    height: 100%;
    line-height: 1;
    vertical-align: middle;
  }
  > input {
    flex: 1 1 auto;
    height: 100%;
    padding: 0 5px;
    background-color: #fafafa;
    outline: 0;
    border: 1px solid #efefef;
    border-radius: 3px;
  }
`;
