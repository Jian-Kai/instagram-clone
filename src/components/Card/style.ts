import styled from "styled-components";

export const StyArticle = styled.article`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  margin-bottom: 50px;
  .content {
    padding: 20px;
    background-color: #fff;
  }
`;

export const StyHeader = styled.header`
  background-color: #fff;
  padding: 16px;
  display: flex;
  color: #262626;
  .title {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      padding: 2px;
      font-size: 14px;
      > a {
        display: block;
        &:visited {
          color: #262626;
        }
      }

      &.main {
        font-weight: 800;
      }
    }
  }
`;

export const StyPhoro = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: 600px;
  background-color: #efefef;
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;

  > img {
    display: block;
    margin: 0 auto;
    width: auto;
    height: auto;
    max-width: inherit;
    max-height: inherit;
  }
`;

export const StyMessage = styled.div`
  display: flex;
  align-items: top;
  min-height: 25px;
  font-size: 14px;
  margin-bottom: 10px;

  > * {
    padding: 5px 0;
  }
  .username {
    flex: 1 1 auto;
    font-weight: 800;
    margin-right: 10px;
  }
  .text {
    flex: 1 1 70%;
  }
  .date {
    flex: 1 1 auto;
    font-size: 10px;
    color: #8f8f8f;
    margin-left: 10px;
  }
`;
