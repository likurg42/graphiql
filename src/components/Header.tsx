import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate('/');
    // если добаваить в список зависимостей navigate то не дает перейти на другие страницы
    // решил пофиксить убрав из зависимотей useEffect эту переменную
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <Wrapper>
      <Logo>GraphiQL</Logo>
      {user && (
        <div className="user-info">
          <div>{user.email}</div>
          <button type="button" className="dashboard__btn" onClick={logout}>
            Logout
          </button>
        </div>
      )}
      {!user && (
        <Nav>
          <StyledLink to="/signin">Sign In</StyledLink>
          <StyledLink to="/signup">Sign Up</StyledLink>
        </Nav>
      )}
    </Wrapper>
  );
};

export default Header;
