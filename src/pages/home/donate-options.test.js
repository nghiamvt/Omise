import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { StateMock } from '@react-mock/state';
import DonateOptions from './donate-options';

describe('DonateOptions Component', () => {
  const onSubmit = jest.fn();
  const onClose = jest.fn();
  const component = ({ selectedValue }) => (
    <StateMock state={{ selectedValue }}>
      <DonateOptions
        id="1"
        options={[10, 20]}
        onSubmit={onSubmit}
        onClose={onClose}
      />
    </StateMock>
  );
  test('call onClose when click X', () => {
    const { container } = render(component({}));
    fireEvent.click(container.querySelector('.XClose'));
    expect(onClose).toHaveBeenCalled();
  });

  test('call onSubmit when handle submit', () => {
    const { queryByText, getByText } = render(component({ selectedValue: 10 }));
    expect(queryByText('DONATE THIS EVENT')).not.toHaveAttribute('disabled');
    fireEvent.click(getByText(/DONATE THIS EVENT/i));
    expect(onSubmit).toHaveBeenCalled();
  });

  test('enable submit button after an option is chosen', () => {
    const { queryByText, getByLabelText } = render(component({}));
    expect(queryByText('DONATE THIS EVENT')).toHaveAttribute('disabled');
    fireEvent.click(getByLabelText(/10/i, { selector: 'input' }));
    expect(queryByText('DONATE THIS EVENT')).not.toHaveAttribute('disabled');
  });
});
