import React, { useEffect } from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';

import { setPageLoading } from './navigation.action';

export const NavigationObserver = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageLoading(false));

    Router.events.on('routeChangeStart', () => {
      dispatch(setPageLoading(true));
    });
    Router.events.on('routeChangeComplete', () => {
      dispatch(setPageLoading(false));
    });
    Router.events.on('routeChangeError', () => {
      dispatch(setPageLoading(false));
    });
  }, []);

  return <React.Fragment></React.Fragment>;
};
