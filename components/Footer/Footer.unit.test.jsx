import { render } from '@testing-library/react';
import Footer from '.';

test('should match the snapshot', () => {
  const { container } = render(<Footer />);

  expect(container).toMatchSnapshot();
});
