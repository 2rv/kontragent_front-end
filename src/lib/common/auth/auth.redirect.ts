import { redirect } from '../../../main/navigation/navigation.core';
import { AUTH_STORE_NAME, USER_ROLE } from './auth.constant';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../../../core/auth-verification-email/auth-verification-email.constant';
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../../../core/auth-verification-phone/auth-verification-phone.constant';

export const authRedirectLogged = (ctx: any, pathToRedirect: string) => {
  const { res, store } = ctx;

  const authStore = store.getState()[AUTH_STORE_NAME];

  if (authStore.logged) {
    if (res) {
      res.writeHead(302, {
        Location: pathToRedirect,
      });
      res.end();
    } else {
      redirect(pathToRedirect);
    }
    return true;
  }
  return false;
};

export const authVerificated = (ctx: any, pathToRedirect: string) => {
  const { res, store } = ctx;

  const authStore = store.getState()[AUTH_STORE_NAME];

  if (authStore.user.confirmPhone) {
    if (res) {
      res.writeHead(302, {
        Location: pathToRedirect,
      });
      res.end();
    } else {
      redirect(pathToRedirect);
    }
    return true;
  }
  return false;
};

export const authRedirectPrivated = (ctx: any, pathToRedirect: string) => {
  const { res, store } = ctx;
  
  const authStore = store.getState()[AUTH_STORE_NAME];
  
  if (!authStore.logged) {
    if (res) {
      res.writeHead(301, {
        Location: pathToRedirect,
      });
      res.end();
    } else {
      redirect(pathToRedirect);
    }
    return true;
  }
  return false;
};

export const authRedirectVerification = (ctx: any) => {
  const { res, store = null } = ctx;

  const authStore = store.getState()[AUTH_STORE_NAME];

  if (authStore.logged) {
    if (!authStore.user.confirmEmail) {
      if (res) {
        res.writeHead(301, {
          Location: AUTH_VERIFICATION_EMAIL_ROUTE_PATH,
        });
        res.end();
      } else {
        redirect(AUTH_VERIFICATION_EMAIL_ROUTE_PATH);
      }
      return true;
    }

    if (!authStore.user.confirmPhone) {
      if (res) {
        res.writeHead(301, {
          Location: AUTH_VERIFICATION_PHONE_ROUTE_PATH,
        });
        res.end();
      } else {
        redirect(AUTH_VERIFICATION_PHONE_ROUTE_PATH);
      }
      return true;
    }
  }
  return false;
};

export const authRedirectNotAdmin = (ctx: any, pathToRedirect: string) => {
  const { res, store } = ctx;

  const authStore = store.getState()[AUTH_STORE_NAME];

  if (authStore.logged) {
    if (authStore.user.role !== USER_ROLE.ADMIN) {
      if (res) {
        res.writeHead(301, {
          Location: pathToRedirect,
        });
        res.end();
      } else {
        redirect(pathToRedirect);
      }
      return true;
    }
  }
  return false;
};

export const authRedirectAdmin = (ctx: any, pathToRedirect: string) => {
  const { res, store } = ctx;

  const authStore = store.getState()[AUTH_STORE_NAME];
  if (authStore.logged) {
    if (authStore.user.role === USER_ROLE.ADMIN) {
      if (res) {
        res.writeHead(301, {
          Location: pathToRedirect,
        });
        res.end();
      } else {
        redirect(pathToRedirect);
      }
      return true;
    }
  }
  return false;
};
