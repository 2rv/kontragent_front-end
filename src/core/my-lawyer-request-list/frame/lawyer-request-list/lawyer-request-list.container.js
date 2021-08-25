import { LawyerRequestListComponent } from './lawyer-request-list.component';

export function LawyerRequestListContainer(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    myLawyerRequestListData,
  } = props;
  return (
    <LawyerRequestListComponent
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      pageLoading={pageLoading}
      errorMessage={errorMessage}
      myLawyerRequestListData={myLawyerRequestListData}
    />
  );
}
