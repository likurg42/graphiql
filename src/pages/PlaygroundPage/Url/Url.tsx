import styled from 'styled-components';

const Input = styled.input``;

export const Url = ({ value }: { value: string }) => <Input defaultValue={value} />;
