import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import RadioGroup from './radio-group';
import RadioOption from './radio-option';

describe('RadioGroup Component', () => {
  const onChange = jest.fn();
  const { queryByText, getByLabelText } = render(
    <RadioGroup name="test" onChange={onChange}>
      <span>Not RadioOption</span>
      <RadioOption value={10}>10</RadioOption>
      <RadioOption value={20}>20</RadioOption>
    </RadioGroup>
  );

  test('call onChange', () => {
    fireEvent.click(getByLabelText(/10/i, { selector: 'input' }));
    expect(onChange).toHaveBeenCalled();
  });

  test('other type cannot be render', () => {
    expect(queryByText(/Not RadioOption/i)).not.toBeInTheDocument();
  });
});
