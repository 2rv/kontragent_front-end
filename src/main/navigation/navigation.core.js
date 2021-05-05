import Router from 'next/router';

const scrollToTop = (isScrollToTop) => {
  if (isScrollToTop) {
    window.scrollTo(0, 0);
  }
};

export const redirect = (pathname, config = {}) => {
  const {
    local = true,
    query,
    as = pathname,
    params,
    scrollTop = true,
    shallow,
  } = config;

  if (params) {
    return Router.push(pathname(), pathname(params), {
      shallow,
      query,
    }).then(() => scrollToTop(scrollTop));
  }

  if (local) {
    return Router.push({ pathname, as, query, shallow }).then(() =>
      scrollToTop(scrollTop),
    );
  }

  window.location.href = pathname;
};

export const setLinkRedirect = (path, confirg) => (e) => {
  e.preventDefault();
  redirect(path, confirg);
};

export const getQuery = (id) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const data = Router.query[id];

  if (!data) return null;
  if (data === 'true') return true;
  if (data === 'false') return false;

  return data;
};

export const scrollTo = (elementId, offset = 0) => {
  if (elementId) {
    return window.scrollBy({
      top:
        document.getElementById(elementId).offsetTop -
        document.documentElement.scrollTop -
        offset,
      behavior: 'smooth',
    });
  }
  return null;
};

// export const getActiveNavigationLink = (items, activePath) => {
//   if (!activePath) {
//     return [];
//   }

//   const activeLinks = items.filter(({ path }) => {
//     path = typeof path === 'function' ? path() : path;
//     const isActivePathMatching = path === activePath;
//     const isActivePathIncludes = activePath.includes(path);
//     const isActivePathLast =
//       activePath.split('/')[activePath.split('/').length - 1] === path.slice(1);

//     return isActivePathMatching || (isActivePathIncludes && !isActivePathLast);
//   });

//   return activeLinks[activeLinks.length - 1];
// };
