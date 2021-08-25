import { redirect } from '../../../main/navigation/navigation.core';

import { CODE_QUERY_NAME } from './code-verification.constant';

import { getQuery } from '../../../main/navigation';

export const codeVerificationRedirectNoCode = (
  ctx: any,
  pathToRedirect: string,
) => {
  const { res, query } = ctx;

  if (res) {
    if (!query[CODE_QUERY_NAME]) {
      res.writeHead(302, {
        Location: pathToRedirect,
      });
      res.end();
    }
  } else {
    if (!getQuery(CODE_QUERY_NAME)) redirect(pathToRedirect);
  }
};
