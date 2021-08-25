import { CompanyInviteListComponent } from './company-invite-list.component';

export function CompanyInviteListContainer(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    companyInviteListData,
  } = props;
  return (
    <CompanyInviteListComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      companyInviteListData={companyInviteListData}
    />
  );
}
