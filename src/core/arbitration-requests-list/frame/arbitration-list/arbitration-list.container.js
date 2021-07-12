import { ArbitrationListComponent } from './arbitration-list.component';

export function ArbitrationListContainer(props) {
  const {
    arbitrationListData,
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
  } = props;
  return (
    <ArbitrationListComponent
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      pageLoading={pageLoading}
      errorMessage={errorMessage}
      arbitrationListData={arbitrationListData}
    />
  );
}
