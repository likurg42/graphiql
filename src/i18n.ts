import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Home title': 'Interactive GraphQL tool',
      'Home paragraph':
        'An interactive web dashboard for developing, testing and documenting GraphQL queries. Investigate, compose and submit requests and get responses in real time',
      'Main Page': 'Main Page',
    },
  },
  ru: {
    translation: {
      'Log out': 'Выйти',
      'Sign in': 'Войти',
      'Sign up': 'Регистрация',
      'Loading...': 'Загрузка...',
      'Go to playground': 'Открыть редактор',
      'Home title': 'Интерактивный инструмент GraphQL',
      'Home paragraph':
        'Интерактивная веб панель для разработки, тестирования и документирования запросов GraphQL. Иследуйте, составляйте и отправляйте запросы, a также получайте ответы в режиме реального врмемни',
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
      'Username is required': 'Введите имя пользователя',
      'The length of the username must be no more than 20 characters':
        'Длина имени пользователя должна быть не более 20 символов',
      'The length of the username must be more than 8 characters':
        'Длина имени пользователя должна быть более 8 символов',
      'Email Address is required': 'Укажите электронную почту',
      'Enter correct email address': 'Введите корректный адрес электронной почты',
      'The length of the email must be more than 8 characters':
        'Длинана электронной почты должна быть более 8 символов',
      'Password is required': 'Введите пароль',
      'At least one letter, one digit, one special character':
        'Хотя бы одна буква, одна цифра, один специальный символ',
      'The length of the password must be more than 8 characters':
        'Длина пароля должна быть более 8 символов',
      'You must agree with the terms': 'Вы должны принять условия использования',
      'Main Page': 'Главная',
      Playground: 'Редактор',
      Variables: 'Переменные',
      Headers: 'Заголовки',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  interpolation: {
    escapeValue: false,
  },
  lng: 'en',
});

export default i18n;
