import styled from "styled-components";
import { Link } from "react-router-dom";

import { ConnectWalletButton } from "./ConnectWalletButton";
import { rainbow } from "../theme";

function AppLayout({ children }: { children: JSX.Element }) {
  return (
    <AppContainer>
      <AppBody>
        {children}
        <AppFooter>
          <AppLink to="/">corruption</AppLink>
          <AppLinks>
            {/* <AppLink to="/help">help</AppLink> */}
            <AppLinkExternal href="https://github.com/scotato/corruptions">
              github
            </AppLinkExternal>
            <AppLinkExternal href="https://twitter.com/scotato">
              twitter
            </AppLinkExternal>
          </AppLinks>
          <ConnectWalletButton />
        </AppFooter>
      </AppBody>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 32px;
  max-width: 1600px;
  height: 100vh;
  place-content: center;
`;

const AppBody = styled.div`
  overflow: hidden;
  min-width: ${({ theme }) =>
    theme.window.isLandscape
      ? theme.window.height - 64 - 82
      : theme.window.width - 64}px;
  max-width: ${({ theme }) =>
    theme.window.isLandscape
      ? theme.window.height - 64 - 82
      : theme.window.width}px;
  min-height: ${({ theme }) =>
    theme.window.isLandscape
      ? theme.window.height - 64
      : theme.window.width - 64}px;
  max-height: ${({ theme }) => theme.window.height - 64}px;
`;

const AppFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) =>
    props.theme.window.isLandscape ? "row" : "column"};
  background-color: ${(props) => props.theme.grayscale[20]};
  height: 64px;
  padding: 20px;
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
