import styled from "styled-components";
import { useCorruptions } from "../hooks/useCorruptions";
import { Portal } from "../components/Portal";

function HomePage() {
  const { corruptions, loading, error } = useCorruptions();

  if (loading)
    return (
      <ContainerSimple>
        <p>loading</p>
      </ContainerSimple>
    );

  if (error)
    return (
      <Container>
        <p>{error}</p>
      </Container>
    );

  return (
    <Container>
      {corruptions.map((corruption) => (
        <a
          href={openSeaLink(corruption.id)}
          key={corruption.id}
          style={{ color: corruption.color }}
        >
          <Portal corruption={corruption} />
          <span>{corruption.id}</span>
        </a>
      ))}
    </Container>
  );
}

const openSeaLink = (id: number) =>
  `https://opensea.io/assets/0x5bdf397bb2912859dbd8011f320a222f79a28d2e/${id}`;

const Container = styled.div`
  display: grid;
  text-align: center;
  place-content: center;
  grid-template-columns: ${(props) =>
    props.theme.window.isLandscape ? "repeat(auto-fill, 33.3%)" : "100%"};

  a {
    text-decoration: none;
  }

  span {
    display: block;
    margin: 12px 0;
    opacity: 0.25;
    font-size: 8px;
  }
`;

const ContainerSimple = styled.div`
  display: grid;
  place-content: center;
  opacity: 0.5;
`;

export default HomePage;
