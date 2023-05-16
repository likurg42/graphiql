import { SyntheticEvent } from 'react';
import styled from 'styled-components';

const Container = styled.textarea`
  font-family: 'JetBrains Mono', monospace;
  padding: 0;
  border: none;
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  outline: none;
  white-space: pre;
  resize: none;
`;

export const Code = ({ saveChanges }: { saveChanges: (code: string) => void }) => {
  const handleChange = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    saveChanges(value);
  };

  return <Container onChange={handleChange} />;
};
