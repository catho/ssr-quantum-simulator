import App from 'next/app';
import Head from 'next/head';
import GlobalStyle from '@catho/quantum/GlobalStyle';
import { Container, Col, Row } from '@catho/quantum';

export default class HomePage extends App {
  componentDidMount() {
    const hiddenMenu = document.getElementById('hiddenDesktopMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuButton = document.getElementById('menuSandwichButton');

    menuButton.addEventListener('click', showMenu);
    function showMenu() {
      const showHiddenMenu = window.innerWidth > 1023;
      const showMobileMenu = window.innerWidth < 1024;
      if (hiddenMenu.classList.contains('HideMenu') && showHiddenMenu) {
        hiddenMenu.classList.add('ShowMenu');
        hiddenMenu.classList.remove('HideMenu');
      } else {
        hiddenMenu.classList.remove('ShowMenu');
        hiddenMenu.classList.add('HideMenu');
      }

      if (mobileMenu.classList.contains('HideMenu') && showMobileMenu) {
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
        {' '}
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <GlobalStyle />
        <header>
          <Container>
            <Row>
              <Col
                medium={4}
                small={4}
                xsmall={2}
                large={4}
                className="CathoLogo"
              >
                <a href="/">
                  <img
                    src="../static/imgs/cathoLogo.png"
                    alt="Logotipo Catho"
                  />
                </a>
              </Col>
              <Col medium={8} small={4} xsmall={2} large={8}>
                <nav
                  id="visibleDesktopMenu"
                  className="VisibleMenu  FlexEndPositioning"
                >
                  <ul className="NavList">
                    <li className="DisplayNoneOnSmallScreen">
                      <a href="/cathocomponents">Catho Components</a>
                    </li>
                    <li className="DisplayNoneOnSmallScreen">
                      <a href="/quantum">Quantum</a>
                    </li>
                    <li>
                      <button
                        className="SandwichButton"
                        id="menuSandwichButton"
                      >
                        &#x2630;
                      </button>
                    </li>
                  </ul>
                </nav>
              </Col>
            </Row>
            <nav id="hiddenDesktopMenu" className="HiddenMenu HideMenu">
              <ul>
                <li>
                  <a href="/render">Simulates renders</a>
                </li>
                <li>
                  <a href="https://github.com/catho">Repositories</a>
                </li>
              </ul>
            </nav>
          </Container>

          <nav id="mobileMenu" className="MobileMenu HideMenu">
            <ul>
              <li className="HiddenMenuNavigationItem">
                <a href="/cathocomponents">Catho Components</a>
              </li>
              <li className="HiddenMenuNavigationItem">
                <a href="/quantum">Quantum</a>
              </li>
              <li className="HiddenMenuNavigationItem">
                <a href="/render">Simulates renders</a>
              </li>
              <li className="HiddenMenuNavigationItem">
                <a href="https://github.com/catho">Repositories</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="MainContent WhiteBackground">
          <Component {...pageProps} />
        </div>
        <footer className="Footer">
          <Container>
            <p>
              Essa tela foi especialmente desenvolvida para a dev.Ela
              maravilhosa da ACME.
            </p>
            <p>
              <time dateTime="2023-02-09">9 de fevereiro de 2023</time>
            </p>
            <p>Por designer com mão de android</p>
          </Container>
        </footer>
      </>
    );
  }
}
