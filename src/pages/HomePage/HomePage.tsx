import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Widget from './Widget';

const Content = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;

const HomeContent = styled.div`
  max-width: 400px;
`;

const LogoWrapper = styled.div`
  flex-shrink: 1;
`;

const Logo = styled.img`
  display: block;
  height: auto;
  width: 100%;
  max-width: 300px;
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
      <LogoWrapper>
        <Logo src="src/assets/imgs/graphql-logo-black.png" alt="Logo" />
      </LogoWrapper>
    </Content>
  );
};

export default HomePage;
