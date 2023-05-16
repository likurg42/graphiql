import styled from 'styled-components';
import { Editor } from '../Editor/Editor.tsx';
import { Result } from '../Result/Result.tsx';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
`;

export const Ide = () => (
  <Container>
    <Editor />
    <Result />
  </Container>
);
