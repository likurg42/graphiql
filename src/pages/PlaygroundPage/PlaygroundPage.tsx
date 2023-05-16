import styled from 'styled-components';
import { usePlayground } from '../../store/index.ts';
import { Url } from './Url/Url.tsx';
import { Ide } from './Ide/Ide.tsx';
import { ActionBar } from './ActionBar/ActionBar.tsx';

const Container = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-rows: auto 1fr;
  gap: 1rem;
`;

const IdeWrapper = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
`;

const PlaygroundPage = () => {
  const { url } = usePlayground();
  return (
    <Container>
      <Url value={url} />
      <IdeWrapper>
        <ActionBar />
        <Ide />
      </IdeWrapper>
    </Container>
  );
};

export default PlaygroundPage;
