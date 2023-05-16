import styled from 'styled-components';
import { PlayFill } from 'react-bootstrap-icons';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: ${(props) => props.theme.spacing.borderRadius.sm};
  border: none;
  background-color: ${(props) => props.theme.colors.accent};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.accentHover};
  }
`;

const RunIcon = styled(PlayFill)`
  font-size: 2rem;
  color: white;
`;

export const QueryButton = ({ submit }: { submit: () => void }) => {
  return (
    <Button type="button" onClick={submit}>
      <RunIcon />
    </Button>
  );
};
