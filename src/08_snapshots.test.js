import React from 'react';
import {render} from '@testing-library/react';
import Div from './07_elements';

test('snapshots', () => {
  const {container} = render(<Div value="Snapshot" />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="text"
    >
      Snapshot
    </div>
  `);
});