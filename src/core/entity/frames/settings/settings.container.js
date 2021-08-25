import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../../../main/store/store.service';
// import { settingsLoad } from './settings.action';
import { companySettingsFormValidation } from './settings.validation';
import { ENTITY_SETTINGS_STORE_NAME } from './settings.constant';
import { SettingsComponent } from './settings.component';
import {
  COMPANY_SETTINGS_FIELD_NAME,
  COMPANY_SETTINGS_FORM_FIELD_NAME,
} from './settings.type';

export function SettingsContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ENTITY_SETTINGS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   React.useEffect(() => {
  //     dispatch(settingsLoad());
  //   }, []);

  const companySettingsFormSendData = (values) => {
    console.log('Values', values);
  };

  const companySettingsFormGetInitialValue = () => ({
    [COMPANY_SETTINGS_FIELD_NAME.QUESTION_CATEGORY]: '',
    [COMPANY_SETTINGS_FIELD_NAME.YOUR_QUESTION]: '',
    [COMPANY_SETTINGS_FIELD_NAME.PROBLEM_DESCRIPTION]: '',
    [COMPANY_SETTINGS_FIELD_NAME.PROBLEM_DESCRIPTION]: '',
  });

  return (
    <SettingsComponent
      isPending={isRequestPending(state.settings)}
      isError={isRequestError(state.settings)}
      isSuccess={isRequestSuccess(state.settings)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.settings)}
      onSubmit={companySettingsFormSendData}
      initialValue={companySettingsFormGetInitialValue()}
      validation={companySettingsFormValidation}
      fieldName={COMPANY_SETTINGS_FORM_FIELD_NAME}
    />
  );
}
