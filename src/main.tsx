import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { setupStore } from './store/index.ts';
import { App } from './App.tsx';
import './style/style.css';
import { mainTheme } from './style/mainTheme.ts';

export const Main = async () => {
  const store = setupStore();

  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
