import styled from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  color: ${({ primary }) => (primary ? '#ffffff' : '#838B93')};
  text-align: center;
  background-color: ${({ primary }) => (primary ? '#838B93' : 'ffffff')};
  border: ${({ primary }) => (primary ? '1px solid transparent' : '1px solid #838B93')};
  font-size: 16px;
  padding: 15px 68px;
  font-weight: 400;
  position: relative;
  cursor: pointer;
  ${({ primary }) =>
    primary
      ? ''
      : `&::after{
    display: inline-block;
    content:url('/button-arrow.svg');
    position: absolute;
    right: 20%;
    top: 35%;
    }`}
`;

interface ButtonProps {
  primary: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ primary, children }) => (
  <StyledButton primary={primary}>{children}</StyledButton>
);

export default Button;
