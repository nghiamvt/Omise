import React from 'react';
import { render } from 'react-testing-library';

import Loading from './loading';

describe('Loading Component', () => {
  test('Loading without props', () => {
    const { queryByText } = render(<Loading />);
    expect(queryByText(/Loading/i)).toBeInTheDocument();
  });

  test('Loading with props.active = true', async () => {
    const { queryByText } = render(<Loading active />);
    expect(queryByText(/Loading/i)).toBeInTheDocument();
  });

  test('Loading with props.active = false', async () => {
    const { queryByText } = render(<Loading active={false} />);
    expect(queryByText(/Loading/i)).toBeNull();
  });
});
