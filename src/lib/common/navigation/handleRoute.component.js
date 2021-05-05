import React, { useEffect } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { NAVIGATION_STORE_NAME } from './navigation.constant';
import { setPageLoading } from './navigation.action';

export const HandlerRoute = () => {
  const dispatch = useDispatch();
  const { pageLoading } = useSelector((state) => state[NAVIGATION_STORE_NAME]);

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
