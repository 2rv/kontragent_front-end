import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';
import { getInitialStyleProps } from '../css';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          {/* <meta name="viewport" content="initial-scale=1, width=device-width" /> */}
          {/* <script src="//code-ya.jivosite.com/widget/DEIEyoYgaD" async></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// MyDocument.getInitialProps = getInitialStyleProps;

export const DocumentCore = MyDocument;
