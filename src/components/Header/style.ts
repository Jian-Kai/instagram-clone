import styled from "styled-components";

export const StyHeader = styled.nav`
  position: relative;
  width: 100%;
  height: 60px;
  margin-bottom: 25px;
  background-color: #fff;
  > div {
    height: 60px;
  }
`;

export const StyFixed = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 20px;
  border-bottom: 1px solid #efefef;
  background-color: #fff;
  height: 60px;
  .inside {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 600px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    z-index: 999;
    position: relative;
    background-color: inherit;
    .logo {
      width: auto;
      height: 30px;
      margin-right: 10px;
      flex: 0 1 30%;
      > img {
        width: auto;
        height: auto;
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
`;

export const StyAddPost = styled.div`
  cursor: pointer;
  color: #222222;
  flex: 0 1 auto;
`;
