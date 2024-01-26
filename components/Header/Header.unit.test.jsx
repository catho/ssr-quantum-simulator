import { render, screen } from '@testing-library/react';
import Header from '.';

test('should match the snapshot', () => {
  const { container } = render(<Header />);

  expect(container).toMatchSnapshot();
});

test('should render logo and NavigationMenu', () => {
  render(<Header />);

  const logo = screen.getByRole('img');
  const pageLinks = screen.getAllByRole('link');
  const homeLink = pageLinks[0];
  const navigationMenu = screen.getByRole('navigation', {
    name: 'Menu Principal',
  });

  expect(logo).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(navigationMenu).toBeInTheDocument();
});
