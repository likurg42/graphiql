import styled from 'styled-components';
import { usePlayground } from '../../../store/index.ts';

const ResultStyled = styled.pre`
  font-family: 'JetBrains Mono', monospace;
  overflow-x: auto;
`;

export const Result = () => {
  const { result, error, loadingState } = usePlayground();
  const data = loadingState === 'error' ? error : result;

  return <ResultStyled>{JSON.stringify(data, null, 2)}</ResultStyled>;
};
