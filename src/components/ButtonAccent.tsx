import styled from 'styled-components';

export const ButtonAccent = styled.button`
  padding: 0.2rem 0.5rem;
  background-color: ${(props) => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.accentHover};
  }
`;
