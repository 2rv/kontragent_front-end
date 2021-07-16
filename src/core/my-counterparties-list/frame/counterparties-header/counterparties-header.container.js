import { CounterpartiesHeaderComponent } from './counterparties-header.component';

export function CounterpartiesHeaderContainer(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myCounterpartiesSortOption,
  } = props;
  return (
    <CounterpartiesHeaderComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      myCounterpartiesSortOption={myCounterpartiesSortOption}
    />
  );
}
