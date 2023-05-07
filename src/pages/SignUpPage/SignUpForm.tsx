import styled from 'styled-components';
import Button from '../../components/Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 386px;
  margin: 0 auto;
  margin-bottom: 60px;
  align-items: stretch;
  & label {
    cursor: pointer;
    color: #838b93;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    &[for='terms'] {
      display: flex;
      align-items: flex-end;
      color: #000000;
      font-weight: 400;
      margin-bottom: 20px;
    }
  }
  & input {
    border: 1px solid #000000;
    padding: 13px 10px;
    font-size: 20px;
    border-radius: 0;
    margin-bottom: 30px;
    &:focus {
      outline: none;
    }
    &[type='checkbox'] {
      position: absolute;
      opacity: 0;
      z-index: -1;
      & + span {
        display: inline-block;
        background-image: url('/checkbox.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 22px;
        height: 22px;
        margin-right: 10px;
      }
      &:checked + span {
        background-image: url('/checkbox-checked.svg');
      }
    }
  }
  & a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignForm = () => {
  return (
    <StyledForm>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />

      <label htmlFor="password">Password</label>
      <input id="password" type="password" />

      <label htmlFor="repeat-password">Repeat Password</label>
      <input id="repeat-password" type="password" />
      <label htmlFor="terms">
        <input id="terms" type="checkbox" />
        <span />
        <span>
          I agree to the <a href="/">Terms of User</a>
        </span>
      </label>
      <StyledWrapper>
        <Button primary>Sign up </Button>
        <Button primary={false}>Sign in </Button>
      </StyledWrapper>
    </StyledForm>
  );
};
