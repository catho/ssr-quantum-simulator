import App from 'next/app';
import Head from 'next/head';
import GlobalStyle from '@catho/quantum/GlobalStyle';

export default class HomePage extends App {
  componentDidMount() {
    const hiddenMenu = document.getElementById('hiddenMenu');
    document.getElementById('menuButton').addEventListener('click', showMenu);
    function showMenu() {
      const { classList } = hiddenMenu;
      if (classList.contains('HideMenu')) {
        classList.add('ShowMenu');
        classList.remove('HideMenu');
      } else {
        classList.remove('ShowMenu');
        classList.add('HideMenu');
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
          <div className="HeaderContainer">
            <div className="CathoLogo">
              <a href="/">
                <img src="../static/imgs/cathoLogo.png" alt="Logotipo Catho" />
              </a>
            </div>
            <nav className="VisibleMenu">
              <ul className="NavList">
                <li className="navItem">
                  <a href="/cathocomponents">Catho Components</a>
                </li>
                <li className="navItem">
                  <a href="/quantum">Quantum</a>
                </li>
                <li className="navItem">
                  <button className="SandwichButton" id="menuButton">
                    &#x2630;
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <nav id="hiddenMenu" className="HiddenMenu HideMenu">
            <ul>
              <li className="navItem">
                <a href="/render">Simulates renders</a>
              </li>
              <li className="navItem">
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
