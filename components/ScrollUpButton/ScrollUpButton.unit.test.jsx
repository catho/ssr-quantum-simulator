import { render, fireEvent, screen } from '@testing-library/react';
import ScrollUpButton from '.';

window.scroll = jest.fn();

test('should match the snapshot', () => {
  const { container } = render(<ScrollUpButton />);

  expect(container).toMatchSnapshot();
});

test('should not show when the scroll is under 75px', () => {
  render(<ScrollUpButton />);

  expect(screen.queryByRole('button')).not.toBeInTheDocument();
});

test('should appear when window height is below 75px', () => {
  render(<ScrollUpButton />);

  fireEvent.scroll(window, { target: { scrollY: 76 } });

  const scrollUpBtn = screen.getByRole('button');

  expect(scrollUpBtn).toBeInTheDocument();
});

test('should not appear when window height is under 75px', async () => {
  const mockScrollFunction = jest.fn();

  window.scroll = mockScrollFunction;

  render(<ScrollUpButton />);

  fireEvent.scroll(window, { target: { scrollY: 76 } });

  const scrollUpBtn = screen.getByRole('button');

  expect(scrollUpBtn).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button'));

  expect(mockScrollFunction).toHaveBeenCalled();
});
