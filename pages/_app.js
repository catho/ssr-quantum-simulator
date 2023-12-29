import App from 'next/app';
import Head from 'next/head';
import GlobalStyle from '@catho/quantum/GlobalStyle';
import { Container } from '@catho/quantum';
import ScrollUpButton from '../components/ScrollUpButton';
import '../static/style.css';

export default class HomePage extends App {
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
            <div className="NavigationBar">
              <a href="/">
                <img src="../static/imgs/cathoLogo.png" alt="Logotipo Catho" />
              </a>
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
              <input
                type="checkbox"
                aria-controls="hiddenDesktopMenu"
                aria-expanded="false"
                aria-label="Menu"
                id="menuSandwichButton"
              />
              <label className="SandwichButton" htmlFor="menuSandwichButton">
                &#x2630;
              </label>
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
            </div>
          </Container>
        </header>
        <Container className="MainContent">
          <Component {...pageProps} />
        </Container>
        <footer className="Footer-wrapper">
          <Container className="Footer-text">
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
        <ScrollUpButton />
      </>
    );
  }
}
