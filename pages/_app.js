import App from 'next/app';
import Head from 'next/head';
import GlobalStyle from '@catho/quantum/GlobalStyle';
import Container from '@catho/quantum/Grid/sub-components/Container';
import ScrollUpButton from '../components/ScrollUpButton';
import '../static/style.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
          <Header />
        </header>
        <Container className="MainContent">
          <Component {...pageProps} />
        </Container>
        <footer className="Footer-wrapper">
          <Footer />
        </footer>
        <ScrollUpButton />
      </>
    );
  }
}
