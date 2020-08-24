import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import { ResetStyle, GlobalStyle } from "./global";
import MainPage from "./pages/main";
import LoginPage from "./pages/loginFlow";
import { auth } from "./utils/useFirebase";

const StyContainer = styled.main`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  const [user, setUser] = React.useState<{ displayName: string } | null>(null);

  React.useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser({
          displayName: authUser.displayName as string,
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <ResetStyle />
      <Header user={user} />
      <StyContainer>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </StyContainer>
    </Router>
  );
}

export default App;
