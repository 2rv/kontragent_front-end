import createEmotionServer from '@emotion/server/create-instance';
import React from 'react';
import Document from 'next/document';

import createCache from '@emotion/cache';

export async function getInitialStyleProps(ctx) {
  const originalRenderPage = ctx.renderPage;

  const cache = createCache({ key: 'css' });
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [
      ...(React.Children.toArray(initialProps.styles) || null),
      ...(emotionStyleTags || null),
    ],
  };
}
