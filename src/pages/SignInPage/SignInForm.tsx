import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword } from '../../firebase.ts';
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

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate('/console');
  }, [user, loading, navigate]);

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        logInWithEmailAndPassword(email, password);
      }}
    >
      <label htmlFor="email">Email</label>
      <input id="username" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledWrapper>
        <Button primary type="submit">
          Sign in
        </Button>
        <Link to="/signup">
          <Button primary={false}>Sign up</Button>
        </Link>
      </StyledWrapper>
    </StyledForm>
  );
};
