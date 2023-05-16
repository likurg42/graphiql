import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from './store/index.ts';
import { App } from './App.tsx';
import './style/style.css';

export const Main = async () => {
  const store = setupStore();

  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};
