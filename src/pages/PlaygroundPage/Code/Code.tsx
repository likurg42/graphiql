import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';

const Container = styled.textarea`
  font-family: 'JetBrains Mono', monospace;
  padding: 0;
  border: none;
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  outline: none;
  white-space: pre;
  resize: none;
`;

export const Code = forwardRef(
  ({ ...props }: UseFormRegisterReturn, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return <Container {...props} ref={ref} />;
  }
);
