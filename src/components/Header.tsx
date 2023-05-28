import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { logout, auth } from '../firebase.ts';
import { useLocalStorage } from '../utils/hooks/useLocalStorage.tsx';
import { ButtonAccent } from './ButtonHeader.tsx';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  min-height: 70px;
  padding: 0.5rem 1rem;
  border-bottom: solid 2px black;
  & .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Logo = styled.h1`
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: darkgoldenrod;
  }
`;

const LanguageButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const LeftSide = styled.div`
  justify-self: flex-start;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };
  const [userEmail, setUserEmail] = useLocalStorage<string>('savedUserEmail', '');
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user?.email && !loading) {
      setUserEmail(user.email);
    }

    if (!user && !loading) {
      setUserEmail('');
    }
  }, [user, setUserEmail, loading]);

  const handleLogout = () => {
    logout();
  };

  return (
    <Wrapper>
      <LeftSide>
        <StyledLink to="/">
          <Logo>GraphiQL</Logo>
        </StyledLink>
        <LanguageButtons>
          <ButtonAccent
            type="button"
            onClick={() => {
              changeLanguage('en');
            }}
          >
            en
          </ButtonAccent>
          <ButtonAccent
            type="button"
            onClick={() => {
              changeLanguage('ru');
            }}
          >
            ru
          </ButtonAccent>
        </LanguageButtons>
      </LeftSide>
      {userEmail && (
        <>
          <Nav>
            <StyledLink to="/">Main Page</StyledLink>
            <StyledLink to="/playground">Playground</StyledLink>
          </Nav>
          <User>
            <div>{userEmail}</div>
            <ButtonAccent type="button" onClick={handleLogout}>
              {t('Log out')}
            </ButtonAccent>
          </User>
        </>
      )}
      {!userEmail && (
        <Nav>
          <StyledLink to="/signin">{t('Sign in')}</StyledLink>
          <StyledLink to="/signup">{t('Sign up')}</StyledLink>
        </Nav>
      )}
    </Wrapper>
  );
};

export default Header;
