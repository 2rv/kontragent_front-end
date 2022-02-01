import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import { CompanyAccountItemRevisionSelfCreateComponent } from './company-account-item-revision-self-create.component';
import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME } from './company-account-item-revision-self-create.constant';
import { companyAccountItemRevisionSelfCreateFormValidation } from './company-account-item-revision-self-create.validation';

export function CompanyAccountItemRevisionSelfCreateContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const getInitialValue = () => {
    return {
      [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.DESCRIPTION]: '',
      [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FILE_ID_LIST]: [],
      [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEARS]: [
        initialYear,
      ],
    };
  };
  const initialYear = {
    [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEAR]: '',
    [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FIRST_PERIOD]: true,
    [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.SECOND_PERIOD]: true,
    [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.THIRD_PERIOD]: true,
    [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FOURTH_PERIOD]: true,
  };

  useEffect(() => {
    // dispatch(resetPromocodeAdminCreateForm());
  }, []);

  const onSubmitForm = (values) => {
    console.log(values);
    // getQuery('companyId');
    // const data = convertCompanyAccountItemRevisionSelfCreateFormData(
    //   state.company,
    // );
    // await uploadCompanyAccountItemRevisionSelfCreateForm(data);
  };

  return (
    <CompanyAccountItemRevisionSelfCreateComponent
      pageLoading={pageLoading}
      // isPending={isRequestPending(state.form)}
      // isSuccess={isRequestSuccess(state.form)}
      // isError={isRequestError(state.form)}
      // errorMessage={getRequestErrorMessage(state.form)}
      initialValue={getInitialValue()}
      validation={companyAccountItemRevisionSelfCreateFormValidation}
      onSubmitForm={onSubmitForm}
      initialYear={initialYear}
    />
  );
}
