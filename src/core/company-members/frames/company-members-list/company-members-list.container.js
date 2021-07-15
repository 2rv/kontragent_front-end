import { CompanyMembersListComponent } from './company-members-list.component';

export function CompanyMembersListContainer(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    companyMembersListData,
  } = props;
  return (
    <CompanyMembersListComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      companyMembersListData={companyMembersListData}
    />
  );
}
