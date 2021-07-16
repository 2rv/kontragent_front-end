import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import {
  CounterpartiesListContainer,
  CounterpartiesHeaderContainer,
} from './frame';
import { PrimaryLoader } from '../../lib/elements/loader';

export function MyCounterpartiesListComponent(props) {
  const {
    myCounterpartiesSortOption,
    myCounterpartiesListData,
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
  } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <CounterpartiesHeaderContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          myCounterpartiesSortOption={myCounterpartiesSortOption}
        />
        <CounterpartiesListContainer
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          pageLoading={pageLoading}
          errorMessage={errorMessage}
          myCounterpartiesListData={myCounterpartiesListData}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
`;
