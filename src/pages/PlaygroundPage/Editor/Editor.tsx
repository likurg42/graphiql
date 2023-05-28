import { useMemo } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { QueryButton } from '../QueryButton/QueryButton.tsx';
import { usePlayground } from '../../../store/index.ts';
import { Code } from '../Code/Code.tsx';
import { Tabs } from '../Tabs/Tabs.tsx';

const Form = styled.form`
  display: grid;
  padding: ${({ theme }) => theme.spacing[2]};
  grid-template-columns: 1fr 50px;
  grid-template-rows: 3fr auto;
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

type EditorForm = {
  query: string;
  headers: string;
  variables: string;
};

export const Editor = () => {
  const { performQuery } = usePlayground();
  const { register, handleSubmit } = useForm<EditorForm>({});

  const onSubmit = (data: EditorForm) => {
    const { query, headers, variables } = data;
    performQuery({
      query,
      variables,
      headers,
    });
  };

  const tabs = useMemo(
    () => [
      {
        title: 'Variables',
        element: <Code {...register('variables')} />,
      },
      {
        title: 'Headers',
        element: <Code {...register('headers')} />,
      },
    ],
    [register]
  );

  return (
    <Form>
      <Code {...register('query')} />
      <Toolbar>
        <QueryButton submit={handleSubmit(onSubmit)} />
      </Toolbar>
      <Settings>
        <Tabs tabList={tabs} />
      </Settings>
    </Form>
  );
};
