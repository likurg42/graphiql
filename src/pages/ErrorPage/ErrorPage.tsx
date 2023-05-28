import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Content from '../../components/Content';

const ErrorContent = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  max-width: 150px;
`;

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <Content>
      <ErrorContent>
        <h2>{t('404 Ops')}</h2>
        <Link to="/">{t('Back to home page')}</Link>
      </ErrorContent>
    </Content>
  );
};

export default ErrorPage;
