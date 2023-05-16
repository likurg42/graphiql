import styled from 'styled-components';
import { usePlayground } from '../../store/index.ts';
import { Url } from './Url/Url.tsx';
import { Ide } from './Ide/Ide.tsx';

const Container = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-rows: auto 1fr;
  gap: 1rem;
`;

const PlaygroundPage = () => {
  const { url } = usePlayground();
  return (
    <Container>
      <Url value={url} />
      <Ide />
    </Container>
  );
};

export default PlaygroundPage;
