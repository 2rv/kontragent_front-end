import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { AUTH_STORE_NAME } from '../../lib/common/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { HEADER_STORE_NAME } from './header.constant';
import { headerNotificationLoadData } from './header.action';
import { HeaderComponent } from './header.component';

export function HeaderContainer(props) {
  const { toggleSidebar, toggleSidebarHandler } = props;
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  const { isAuth, notificationState } = useSelector((state) => ({
    isAuth: state[AUTH_STORE_NAME].logged,
    notificationState: state[HEADER_STORE_NAME].notification,
  }));
  useEffect(() => {
    // dispatch(headerNotificationLoadData());
  }, []);
  return (
    <HeaderComponent
      toggleSidebar={toggleSidebar}
      toggleSidebarHandler={toggleSidebarHandler}
      //   isAuth={isAuth} для показа клиенту
      isAuth={pathname !== '/'}
      isMainPage={pathname === '/'}
      isPending={isRequestPending(notificationState)}
      isError={isRequestError(notificationState)}
      isSuccess={isRequestSuccess(notificationState)}
      errorMessage={getRequestErrorMessage(notificationState)}
      notificationListData={notificationState.data}
    />
  );
}
