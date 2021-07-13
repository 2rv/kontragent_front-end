import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeArbitrationListLoad } from './theme-arbitration.action';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { THEME_ARBITRATION_STORE_NAME, THEME_ARBITRATION_COMMENTS_LIST } from './theme-arbitration.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { ThemeArbitrationComponent } from './theme-arbitration.component';

export function ThemeArbitrationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[THEME_ARBITRATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // useEffect(() => {
  //   dispatch(themeArbitrationListLoad());
  // }, []);

  return (
    <ThemeArbitrationComponent
      isPending={isRequestPending(state.themeArbitration)}
      isError={isRequestError(state.themeArbitration)}
      isSuccess={isRequestSuccess(state.themeArbitration)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.themeArbitration)}
      {...THEME_ARBITRATION_COMMENTS_LIST}
    />
  );
}

