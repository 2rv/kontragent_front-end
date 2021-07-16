import { SupportRequestsListComponent } from './support-requests-list.component';

export function SupportRequestsListContainer(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    mySupportRequestsListData,
  } = props;
  return (
    <SupportRequestsListComponent
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      pageLoading={pageLoading}
      errorMessage={errorMessage}
      mySupportRequestsListData={mySupportRequestsListData}
    />
  );
}
