import ReactDOM from 'react-dom/client';
import { Main } from './main.tsx';

const run = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  const dom = await Main();
  root.render(dom);
};

await run();
