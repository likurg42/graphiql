import { useEffect } from 'react';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Content from '../../components/Content';
import Widget from './Widget';
import { auth } from '../../firebase.ts';

const HomeContent = styled.div`
  padding-top: 100px;
  max-width: 400px;
`;

const HomePage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/playground');
  }, [user, navigate]);

  return (
    <Content>
      <HomeContent>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aut molestiae quos aliquam
          suscipit deserunt earum eaque, quis debitis, ab pariatur maiores eius culpa quae. Officia
          fugiat quos tempore ratione.
        </p>
        <Widget />
      </HomeContent>
    </Content>
  );
};

export default HomePage;
