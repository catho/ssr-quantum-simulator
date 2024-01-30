import { render, screen } from '@testing-library/react';
import ComponentViewer from '.';

const ExampleComponent = () => (
  <article>
    <p>Lorem ipsum dolor sit amet.</p>
  </article>
);

const componentMock = {
  name: 'Mock Name',
  description: 'Mock Description',
  children: <ExampleComponent />,
};

test('should match the snapshot', () => {
  const { container } = render(<ComponentViewer {...componentMock} />);
  expect(container).toMatchSnapshot();
});

test('should display the given props correctly', () => {
  render(<ComponentViewer {...componentMock} />);

  expect(screen.getByText('Mock Name')).toBeInTheDocument();
  expect(screen.getByText('Mock Description')).toBeInTheDocument();
  expect(screen.getByText('Lorem ipsum dolor sit amet.')).toBeInTheDocument();
});
