import { httpRequest } from 'src/main/http';
import { COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_ACTION_TYPE } from './company-account-kontragent-info-data.constant';
import { performCompanyData } from './company-account-kontragent-info-data.convert';

export function getKontragentDataAction(companyId, kontragentId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_ACTION_TYPE.REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `/company-data/kontragent/info/${companyId}/${kontragentId}`,
      });

      dispatch({
        type: COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_ACTION_TYPE.REQUEST_SUCCESS,
        data: performCompanyData(res.data),
      });
    } catch (error) {
      console.log(error);
      if (error.response) {
        dispatch({
          type: COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_ACTION_TYPE.REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
