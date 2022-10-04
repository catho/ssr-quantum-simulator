import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { GlobalStyle } from '@catho/quantum';
import { HeaderResponsive, FooterResponsive, HeaderSimple, ConsentWidget }from '@catho-private/catho-components';

export default class HomePage extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
        <ConsentWidget apiKey="eZqa0tglwM1TZeiKFpRX9Jekl1cv2iD3iJpeJqV9" />
      </>
    );
  }
}
