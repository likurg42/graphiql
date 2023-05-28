import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { t } from 'i18next';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../firebase.ts';
import Button from '../../components/Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  max-width: 500px;
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

  & .input-wrap.error {
    display: inline-block;
    position: relative;
    margin-bottom: 10px;

    &:after {
      position: absolute;
      right: 5px;
      top: 13px;
      content: url('/error.svg');
      display: inline-block;
    }
  }

  & input {
    width: 100%;
    border: 1px solid #000000;
    padding: 13px 10px;
    font-size: 20px;
    border-radius: 0;
    margin-bottom: 10px;

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

  & .error-message {
    font-size: 12px;
    color: red;
    margin-bottom: 10px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const LinkPrimary = styled(Link)`
  width: 100%;
`;

interface LoginData {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ reValidateMode: 'onSubmit' });
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate('/playground');
  }, [user, navigate]);
  const onSubmit = (data: LoginData) => {
    const { email, password } = data;
    logInWithEmailAndPassword(email, password);
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">{t('Email')}</label>
      <span className={errors.email ? 'input-wrap error' : 'input-wrap'}>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: `${t('Email Address is required')}`,
            pattern: {
              value:
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
              message: `${t('Enter correct email address')}`,
            },
          })}
        />
        {errors.email && <span className="error-message">{errors.email.message}</span>}
      </span>

      <label htmlFor="password">{t('Password')}</label>
      <span className={errors.password ? 'input-wrap error' : 'input-wrap'}>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: `${t('Password is required')}`,
          })}
        />
        {errors.password && <span className="error-message">{errors.password.message}</span>}
      </span>
      <StyledWrapper>
        <Button primary type="submit">
          {t('Sign in')}
        </Button>
        <LinkPrimary to="/signup">
          <Button primary={false}>{t('Sign up')}</Button>
        </LinkPrimary>
      </StyledWrapper>
      <Button type="button" onClick={signInWithGoogle}>
        {t('Login with Google')}
      </Button>
    </StyledForm>
  );
};
