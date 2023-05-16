import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlayground } from '../../store/index.ts';
import { Url } from './Url/Url.tsx';
import { Ide } from './Ide/Ide.tsx';
import { ActionBar } from './ActionBar/ActionBar.tsx';
import { auth } from '../../firebase.ts';

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
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !user) navigate('/');
  }, [loading, navigate, user]);
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
