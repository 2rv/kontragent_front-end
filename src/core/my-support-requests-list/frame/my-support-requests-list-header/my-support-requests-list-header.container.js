import { MySupportRequestsHeaderComponent } from './my-support-requests-list-header.component';

export function MySupportRequestsHeaderContainer(props) {
  const { isPending, pageLoading, isError, isSuccess, errorMessage } = props;
  return (
    <MySupportRequestsHeaderComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
    />
  );
}
