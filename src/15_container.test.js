import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {server, rest} from './mockServer';
import Quote, {QUOTES_API} from './15_container';

test('random quote', async () => {
  server.use(
    rest.get(QUOTES_API, (req, res, ctx) => {
      return res(ctx.json({
        quote: {
          quoteText: 'Jest',
          quoteAuthor: 'Me',
        },
      }));
    }),
  );
  render(<Quote />);
  expect(screen.getByText('Loading ...')).toBeInTheDocument();
  expect(await screen.findByTestId('quote'))
    .toHaveTextContent('Jest');
});

test('using async helpers', async () => {
  server.use(
    rest.get(QUOTES_API, (req, res, ctx) => {
      return res(
        ctx.status(500),
        ctx.json({message: 'Server error'}),
      );
    }),
  );
  const {container} = render(<Quote />);
  expect(screen.getByText('Loading ...')).toBeInTheDocument();
  await waitFor(() => {
    expect(container.querySelector('.AppError'))
      .toHaveTextContent('Server error');
  });
});