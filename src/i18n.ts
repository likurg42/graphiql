import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Log out': 'Log out',
      'Sign in': 'Sign in',
      'Sign up': 'Sign up',
      'Loading...': 'Loading...',
      '404 Ops': '404 Ops',
      'Back to home page': 'Back to home page',
      Email: 'Email',
      Username: 'Username',
      Password: 'Password',
      'Repeat password': 'Repeat password',
      'I agree to the': 'I agree to the',
      'Terms of user': 'Terms of User',
      'Login with Google': 'Login with Google',
      'Sign up with Google': 'Sign up with Google',
      // 'Email Address is required': 'Email Address is required',
    },
  },
  ru: {
    translation: {
      'Log out': 'Выйти',
      'Sign in': 'Войти',
      'Sign up': 'Регистрация',
      'Loading...': 'Загрузка...',
      '404 Ops': '404 Упс',
      'Back to home page': 'Вернуться на главную страницу',
      Email: 'Электронная почта',
      Username: 'Имя пользователя',
      Password: 'Пароль',
      'Repeat password': 'Повторите пароль',
      'I agree to the': 'Я согласен c',
      'Terms of user': 'Условиями использования',
      'Login with Google': 'Войти c помощью Google',
      'Sign up with Google': 'Регистрация c помощью Google',
      // 'Email Address is required': 'Укажите электронную почту',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
