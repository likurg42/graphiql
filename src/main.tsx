import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/ApolloClient.ts';
import { App } from './App.tsx';
import './style/style.css';

export const Main = async () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
