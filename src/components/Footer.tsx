import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border-top: solid black 2px;
`;

const SchoolLogo = styled.div``;

const GitLogo = styled.div``;

const Footer = () => (
  <Wrapper>
    <SchoolLogo>RSSchool</SchoolLogo>
    <div>2023</div>
    <GitLogo>GitHub</GitLogo>
  </Wrapper>
);

export default Footer;
