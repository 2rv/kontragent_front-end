import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import {
  ReferralDashboardComponent,
  ReferralListContainer,
  ReferralFindFormContainer,
  ReferralHeaderComponent,
} from './frame';
import { PrimaryLoader } from '../../lib/elements/loader';

export function ReferralComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    referralList,
  } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Background />
      <Content>
        <ReferralHeaderComponent />
        <ReferralDashboardComponent
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
        />
        <ReferralListContainer
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          referralList={referralList}
        />
        <ReferralFindFormContainer
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
        />
      </Content>
    </>
  );
}
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing(8)};
`;
const Background = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background-color: ${THEME_COLOR.COLOR.ACCENT};
`;
