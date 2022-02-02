import { httpRequest } from 'src/main/http';
import { COMPANY_ACCOUNT_INFO_DATA_ACTION_TYPE } from './company-account-info-data.constant';
import { performCompanyData } from './company-account-info-data.convert';

export function getCompanyDataAction(inn) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_INFO_DATA_ACTION_TYPE.REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `/company-data/get/${inn}`,
      });

      dispatch({
        type: COMPANY_ACCOUNT_INFO_DATA_ACTION_TYPE.REQUEST_SUCCESS,
        data: performCompanyData(res.data),
      });
    } catch (error) {
      console.log(error);
      if (error.response) {
        dispatch({
          type: COMPANY_ACCOUNT_INFO_DATA_ACTION_TYPE.REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function getEgrDetailsAction(inn) {
  return async (dispatch) => {
    try {
      const response = await httpRequest({
        method: 'GET',
        url: `/company-data/excerpt/${inn}`,
        responseType: 'arraybuffer',
      });
      let blob = new Blob([response.data], { type: 'application/pdf' }),
        url = window.URL.createObjectURL(blob);
      window.open(url);
    } catch (error) {
      console.log(error);
    }
  };
}

export function getExpressPdfAction(inn) {
  return async (dispatch) => {
    try {
      const response = await httpRequest({
        method: 'GET',
        url: `/company-data/brief-report-pdf/${inn}`,
        responseType: 'arraybuffer',
      });
      let blob = new Blob([response.data], { type: 'application/pdf' }),
        url = window.URL.createObjectURL(blob);
      window.open(url);
    } catch (error) {
      console.log(error);
    }
  };
}
