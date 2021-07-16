import styled from 'styled-components';
import {
  MySupportRequestsListHeaderComponent,
  SupportRequestsListContainer,
} from './frame';
import { spacing } from '../../lib/theme';
import { SectionLayout } from '../../lib/elements/layout';

export function MySupportRequestsListComponent(props) {
  const {
    mySupportRequestsListData,
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
  } = props;
  return (
    <Container>
      <MySupportRequestsListHeaderComponent />
      <SupportRequestsListContainer
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        pageLoading={pageLoading}
        errorMessage={errorMessage}
        mySupportRequestsListData={mySupportRequestsListData}
      />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
`;
