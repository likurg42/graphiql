import styled from 'styled-components';
import { Editor } from '../Editor/Editor.tsx';
import { Result } from '../Result/Result.tsx';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100%;
  gap: 1rem;

  padding: ${(props) => props.theme.spacing[1]};
  background-color: ${(props) => props.theme.colors.bgClr};
  border-radius: ${(props) => props.theme.spacing.borderRadius.lg};

  overflow: hidden;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px 400px;
  }
`;

export const Ide = () => (
  <Container>
    <Editor />
    <Result />
  </Container>
);
