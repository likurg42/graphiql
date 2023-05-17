import { useTranslation } from 'react-i18next';
import Title from '../../components/Title';
import { SignUpForm } from './SignUpForm';

const SignUpPage = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Title>{t('Sign up')}</Title>
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
