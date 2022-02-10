import { httpRequest } from '../../main/http';
import { COMPANY_ADMIN_IMPORT_FORM_ACTION_TYPE as ACTION_TYPE } from './company-admin-import-form.constant';

export function uploadCompanyAdminImportFormAction(data) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.FORM_PENDING,
    });
    try {
      await httpRequest({
        method: 'POST',
        url: '/company/admin/import',
        data: data,
      });

      dispatch({
        type: ACTION_TYPE.FORM_SUCCESS,
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
