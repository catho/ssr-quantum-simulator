import App from 'next/app';
import GlobalStyle from '@catho/quantum/GlobalStyle';
import { Hide } from '@catho/quantum';

export default class HomePage extends App {
  componentDidMount() {
    const hiddenMenu = document.getElementById('hiddenMenu');
    document.getElementById('menuButton').addEventListener('click', showMenu);
    const mobileMenu = document.getElementById('MobileMenu');
    function showMenu() {
      const showHiddenMenu = window.innerWidth > 1023;
      if (
        hiddenMenu.classList.contains('HideMenu') &&
        showHiddenMenu
      ) {
        hiddenMenu.classList.add('ShowMenu');
        hiddenMenu.classList.remove('HideMenu');
      } else {
        hiddenMenu.classList.remove('ShowMenu');
        hiddenMenu.classList.add('HideMenu');
      }

      if (
        mobileMenu.classList.contains('HideMenu') &&
        window.innerWidth < 1024
      ) {
        mobileMenu.classList.add('ShowMenu');
        mobileMenu.classList.remove('HideMenu');
      } else {
        mobileMenu.classList.add('HideMenu');
        mobileMenu.classList.remove('ShowMenu');
      }
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <header>
          <div className="HeaderContainer">
            <div className="CathoLogo">
              <a href="/">
                <img src="../static/imgs/cathoLogo.png" alt="Logotipo Catho" />
              </a>
            </div>

            <nav id="visibleMenu" className="VisibleMenu">
              <ul className="NavList">
                <Hide small xsmall>
                  <div className="VisibleMenu">
                    <li>
                      <a href="/cathocomponents">Catho Components</a>
                    </li>
                    <li>
                      <a href="/quantum">Quantum</a>
                    </li>
                  </div>
                </Hide>
                <li>
                  <button className="SandwichButton" id="menuButton">
                    &#x2630;
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <nav id="hiddenMenu" className="HiddenMenu HideMenu">
            <ul>
              <li className="NavItemHidden">
                <a href="/render">Simulates renders</a>
              </li>
              <li className="NavItemHidden">
                <a href="https://github.com/catho">Repositories</a>
              </li>
            </ul>
          </nav>

          <nav id="MobileMenu" className="MobileMenu HideMenu">
            <ul>
              <li className="NavItemHidden">
                <a href="/cathocomponents">Catho Components</a>
              </li>
              <li className="NavItemHidden">
                <a href="/quantum">Quantum</a>
              </li>
              <li className="NavItemHidden">
                <a href="/render">Simulates renders</a>
              </li>
              <li className="NavItemHidden">
                <a href="https://github.com/catho">Repositories</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="MainContent WhiteBackground">
          <Component {...pageProps} />
        </div>
        <footer className="Footer">
          <p>
            Essa tela foi especialmente desenvolvida para a dev.Ela maravilhosa
            da ACME.
          </p>
          <p>
            <time dateTime="2023-02-09">9 de fevereiro de 2023</time>
          </p>
          <p>Por designer com mão de android</p>
        </footer>
      </>
    );
  }
}
