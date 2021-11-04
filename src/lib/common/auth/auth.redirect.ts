import { redirect } from '../../../main/navigation/navigation.core';
import { AuthUserDto } from './auth.type';
import { AUTH_STORE_NAME, USER_ROLE } from './auth.constant';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../../../core/auth-verification-email/auth-verification-email.constant';
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../../../core/auth-verification-phone/auth-verification-phone.constant';

export const authRedirectLogged = (ctx: any, pathToRedirect: string) => {
  const { res, store } = ctx;

  const user = store.getState()[AUTH_STORE_NAME];

  if (user.logged) {
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
  const { res, store } = ctx;

  const user = store.getState()[AUTH_STORE_NAME];

  if (!user.logged) {
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

export const authRedirectVerification = (ctx: any) => {
  const { res, store = null } = ctx;

  const user: AuthUserDto = store.getState()[AUTH_STORE_NAME].user;

  if (user) {
    if (!user.confirmEmail) {
      if (res) {
        res.writeHead(301, {
          Location: AUTH_VERIFICATION_EMAIL_ROUTE_PATH,
        });
        return res.end();
      } else {
        return redirect(AUTH_VERIFICATION_EMAIL_ROUTE_PATH);
      }
    }

    if (!user.confirmPhone) {
      if (res) {
        res.writeHead(301, {
          Location: AUTH_VERIFICATION_PHONE_ROUTE_PATH,
        });
        return res.end();
      } else {
        return redirect(AUTH_VERIFICATION_PHONE_ROUTE_PATH);
      }
    }
  }
};

export const authRedirectNotAdmin = (ctx: any, pathToRedirect: string) => {
  const { res, store } = ctx;

  const user = store.getState()[AUTH_STORE_NAME].user;
  if (user) {
    if (user.role !== USER_ROLE.ADMIN) {
      if (res) {
        res.writeHead(301, {
          Location: pathToRedirect,
        });
        res.end();
      } else {
        redirect(pathToRedirect);
      }
    }
  }
};

export const authRedirectAdmin = (ctx: any, pathToRedirect: string) => {
  const { res, store } = ctx;

  const user = store.getState()[AUTH_STORE_NAME].user;
  if (user) {
    if (user.role === USER_ROLE.ADMIN) {
      if (res) {
        res.writeHead(301, {
          Location: pathToRedirect,
        });
        res.end();
      } else {
        redirect(pathToRedirect);
      }
    }
  }
};
