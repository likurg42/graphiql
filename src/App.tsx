import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useCallback, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useLocalStorage } from './utils/hooks/useLocalStorage';
import { PageLoader } from './components/PageLoader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const PlaygroundPage = lazy(() => import('./pages/PlaygroundPage/PlaygroundPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'));

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
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/playground"
          element={
            <Suspense fallback={<PageLoader />}>
              <PlaygroundPage />
            </Suspense>
          }
        />
        <Route
          path="/signin"
          element={
            <Suspense fallback={<PageLoader />}>
              <SignInPage />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<PageLoader />}>
              <SignUpPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Container>
  );
};
