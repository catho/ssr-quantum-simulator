import { Container } from '@catho/quantum';
import NavigationMenu from './Subcomponents/NavigationMenu';
import Logo from './Subcomponents/Logo';

const Header = () => (
  <Container>
    <div className="NavigationBar">
      <Logo />
      <NavigationMenu />
    </div>
  </Container>
);

export default Header;
