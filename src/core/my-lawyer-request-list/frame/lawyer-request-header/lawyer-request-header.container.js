import { LawyerRequestHeaderComponent } from './lawyer-request-header.component';

export function LawyerRequestHeaderContainer(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myLawyerRequestListSelectOption,
  } = props;
  return (
    <LawyerRequestHeaderComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      myLawyerRequestListSelectOption={myLawyerRequestListSelectOption}
    />
  );
}
