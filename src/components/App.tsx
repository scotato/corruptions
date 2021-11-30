import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../components/GlobalStyle";
import AppLayout from "../components/AppLayout";
import ScrollToTop from "../components/ScrollToTop";
import HomePage from "../pages/HomePage";
import HelpPage from "../pages/HelpPage";
import DebugPage from "../pages/DebugPage";
import { useWindow } from "../hooks/useWindow";
import theme from "../theme";

function App() {
  const window = useWindow();

  return (
    <Router>
      <ThemeProvider theme={{ ...theme, window }}>
        <AppLayout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/debug">
              <DebugPage />
            </Route>
            <Route exact path="/help">
              <HelpPage />
            </Route>
          </Switch>
        </AppLayout>
        <ScrollToTop />
        <GlobalStyle />
      </ThemeProvider>
    </Router>
  );
}

export default App;
