import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/ApolloClient.ts';
import {
  render, screen, userEvent,
} from './tests/utils/test-utils.ts';
import { App } from './App';
import { posts } from './tests/mocks/handlers.ts';

it('Should return posts when clicking fetch button', async () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );

  expect(screen.getByRole('heading', {
    name: 'MSW Testing Library Example',
    level: 1,
  })).toBeDefined();

  await userEvent.click(screen.getByRole('button', { name: 'Fetch Posts' }));

  // await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'));

  posts.forEach((post) => {
    expect(screen.getByRole('heading', { name: post.title, level: 2 })).toBeDefined();
    expect(screen.getByText(post.body)).toBeDefined();
  });
});

it('Should return posts when clicking fetch with graphql button', async () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );

  expect(screen.getByRole('heading', {
    name: 'MSW Testing Library Example',
    level: 1,
  })).toBeDefined();

  await userEvent.click(screen.getByRole('button', { name: 'Fetch Posts GraphQL' }));

  // await waitForElementToBeRemoved(() => screen.queryByLabelText('loading'));

  posts.forEach((post) => {
    expect(screen.getByRole('heading', { name: post.title, level: 2 })).toBeDefined();
    expect(screen.getByText(post.body)).toBeDefined();
  });
});
