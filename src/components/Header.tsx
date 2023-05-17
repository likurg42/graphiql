import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
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
      {user && (
        <>
          <StyledLink to="/playground">Playground</StyledLink>
          <div className="user-info">
            <div>{user.email}</div>
            <button type="button" className="dashboard__btn" onClick={logout}>
              Logout
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
              Logout
            </button>
          </div>
        </>
      )}
      {!user && !savedUserEmail && (
        <Nav>
          <StyledLink to="/signin">Sign In</StyledLink>
          <StyledLink to="/signup">Sign Up</StyledLink>
        </Nav>
      )}
    </Wrapper>
  );
};

export default Header;
