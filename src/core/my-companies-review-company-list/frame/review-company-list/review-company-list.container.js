import { ReviewCompanyListComponent } from './review-company-list.component';
export function ReviewCompanyListContainer(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myCompaniesListData,
  } = props;
  return (
    <ReviewCompanyListComponent
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      pageLoading={pageLoading}
      errorMessage={errorMessage}
      myCompaniesListData={myCompaniesListData}
    />
  );
}
