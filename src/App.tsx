import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import PlaygroundPage from './pages/PlaygroundPage/PlaygroundPage';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import { useLocalStorage } from './utils/hooks/useLocalStorage';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1420px;
`;

export const App = () => {
  const { i18n } = useTranslation();
  const [language] = useLocalStorage<string>('language', 'en');

  const changeLanguage = useCallback(
    (lng: string | undefined) => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );

  useEffect(() => {
    changeLanguage(language);
  }, [language, changeLanguage]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Container>
  );
};
