import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';

import { getInitialStyleProps } from '../main/css';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styleElement = await getInitialStyleProps(ctx);

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          {styleElement}
        </React.Fragment>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <meta charSet="UTF-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
