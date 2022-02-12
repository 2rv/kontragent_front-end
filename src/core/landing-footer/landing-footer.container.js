import { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { LandingLayout } from '../../lib/common/landing';

import { initialState, LandingFooterReducer } from './landing-footer.reducer';
import { getAnalyticsAction } from './landing-footer.action';
import { LandingFooterComponent } from './landing-footer.component';

export function LandingFooterContainer() {
  const [state, setState] = useReducer(LandingFooterReducer, initialState);

  useEffect(() => {
    getAnalyticsAction()(setState);
  }, []);

  return (
    <Layout>
      <LandingFooterComponent
        isPending={isRequestPending(state.request)}
        isSuccess={isRequestSuccess(state.request)}
        isError={isRequestError(state.request)}
        errorMessage={getRequestErrorMessage(state.request)}
        data={getRequestData(state.request)}
      />
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #f3f3f3;
  & > div {
    padding: 50px 32px;
    @media (min-width: 0px) and (max-width: 599px) {
      padding: 50px 24px;
    }
  }
`;
