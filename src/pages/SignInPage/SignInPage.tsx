import { useTranslation } from 'react-i18next';
import Title from '../../components/Title';
import { SignInForm } from './SignInForm';

const SignUpPage = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Title>{t('Sign in')}</Title>
      <SignInForm />
    </section>
  );
};

export default SignUpPage;
