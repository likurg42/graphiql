import { useState } from 'react';
import styled from 'styled-components';
import { QueryButton } from '../QueryButton/QueryButton.tsx';
import { usePlayground } from '../../../store/index.ts';
import { Code } from '../Code/Code.tsx';

function removeLinebreaks(str: string) {
  return str.replace(/[\r\n]+/gm, '');
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 50px;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
`;

const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Editor = () => {
  const { performQuery } = usePlayground();
  const [query, setQuery] = useState<string>('');

  const handleSubmit = () => {
    performQuery(removeLinebreaks(query));
  };

  return (
    <Form>
      <Code saveChanges={setQuery} />
      <Toolbar>
        <QueryButton submit={handleSubmit} />
      </Toolbar>
      <Code saveChanges={() => {}} />
    </Form>
  );
};
