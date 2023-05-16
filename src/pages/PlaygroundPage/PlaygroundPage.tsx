import styled from 'styled-components';
import { usePlayground } from '../../store/index.ts';
import { Url } from './Url/Url.tsx';
import { Ide } from './Ide/Ide.tsx';

const Container = styled.div`
  display: grid;
  margin: 1rem 0;
  grid-template-rows: auto 1fr;
  gap: 1rem;
`;

const IdeWrapper = styled.div`
  padding: ${(props) => props.theme.spacing[1]};
  background-color: ${(props) => props.theme.colors.bgClr};
  border-radius: ${(props) => props.theme.spacing.borderRadius};
`;

const PlaygroundPage = () => {
  const { url } = usePlayground();
  return (
    <Container>
      <Url value={url} />
      <IdeWrapper>
        <Ide />
      </IdeWrapper>
    </Container>
  );
};

export default PlaygroundPage;
