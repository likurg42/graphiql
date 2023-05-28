import { withTranslation } from 'react-i18next';
import { t } from 'i18next';

const Widget = () => {
  return (
    <form>
      <input type="email" />
      <input type="submit" value={t('Sign up') as string} />
    </form>
  );
};

export default withTranslation()(Widget);
