import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { GlobalStyle } from '@catho/quantum';

export default class HomePage extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}
