import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { ResetStyle, GlobalStyle } from "./global";

import Page from "./pages/main";

const StyContainer = styled.main`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ResetStyle />
      <Header />
      <StyContainer>
        <Page />
      </StyContainer>
    </>
  );
}

export default App;
