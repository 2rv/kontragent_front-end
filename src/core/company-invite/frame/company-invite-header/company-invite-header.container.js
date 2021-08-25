import { CompanyInviteHeaderComponent } from './company-invite-header.component';

export function CompanyInviteHeaderContainer(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    companyInviteSelectOption,
  } = props;
  return (
    <CompanyInviteHeaderComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      companyInviteSelectOption={companyInviteSelectOption}
    />
  );
}
