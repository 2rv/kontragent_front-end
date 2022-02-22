import { COMPANY_ADMIN_IMPORT_FORM_DATA_NAME as FIELD_NAME } from './company-admin-import-form.constant';

export function convertCompanyAdminImportForm(values) {
  return {
    [FIELD_NAME.TYPE]: values[FIELD_NAME.TYPE] || undefined,
    [FIELD_NAME.COMPANIES]: values[FIELD_NAME.COMPANIES].map((value) => ({
      [FIELD_NAME.INN]: value[FIELD_NAME.INN] || undefined,
      [FIELD_NAME.NAME]: value[FIELD_NAME.NAME] || undefined,
      [FIELD_NAME.REVIEW]: value[FIELD_NAME.REVIEW] || undefined,
      [FIELD_NAME.CREATE_DATE]: value[FIELD_NAME.CREATE_DATE] || undefined,
    })),
  };
}
