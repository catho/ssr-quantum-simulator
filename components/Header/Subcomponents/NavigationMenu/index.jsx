import SandwichButton from '../SandwichButton';

const NavigationMenu = () => (
  <>
    <nav
      aria-label="Menu Principal"
      id="visibleDesktopMenu"
      className="VisibleMenu FlexEndPositioning"
    >
      <ul role="menu" className="NavList">
        <li role="menuitem" className="DisplayNoneOnSmallScreen">
          <a href="/cathocomponents">Catho Components</a>
        </li>
        <li role="menuitem" className="DisplayNoneOnSmallScreen">
          <a href="/quantum">Quantum</a>
        </li>
      </ul>
    </nav>
    <SandwichButton />
    <nav
      aria-label="Menu de opções"
      id="hiddenDesktopMenu"
      className="HiddenMenu"
    >
      <ul role="menu">
        <li role="menuitem" className="HiddenMenuNavigationItem">
          <a href="/cathocomponents">Catho Components</a>
        </li>
        <li role="menuitem" className="HiddenMenuNavigationItem">
          <a href="/quantum">Quantum</a>
        </li>
        <li role="menuitem">
          <a href="/render">Simulates renders</a>
        </li>
        <li role="menuitem">
          <a href="https://github.com/catho">Repositories</a>
        </li>
      </ul>
    </nav>
  </>
);

export default NavigationMenu;
