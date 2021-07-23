import styled from 'styled-components';
import {
  MySupportRequestsHeaderContainer,
  SupportRequestsListContainer,
} from './frame';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/elements/layout';
import { PrimaryLoader } from '../../lib/elements/loader';

export function MySupportRequestsListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    mySupportRequestsListData,
  } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <MySupportRequestsHeaderContainer />
        <SupportRequestsListContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          mySupportRequestsListData={mySupportRequestsListData}
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
