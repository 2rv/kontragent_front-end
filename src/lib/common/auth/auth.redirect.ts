import { redirect } from '../../../main/navigation/navigation.core';
import { AuthUserDto } from './auth.type';
import { AUTH_STORE_NAME, USER_ROLE } from './auth.constant';

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

export const authRedirectRole = (
  ctx: any,
  pathToRedirect1: string,
  pathToRedirect2: string,
) => {
  const { res, store } = ctx;

  const user = store.getState()[AUTH_STORE_NAME].user;

  if (user) {
    if (user.role === USER_ROLE.USER) {
      if (res) {
        res.writeHead(301, {
          Location: pathToRedirect1,
        });
        res.end();
      } else {
        redirect(pathToRedirect1);
      }
    }

    if (user.role === USER_ROLE.ADMIN) {
      if (res) {
        res.writeHead(301, {
          Location: pathToRedirect2,
        });
        res.end();
      } else {
        redirect(pathToRedirect2);
      }
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

export const authRedirectVerification = (
  ctx: any,
  pathToRedirect1: string,
  pathToRedirect2: string,
) => {
  const { res, store = null } = ctx;

  const user: AuthUserDto = store.getState()[AUTH_STORE_NAME].user;

  if (user) {
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
  }
};

export const authRedirectNotAdmin = (ctx: any, pathToRedirect: string) => {
  const { res, store } = ctx;

  const userStore = store.getState()[AUTH_STORE_NAME];

  if (userStore.user.role !== USER_ROLE.ADMIN) {
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

export const authRedirectAdmin = (ctx: any, pathToRedirect: string) => {
  const { res, store } = ctx;

  const userStore = store.getState()[AUTH_STORE_NAME];

  if (userStore.user.role === USER_ROLE.ADMIN) {
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
