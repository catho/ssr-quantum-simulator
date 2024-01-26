import { render, screen } from '@testing-library/react';
import NavigationMenu from '.';

test('should match the snapshot', () => {
  const { container } = render(<NavigationMenu />);
  expect(container).toMatchSnapshot();
});

it('should render the links and sandwitch button', () => {
  render(<NavigationMenu />);

  const cathoComponentsLinks = screen.getAllByText(/Catho Components/i);
  const cathoComponentsVisibleMenuLink = cathoComponentsLinks[0];
  const cathoComponentsMobileMenuLink = cathoComponentsLinks[1];

  const quantumLinks = screen.getAllByText('Quantum');
  const quantumVisibleMenuLink = quantumLinks[0];
  const quantumMobileMenuLink = quantumLinks[1];

  const sandwitchBtn = screen.getByTestId('sandwichButton');
  const simulatesRendersMenuLink = screen.getByText('Simulates renders');
  const repositoriesMenuLink = screen.getByText('Repositories');

  expect(cathoComponentsVisibleMenuLink).toBeInTheDocument();
  expect(quantumVisibleMenuLink).toBeInTheDocument();
  expect(sandwitchBtn).toBeInTheDocument();
  expect(simulatesRendersMenuLink).toBeInTheDocument();
  expect(repositoriesMenuLink).toBeInTheDocument();
  expect(cathoComponentsMobileMenuLink).toBeInTheDocument();
  expect(quantumMobileMenuLink).toBeInTheDocument();
});
