import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import {
  FeedAndNotificationsHeaderContainer,
  NotificationsListContainer,
} from './frame';
import { PrimaryLoader } from '../../lib/elements/loader';

export function FeedAndNotificationsListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    feedAndNotificationsListData,
    feedAndNotificationsSelectOption,
  } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <FeedAndNotificationsHeaderContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          feedAndNotificationsSelectOption={feedAndNotificationsSelectOption}
        />
        <NotificationsListContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          feedAndNotificationsListData={feedAndNotificationsListData}
        />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  gap: ${spacing(4)};
  flex: 1;
  flex-flow: column;
`;
