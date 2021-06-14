import { redirect } from '../../../main/navigation/navigation.core';

import { REQUERED_QUERY_PARAMETR } from '../../../core/auth-change-password';

import { getQuery } from '../../../main/navigation';

export const codeVerificationRedirectNoCode = (
  ctx: any,
  pathToRedirect: string,
) => {
  const { res, query } = ctx;

  if (res) {
    if (!query[REQUERED_QUERY_PARAMETR]) {
      res.writeHead(302, {
        Location: pathToRedirect,
      });
      res.end();
    }
  } else {
    if (!getQuery(REQUERED_QUERY_PARAMETR)) redirect(pathToRedirect);
  }
};
