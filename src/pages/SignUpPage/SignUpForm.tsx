import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
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
  & .error {
    font-size: 12px;
    color: red;
    margin-bottom: 10px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface FormData {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
  terms: boolean;
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({ reValidateMode: 'onSubmit' });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username</label>
      <input
        {...register('username', {
          required: 'Username Address is required',
          maxLength: {
            value: 20,
            message: 'The length of the username must be no more than 20 characters',
          },
          minLength: {
            value: 3,
            message: 'The length of the username must be more than 8 characters',
          },
        })}
        id="username"
        type="text"
      />
      {errors.username && <span className="error">{errors.username.message}</span>}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        {...register('email', {
          required: 'Email Address is required',
          pattern: {
            value:
              /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
            message: 'Enter correct email address',
          },
          minLength: {
            value: 8,
            message: 'The length of the email must be more than 8 characters',
          },
        })}
      />
      {errors.email && <span className="error">{errors.email.message}</span>}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        {...register('password', {
          required: 'Password is required',
          pattern: {
            value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
            message: 'At least one letter, one digit, one special character',
          },
          minLength: {
            value: 8,
            message: 'The length of the email must be more than 8 characters',
          },
        })}
      />
      {errors.password && <span className="error">{errors.password.message}</span>}
      <label htmlFor="repeat_password">Repeat Password</label>
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
      {errors.repeat_password && <span className="error">{errors.repeat_password.message}</span>}
      <label htmlFor="terms">
        <input
          id="terms"
          type="checkbox"
          {...register('terms', { required: 'You must agree with the terms' })}
        />
        <span />
        <span>
          I agree to the <a href="/">Terms of User</a>
        </span>
      </label>
      {errors.terms && <span className="error">{errors.terms.message}</span>}
      <StyledWrapper>
        <Button type="submit" primary>
          Sign up
        </Button>
        <Link to="/signin">
          <Button primary={false}>Sign in </Button>
        </Link>
      </StyledWrapper>
    </StyledForm>
  );
};
