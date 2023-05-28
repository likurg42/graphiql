import ReactDOM from 'react-dom/client';
import { Main } from './main.tsx';
import './i18n.ts';

const run = () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  const dom = Main();
  root.render(dom);
};

run();
