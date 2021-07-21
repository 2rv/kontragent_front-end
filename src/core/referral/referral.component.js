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
      <Container>
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
      </Container>
    </>
  );
}
const Content = styled.div`
  padding: 0 ${spacing(5)};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
`;
const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow: auto;
  gap: ${spacing(8)};
  padding: ${spacing(8)};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  background: linear-gradient(
    0deg,
    ${THEME_COLOR.COLOR.ACCENT} 55%,
    ${THEME_COLOR.COLOR.SECONDARY} 55%
  );
`;
