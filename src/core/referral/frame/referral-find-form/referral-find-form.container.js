import { ReferralFindFormComponent } from './referral-find-form.component';

export function ReferralFindFormContainer(props) {
  const { isPending, pageLoading, isError, isSuccess, errorMessage } = props;
  return (
    <ReferralFindFormComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
    />
  );
}
