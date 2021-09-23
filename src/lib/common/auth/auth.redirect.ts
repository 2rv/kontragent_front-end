import { redirect } from '../../../main/navigation/navigation.core';
import { AuthUserDto } from './auth.type';
import { AUTH_STORE_NAME } from './auth.constant';

export const authRedirectLogged = (ctx: any, pathToRedirect: string) => {
  const { res, token = null } = ctx;

  if (token) {
    if (res) {
      res.writeHead(302, {
        Location: pathToRedirect,
      });
      res.end();
    } else {
      redirect(pathToRedirect);
    }
  }
};

export const authRedirectPrivated = (ctx: any, pathToRedirect: string) => {
  const { res, token = null } = ctx;

  if (!token) {
    if (res) {
      res.writeHead(301, {
        Location: pathToRedirect,
      });
      res.end();
    } else {
      redirect(pathToRedirect);
    }
  }
};

export const authRedirectVerification = (
  ctx: any,
  pathToRedirect1: string,
  pathToRedirect2: string,
) => {
  const { res, store = null } = ctx;

  const user: AuthUserDto = store.getState()[AUTH_STORE_NAME].user;

  if (!user.confirmEmail) {
    if (res) {
      res.writeHead(301, {
        Location: pathToRedirect1,
      });
      return res.end();
    } else {
      return redirect(pathToRedirect1);
    }
  }

  if (!user.confirmPhone) {
    if (res) {
      res.writeHead(301, {
        Location: pathToRedirect2,
      });
      return res.end();
    } else {
      return redirect(pathToRedirect2);
    }
  }
};
