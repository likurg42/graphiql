import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { logout, auth } from '../firebase.ts';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border-bottom: solid 2px black;
  & .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Logo = styled.h1``;

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
const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  const [user] = useAuthState(auth);

  const savedUserEmail = localStorage.getItem('savedUserEmail');
  useEffect(() => {
    if (user) {
      localStorage.setItem('savedUserEmail', `${user.email}`);
    }
  }, [user]);

  return (
    <Wrapper>
      <StyledLink to="/">
        <Logo>GraphiQL</Logo>
      </StyledLink>
      <button
        type="button"
        onClick={() => {
          changeLanguage('en');
        }}
      >
        en
      </button>
      <button
        type="button"
        onClick={() => {
          changeLanguage('ru');
        }}
      >
        ru
      </button>
      {user && (
        <>
          <StyledLink to="/">Go to Main Page</StyledLink>
          <StyledLink to="/playground">Playground</StyledLink>
          <div className="user-info">
            <div>{user.email}</div>
            <button type="button" className="dashboard__btn" onClick={logout}>
              {t('Log out')}
            </button>
          </div>
        </>
      )}
      {!user && savedUserEmail && (
        <>
          <StyledLink to="/playground">Playground</StyledLink>
          <div className="user-info">
            <div>{savedUserEmail}</div>
            <button type="button" className="dashboard__btn" onClick={logout}>
              {t('Log out')}
            </button>
          </div>
        </>
      )}
      {!user && !savedUserEmail && (
        <Nav>
          <StyledLink to="/signin">{t('Sign in')}</StyledLink>
          <StyledLink to="/signup">{t('Sign up')}</StyledLink>
        </Nav>
      )}
    </Wrapper>
  );
};

export default Header;
