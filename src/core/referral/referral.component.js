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
      </Container>
    </>
  );
}
const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: ${spacing(8)};
  padding-right: ${spacing(2)};
`;
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing(8)};
  min-height: 0;
  flex-grow: 1;
  padding-right: ${spacing(6)};
`;
const Background = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  right: 0px;
  height: 60%;
  background-color: ${THEME_COLOR.COLOR.ACCENT};
`;
