import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Content from '../../components/Content';
import Widget from './Widget';

const HomeContent = styled.div`
  padding-top: 100px;
  max-width: 400px;
`;

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Content>
      <HomeContent>
        <h1>{t('Home title')}</h1>
        <p>{t('Home paragraph')}</p>
        <Widget />
      </HomeContent>
    </Content>
  );
};

export default HomePage;
