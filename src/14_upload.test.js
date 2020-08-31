import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Upload from './14_upload';

test('upload', () => {
  const file = new File(['f'], 'f.png', {type: 'image/png'})
  render(<Upload />);
  const input = screen.getByLabelText(/upload/i);
  userEvent.upload(input, file);
  expect(input.files[0]).toStrictEqual(file);
});