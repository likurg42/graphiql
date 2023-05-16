import styled from 'styled-components';
import { usePlayground } from '../../../store/index.ts';

const ResultStyled = styled.pre`
  font-family: 'JetBrains Mono', monospace;
`;

export const Result = () => {
  const { result } = usePlayground();
  return <ResultStyled>{JSON.stringify(result, null, 2)}</ResultStyled>;
};
