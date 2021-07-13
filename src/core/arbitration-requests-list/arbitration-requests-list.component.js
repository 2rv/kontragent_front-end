import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import {
  ArbitrationRequestsListHeaderFilterComponent,
  ArbitrationListContainer,
} from './frame';

export function ArbitrationRequestsListComponent(props) {
  const {
    arbitrationListData,
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
  } = props;
  return (
    <Container>
      <ArbitrationRequestsListHeaderFilterComponent />
      <ArbitrationListContainer
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        pageLoading={pageLoading}
        errorMessage={errorMessage}
        arbitrationListData={arbitrationListData}
      />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
  width: 100%;
`;
