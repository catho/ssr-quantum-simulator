import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps = async ctx => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  };

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/static/quantum.css" />
          <link rel="stylesheet" href="/static/styles_reset.css" />
          <link rel="stylesheet" href="/static/style.css" />
          {this.props.styleTags}
        </Head>

        <body>
          <main>
            <Main />
            <NextScript />
          </main>
        </body>
      </html>
    );
  }
}
