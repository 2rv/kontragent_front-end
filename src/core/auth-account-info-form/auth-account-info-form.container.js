import React from 'react';

import { AuthAccoutInfoFormConmponent } from './auth-account-info-form.component';

export function AuthAccountInfoForm() {
  const AuthAccountInfoFormGetInitialValue = () => {
    return {
      FULLNAME: '',
    };
  };

  return (
    <AuthAccoutInfoFormConmponent
      initialValue={AuthAccountInfoFormGetInitialValue()}
      pageLoading={true}
      isPending={true}
      isError={true}
      isSuccess={false}
      errorMessage={null}
    />
  );
}
