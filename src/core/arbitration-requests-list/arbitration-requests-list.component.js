import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { ArbitrationHeaderContainer, ArbitrationListContainer } from './frame';
import { PrimaryLoader } from '../../lib/elements/loader';

export function ArbitrationRequestsListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    arbitrationListData,
    arbitrationListSelectOption,
  } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <ArbitrationHeaderContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          arbitrationListSelectOption={arbitrationListSelectOption}
        />
        <ArbitrationListContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          arbitrationListData={arbitrationListData}
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
