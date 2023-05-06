import { graphql, rest } from 'msw';

// Mock Data
export const posts = [
  {
    userId: 1,
    id: 1,
    title: 'first post title',
    body: 'first post body',
  },
  {
    userId: 2,
    id: 5,
    title: 'second post title',
    body: 'second post body',
  },
  {
    userId: 3,
    id: 6,
    title: 'third post title',
    body: 'third post body',
  },
];

const jsonPlaceHolder = graphql.link('https://jsonplaceholder.ir/graphql');
// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (_, res, ctx) => res(ctx.status(200), ctx.json(posts))),

  jsonPlaceHolder.query('posts', (_, res, ctx) => res(
    ctx.data({
      posts,
    }),
  )),

];
