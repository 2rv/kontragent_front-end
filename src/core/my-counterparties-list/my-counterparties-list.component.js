import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { ListHeaderContainer } from './frame/list-header';
import { CounterpartiesListContainer } from './frame';

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
    <Container>
      <ListHeaderContainer
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
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(5)};
`;
