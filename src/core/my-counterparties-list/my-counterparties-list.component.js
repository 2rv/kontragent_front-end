import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import {
  CounterpartiesListContainer,
  CounterpartiesHeaderContainer,
} from './frame';
import { PrimaryLoader } from '../../lib/elements/loader';

export function MyCounterpartiesListComponent(props) {
  const {
    myCounterpartiesSelectOption,
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
          myCounterpartiesSelectOption={myCounterpartiesSelectOption}
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
  width: 100%;
`;
