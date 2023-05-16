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
  padding: ${({ theme }) => theme.spacing[2]};
  grid-template-columns: 1fr 50px;
  grid-template-rows: 3fr 1fr;
  gap: 1rem;
  background-color: white;
  border-radius: ${(props) => props.theme.spacing.borderRadius.md};
  box-shadow: 0 6px 20px rgba(59, 76, 106, 0.13), 0 1.34018px 4.46726px rgba(59, 76, 106, 0.08),
    0 0.399006px 1.33002px rgba(59, 76, 106, 0.05);
  overflow: hidden;
`;

const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Settings = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.bgClr};
  padding-top: 1rem;
  grid-column: span 2;
`;

const SubTitle = styled.div`
  font-family: Inter, sans-serif;
  font-size: 1rem;
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
      <Settings>
        <SubTitle>Variables</SubTitle>
        <Code saveChanges={() => {}} />
      </Settings>
    </Form>
  );
};
