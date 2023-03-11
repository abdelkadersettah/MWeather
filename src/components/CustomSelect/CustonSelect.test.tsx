import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomSelect from './CustomSelect';

describe('CustomSelect', () => {
  const testProps = {
    options: [
      { label: 'Algeria', value: 'DZ' },
      {
        label: 'Malta',
        value: 'MLT',
      },
    ],
  };
  test('should render customSelect component', () => {
    render(<CustomSelect {...testProps} />);
    const customSelectContainer = screen.getByTestId('customSelect');
    expect(customSelectContainer).toBeInTheDocument();
  });
  test('should render the input element with type text', () => {
    render(<CustomSelect {...testProps} />);
    const input = screen.getByTestId('selectInput');
    expect(input).toBeInTheDocument();
  });
  test('should render the arrow button', () => {
    render(<CustomSelect {...testProps} />);
    const btn = screen.getByTestId('selectIndicator');
    expect(btn).toBeInTheDocument();
  });
  test('should open the options list when focus on the input', () => {
    render(<CustomSelect {...testProps} />);
    const input = screen.getByTestId('selectInput');
    userEvent.click(input);
    const options = document.querySelectorAll('ul');
    expect(options).not.toBeNull();
  });
  test('should open the options list when clicking on the indicator button', () => {
    render(<CustomSelect {...testProps} />);
    const btn = screen.getByTestId('selectIndicator');
    userEvent.click(btn);
    const options = document.querySelectorAll('ul');
    expect(options).not.toBeNull();
  });
  test('should select option when click on it', () => {
    render(<CustomSelect {...testProps} />);
    const btn = screen.getByTestId('selectIndicator');
    const input = document.querySelector('input');
    userEvent.click(btn);
    const firsItem = document.querySelectorAll('li')[0];
    userEvent.click(firsItem);
    expect(input?.value).toEqual('Algeria');
  });
  test('should fire onselectItem when clicking on option', () => {
    render(
      <CustomSelect
        {...testProps}
        onItemClick={(item) => expect(item?.value).toEqual('DZ')}
      />
    );
    const btn = screen.getByTestId('selectIndicator');
    const input = document.querySelector('input');
    userEvent.click(btn);
    const firsItem = document.querySelectorAll('li')[0];
    userEvent.click(firsItem);
  });
});
