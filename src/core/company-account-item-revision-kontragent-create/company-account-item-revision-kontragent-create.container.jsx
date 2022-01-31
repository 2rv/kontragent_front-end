import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { CompanyAccountItemRevisionKontragentCreateFormValidation } from './company-account-item-revision-kontragent-create.validation';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME } from './company-account-item-revision-kontragent-create.constant';
import { CompanyAccountItemRevisionKontragentCreateComponent } from './company-account-item-revision-kontragent-create.component';

export function CompanyAccountItemRevisionKontragentCreateContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const getInitialValue = () => {
    return {
      [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.KONTRAGENTS]: [
        initialKontragent,
      ],
    };
  };
  const initialYear = {
    [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.YEAR]: '',
    [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.FIRST_PERIOD]: true,
    [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.SECOND_PERIOD]: true,
    [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.THIRD_PERIOD]: true,
    [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.FOURTH_PERIOD]: true,
  };
  const initialKontragent = {
    [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.INN]: '',
    [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.TITLE]: '',
    [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.DESCRIPTION]: '',
    [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.FILE_ID_LIST]:
      [],
    [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.YEARS]: [
      initialYear,
    ],
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
    <CompanyAccountItemRevisionKontragentCreateComponent
      pageLoading={pageLoading}
      // isPending={isRequestPending(state.form)}
      // isSuccess={isRequestSuccess(state.form)}
      // isError={isRequestError(state.form)}
      // errorMessage={getRequestErrorMessage(state.form)}
      initialValue={getInitialValue()}
      validation={CompanyAccountItemRevisionKontragentCreateFormValidation}
      onSubmitForm={onSubmitForm}
      initialYear={initialYear}
      initialKontragent={initialKontragent}
    />
  );
}
