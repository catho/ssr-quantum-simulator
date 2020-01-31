import Document, { Head, Main, NextScript } from 'next/document';
import { GlobalStyle } from '@catho/quantum';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps = async ctx => {
    const sheet = new ServerStyleSheet ();
    const sheets = new ServerStyleSheets ();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage ({
        enhanceApp: App => props => sheet.collectStyles (
          sheets.collect (
            <>
              <GlobalStyle />
              <App {...props} />
            </>
            ),
        ),
      });

      const initialProps = await Document.getInitialProps (ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheets.getStyleElement ()}
            {sheet.getStyleElement ()}
          </>
        ),
      };
    } finally {
      sheet.seal ();
    }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/static/quantum.css" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale = 1.0"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}