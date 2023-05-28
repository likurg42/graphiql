import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../../firebase.ts';
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
    padding-right: 30px;
    font-size: 20px;
    border-radius: 0;
    margin-bottom: 10px;

    &:focus {
      outline: none;
    }

    &[type='checkbox'] {
      width: 0;
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

interface FormData {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
  terms: boolean;
}

const LinkPrimary = styled(Link)`
  width: 100%;
`;

export const SignUpForm = () => {
  const { t } = useTranslation();

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/playground', { replace: true });
  }, [user, loading, navigate]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ reValidateMode: 'onSubmit' });

  const onSubmit = (data: FormData) => {
    const { email, username, password } = data;
    registerWithEmailAndPassword(username, email, password);
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">{t('Username')}</label>
      <span className={errors.username ? 'input-wrap error' : 'input-wrap'}>
        <input
          {...register('username', {
            required: `${t('Username is required')}`,
            maxLength: {
              value: 20,
              message: `${t('The length of the username must be no more than 20 characters')}`,
            },
            minLength: {
              value: 3,
              message: `${t('The length of the username must be more than 8 characters')}`,
            },
          })}
          id="username"
          type="text"
        />
        {errors.username && <span className="error-message">{errors.username.message}</span>}
      </span>
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
            minLength: {
              value: 8,
              message: `${t('The length of the email must be more than 8 characters')}`,
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
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g,
              message: `${t('At least one letter, one digit, one special character')}`,
            },
            minLength: {
              value: 8,
              message: `${t('The length of the password must be more than 8 characters')}`,
            },
          })}
        />
        {errors.password && <span className="error-message">{errors.password.message}</span>}
      </span>

      <label htmlFor="repeat_password">{t('Repeat password')}</label>
      <span className={errors.repeat_password ? 'input-wrap error' : 'input-wrap'}>
        <input
          id="repeat_password"
          type="password"
          {...register('repeat_password', {
            required: true,
            validate: (value: string) => {
              return watch('password') === value || 'Passwords should match!';
            },
          })}
        />
        {errors.repeat_password && (
          <span className="error-message">{errors.repeat_password.message}</span>
        )}
      </span>

      <label htmlFor="terms">
        <input
          id="terms"
          type="checkbox"
          {...register('terms', { required: `${t('You must agree with the terms')}` })}
        />
        <span />
        <span>
          {t('I agree to the')} <a href="/">{t('Terms of user')}</a>
        </span>
      </label>
      {errors.terms && <span className="error-message">{errors.terms.message}</span>}
      <StyledWrapper>
        <Button type="submit" primary>
          {t('Sign up')}
        </Button>
        <LinkPrimary to="/signin">
          <Button primary={false}>{t('Sign in')}</Button>
        </LinkPrimary>
      </StyledWrapper>
      <Button type="button" onClick={signInWithGoogle}>
        {t('Sign up with Google')}
      </Button>
    </StyledForm>
  );
};
