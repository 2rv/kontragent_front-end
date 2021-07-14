import { httpRequest } from '../../main/http';

import { MY_COMPANIES_ADD_COMPANY_ACTION_TYPE } from './my-companies-add-company.type';
import { MY_COMPANIES_ADD_COMPANY_API } from './my-companies-add-company.constant';

export function addCompanyFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: MY_COMPANIES_ADD_COMPANY_ACTION_TYPE.ADD_COMPANY_FORM_UPLOAD_PENDING,
    });

    try {
      await httpRequest({
        method: MY_COMPANIES_ADD_COMPANY_API.ADD_COMPANY_FORM_UPLOAD.TYPE,
        url: MY_COMPANIES_ADD_COMPANY_API.ADD_COMPANY_FORM_UPLOAD.ENDPOINT,
        data,
      });

      dispatch({
        type: MY_COMPANIES_ADD_COMPANY_ACTION_TYPE.ADD_COMPANY_FORM_UPLOAD_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_COMPANIES_ADD_COMPANY_ACTION_TYPE.ADD_COMPANY_FORM_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
