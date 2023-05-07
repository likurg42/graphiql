import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Content from '../../components/Content';

const ErrorContent = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  max-width: 150px;
`;

const ErrorPage = () => (
  <Content>
    <ErrorContent>
      <h2>404 Ops</h2>
      <Link to="/">Back to home page</Link>
    </ErrorContent>
  </Content>
);

export default ErrorPage;
