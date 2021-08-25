import { CounterpartiesListComponent } from './counterparties-list.component';

export function CounterpartiesListContainer(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myCounterpartiesListData,
  } = props;
  return (
    <CounterpartiesListComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      myCounterpartiesListData={myCounterpartiesListData}
    />
  );
}
