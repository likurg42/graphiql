import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import AuthPage from './pages/AuthPage/AuthPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import PlaygroundPage from './pages/PlaygroundPage/PlaygroundPage';
import Header from './components/Header';
import Footer from './components/Footer';

const Container = styled.div`
  margin: 0 auto;
  min-height: 100%;
  max-width: 1420px;
`;

export const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ide" element={<PlaygroundPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Container>
  );
};
