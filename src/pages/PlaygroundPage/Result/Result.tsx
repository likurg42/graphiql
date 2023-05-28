import styled from 'styled-components';
import { usePlayground } from '../../../store/index.ts';

const ResultStyled = styled.pre`
  display: block;
  font-family: 'JetBrains Mono', monospace;
  overflow-y: scroll;
  max-height: 80vh;
`;

export const Result = () => {
  const { result, error, loadingState } = usePlayground();
  const data = loadingState === 'error' ? error : result;

  if (loadingState === 'pending') {
    return <ResultStyled>Loading...</ResultStyled>;
  }

  return <ResultStyled>{JSON.stringify(data, null, 2)}</ResultStyled>;
};
