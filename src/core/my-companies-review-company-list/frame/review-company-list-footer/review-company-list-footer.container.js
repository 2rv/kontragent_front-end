import { ReviewCompanyListFooterComponent } from './review-company-list-footer.component';
export function ReviewCompanyListFooterContainer(props) {
  const { isPending, pageLoading, isError, isSuccess, errorMessage } = props;
  return (
    <ReviewCompanyListFooterComponent
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      pageLoading={pageLoading}
      errorMessage={errorMessage}
    />
  );
}
