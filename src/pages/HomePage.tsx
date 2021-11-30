import styled from "styled-components";
import { useCorruptions } from "../hooks/useCorruptions";
import { Portal } from "../components/Portal";

function HomePage() {
  const { corruptions, loading, error } = useCorruptions();

  if (loading)
    return (
      <Container>
        <p>loading</p>
      </Container>
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
        <Portal corruption={corruption} key={corruption.id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default HomePage;
