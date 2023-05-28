import { useTranslation, withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ButtonAccent } from '../../components/ButtonAccent';
import { auth } from '../../firebase.ts';

const StyledLink = styled(Link)`
  display: block;
  padding: 1rem;
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
`;

const Widget = () => {
  const { t } = useTranslation();
  const [user, loading] = useAuthState(auth);

  return (
    <ButtonAccent type="button">
      {user && !loading ? (
        <StyledLink to="/playground">{t('Go to playground')}</StyledLink>
      ) : (
        <StyledLink to="/signup">{t('Sign up')}</StyledLink>
      )}
    </ButtonAccent>
  );
};

export default withTranslation()(Widget);
