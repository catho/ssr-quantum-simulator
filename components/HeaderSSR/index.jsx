import { Container } from '@catho/quantum';
import NavigationMenu from '../NavigationMenu';

const HeaderSSR = () => (
  <Container>
    <div className="NavigationBar">
      <a href="/">
        <img src="../static/imgs/cathoLogo.png" alt="Logotipo Catho" />
      </a>
      <NavigationMenu />
    </div>
  </Container>
);

export default HeaderSSR;
