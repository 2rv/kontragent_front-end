import { COMPANY_SETTINGS_FIELD_NAME } from './settings.type';

import { validate } from '../../../../main/validate';
import { required } from '../../../../main/validate/validate.service';

const config = {
  [COMPANY_SETTINGS_FIELD_NAME.NAME]: [required],
  [COMPANY_SETTINGS_FIELD_NAME.ENTITY]: [required],
  [COMPANY_SETTINGS_FIELD_NAME.OWNER]: [required],
  [COMPANY_SETTINGS_FIELD_NAME.ORGANIZATION]: [required],
};

export const companySettingsFormValidation = (values) =>
  validate(values, config);
