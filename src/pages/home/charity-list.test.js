import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { StateMock } from '@react-mock/state';
import CharityList from './charity-list';

describe('CharityList Component', () => {
  const charities = [
    {
      id: 1,
      name: 'Baan Kru Noi',
      image: 'baan-kru-noi.jpg',
    },
    {
      id: 2,
      name: 'Habitat for Humanity Thailand',
      image: 'habitat-for-humanity-thailand.jpg',
    },
  ];
  test('given no charities', () => {
    const { container } = render(<CharityList charities={[]} />);
    expect(container).toHaveTextContent('No data found');
    expect(container.querySelectorAll('.Card')).toHaveLength(0);
  });

  describe('given charities', async () => {
    // Mock a promise
    const onDonate = jest.fn(() => {
      return new Promise((resolve, reject) => {
        resolve('some string');
      });
    });
    const component = ({ selectedCharity }) => (
      <StateMock state={{ selectedCharity }}>
        <CharityList charities={charities} onDonate={onDonate} />
      </StateMock>
    );

    test('full flow of donate a charity', () => {
      const { container, getByText, getByLabelText, debug } = render(
        component({})
      );
      // show data
      expect(container).not.toHaveTextContent('No data found');
      expect(container.querySelectorAll('.Card')).toHaveLength(2);

      // show option screen
      fireEvent.click(getByText(/DONATE/i));
      expect(container).toHaveTextContent('DONATE THIS EVENT');
      expect(getByText('DONATE THIS EVENT')).toHaveAttribute('disabled');

      // select an option
      fireEvent.click(getByLabelText(/10/i, { selector: 'input' }));
      expect(getByText('DONATE THIS EVENT')).not.toHaveAttribute('disabled');

      // submit option
      fireEvent.click(container.querySelector('.FlatBtn'));
      expect(onDonate).toHaveBeenCalled();

      // close option screen
      fireEvent.click(container.querySelector('.XClose'));
      expect(container).not.toHaveTextContent('DONATE THIS EVENT');
    });
  });
});
