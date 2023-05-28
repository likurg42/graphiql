import { BounceLoader } from 'react-spinners';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PageLoader = () => (
  <LoaderWrapper>
    <BounceLoader color="#D60590" />
  </LoaderWrapper>
);
