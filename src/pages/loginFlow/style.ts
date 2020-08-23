import styled from "styled-components";

export const StyLogin = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 2px 5px 30px 0px rgba(0, 0, 0, 0.4);
  min-height: 500px;
  width: 70%;
  margin: 0 auto;
  .title {
    font-size: 45px;
    font-weight: 800;
    margin: 25px 0;
    border-bottom: 1px solid #dbdbdb;
  }
  .login {
    width: 100%;
    height: 40px;
    padding: 0px 5px;
    margin-bottom: 15px;
  }
  > form {
    width: 100%;
    padding: 15px 0;
  }
`;

export const StyFixedButton = styled.div`
  position: absolute;
  top: 5%;
  cursor: pointer;
  border-radius: 5px;
  width: 35%;
  padding: 10px 0;
  text-align: center;
  color: #ffffff;
  &.right {
    right: 5%;
    background-color: #afafaf;
    border: 1px solid #afafaf;
  }
  &.left {
    left: 5%;
    background-color: #ed4956;
    border: 1px solid #ed4956;
  }
`;
