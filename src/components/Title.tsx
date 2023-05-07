import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  line-height: 39px;
  margin: 0;
  margin-top: 60px;
  margin-bottom: 40px;
`;

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => <StyledTitle>{children}</StyledTitle>;

export default Title;
