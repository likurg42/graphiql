import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border-bottom: solid 2px black;
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

const Header = () => (
  <Wrapper>
    <Logo>GraphiQL</Logo>
    <Nav>
      <StyledLink to="/auth">Sign In</StyledLink>
      <StyledLink to="/signup">Sign Up</StyledLink>
    </Nav>
  </Wrapper>
);

export default Header;
