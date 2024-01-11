import { render } from '@testing-library/react';
import ScrollUpButton from '.';

test('should match the snapshot', () => {
  const { container } = render(<ScrollUpButton />);
  expect(container).toMatchSnapshot();
});
