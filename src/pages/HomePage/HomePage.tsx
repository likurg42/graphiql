import styled from 'styled-components';
import Content from '../../components/Content';
import Widget from './Widget';

const HomeContent = styled.div`
  padding-top: 100px;
  max-width: 400px;
`;

const HomePage = () => (
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

export default HomePage;
