import { SettingsPhoneComponent } from './settings-phone.component';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  SETTINGS_PHONE_FIELD_NAME,
  SETTINGS_FORM_CHANGE_PHONE_FIELD_NAME,
} from './settings-phone.type';
import {
  settingsPhoneGetPhone,
  settingsFormChangePhoneUploadForm,
} from './settings-phone.action';
import {
  isRequestPending,
  isRequestSuccess,
  isRequestError,
  getRequestData,
  getRequestErrorMessage,
} from '../../main/store/store.service';
import { SETTINGS_PHONE_STORE_NAME } from './settings-phone.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { SETTINGS_PHONE_DATA_NAME } from './settings-phone.type';
import { convertSettingsFormChangePhoneData } from './settings-phone.convert';
import { settingsFormChangePhoneValidation } from './settings-phone.validation';

export function SettingsPhoneContainer() {
  const dispatch = useDispatch();
  const { settingsPhoneState, pageLoading, settingsChangePhoneState } =
    useSelector((state) => ({
      settingsPhoneState: state[SETTINGS_PHONE_STORE_NAME].settingsPhone,
      settingsChangePhoneState:
        state[SETTINGS_PHONE_STORE_NAME].settingsChangePhone,
      pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    }));

  const getInitialValue = () => {
    return {
      [SETTINGS_PHONE_FIELD_NAME.PHONE_NUMBER]:
        settingsPhoneState.data?.[SETTINGS_PHONE_DATA_NAME.PHONE] || '',
      [SETTINGS_PHONE_FIELD_NAME.PASSWORD]: '',
    };
  };

  const settingsFormChangePhoneSendData = (values, resetForm) => {
    const data = convertSettingsFormChangePhoneData(values);
    dispatch(settingsFormChangePhoneUploadForm(data, resetForm));
  };

  useEffect(() => {
    // dispatch(settingsPhoneGetPhone());
  }, []);

  return (
    <SettingsPhoneComponent
      enableReinitialize={true}
      validation={settingsFormChangePhoneValidation}
      onSubmitForm={settingsFormChangePhoneSendData}
      initialValue={getInitialValue()}
      settingsPhoneFieldName={SETTINGS_FORM_CHANGE_PHONE_FIELD_NAME}
      pageLoading={pageLoading}
      FormPending={isRequestPending(settingsChangePhoneState)}
      FormError={isRequestError(settingsChangePhoneState)}
      FormSuccess={isRequestSuccess(settingsChangePhoneState)}
      FormErrorMessage={getRequestErrorMessage(settingsChangePhoneState)}
      dataPending={isRequestPending(settingsPhoneState)}
      dataError={isRequestError(settingsPhoneState)}
      dataErrorMessage={getRequestErrorMessage(settingsPhoneState)}
    />
  );
}
