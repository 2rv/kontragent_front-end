import { AccountInfoFormContainer } from './frame/account-info-form';
import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { AccountInfoFooterContainer } from './frame/account-info-footer';
import { AccountInfoHeaderContainer } from './frame/account-info-header';
export function AuthAccoutInfoFormConmponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    initialValue,
    accountInfoFormFieldName,
  } = props;

  return (
    <PrimaryBox>
      <IndentLayout>
        <SectionLayout>
          <AccountInfoHeaderContainer />
          <AccountInfoFormContainer
            initialValue={initialValue}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            pageLoading={pageLoading}
            accountInfoFormFieldName={accountInfoFormFieldName}
          />
          <AccountInfoFooterContainer />
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
