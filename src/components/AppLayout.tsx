import styled from "styled-components";
import { Link } from "react-router-dom";

import { ConnectWalletButton } from "./ConnectWalletButton";
import { rainbow } from "../theme";

function AppLayout({ children }: { children: JSX.Element }) {
  return (
    <AppContainer>
      <AppHeader>
        <AppLink to="/">projections</AppLink>
        <ConnectWalletButton />
      </AppHeader>
      <AppBody>{children}</AppBody>
      <AppFooter>
        <AppLinks>
          <AppLink to="/help">help</AppLink>
          <AppLinkExternal href="https://github.com/scotato/projections">
            github
          </AppLinkExternal>
          <AppLinkExternal href="https://twitter.com/scotato">
            twitter
          </AppLinkExternal>
        </AppLinks>
      </AppFooter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 32px 48px;
  max-width: 100vw;
  width: 1280px;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

const AppBody = styled.div`
  display: flex;
  padding: 32px 0;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) =>
    props.theme.window.isLandscape ? "row" : "column"};
  height: 64px;
  font-weight: 600;
  gap: 32px;

  a,
  p,
  button {
    font-size: 8px;
  }
`;

const AppFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) =>
    props.theme.window.isLandscape ? "row" : "column"};
  height: 64px;
  font-weight: 600;
  gap: 32px;

  a,
  p,
  button {
    font-size: 8px;
  }
`;

const AppLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const AppLink = styled(Link)`
  margin: 0;
  fontsize: 20px;
  color: ${(props) => props.theme.grayscale[50]};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    animation: ${rainbow("color")} 2s linear infinite;
  }
`;

const AppLinkExternal = styled.a`
  margin: 0;
  color: ${(props) => props.theme.grayscale[50]};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    animation: ${rainbow("color")} 2s linear infinite;
  }
`;

export default AppLayout;
