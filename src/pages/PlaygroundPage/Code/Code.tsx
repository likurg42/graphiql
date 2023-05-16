import { SyntheticEvent } from 'react';
import styled from 'styled-components';

const Container = styled.textarea`
  white-space: pre;
  border: 1px solid black;
`;

export const Code = ({ saveChanges }: { saveChanges: (code: string) => void }) => {
  const handleChange = (e: SyntheticEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    saveChanges(value);
  };

  return <Container onChange={handleChange} />;
};
