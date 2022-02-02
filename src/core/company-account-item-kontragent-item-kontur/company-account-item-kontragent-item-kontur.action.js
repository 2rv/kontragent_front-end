import { httpRequest } from 'src/main/http';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_KONTUR_ACTION_TYPE } from './company-account-item-kontragent-item-kontur.constant';
import { covertCompanyAccountItemKontragentItemKonturData } from './company-account-item-kontragent-item-kontur.convert';

export function getKontragentDataAction(companyId, kontragentId) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_KONTUR_ACTION_TYPE.REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `/company-data/kontragent/info/${companyId}/${kontragentId}`,
      });

      dispatch({
        type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_KONTUR_ACTION_TYPE.REQUEST_SUCCESS,
        data: covertCompanyAccountItemKontragentItemKonturData(res.data),
      });
    } catch (error) {
      if (error && !error.response) {
        console.log(error);
        dispatch({
          type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_KONTUR_ACTION_TYPE.REQUEST_ERROR,
          errorMessage:
            'Неудалось получить дополнительную информацию по контрагенту',
        });
      }
      if (error.response) {
        dispatch({
          type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_KONTUR_ACTION_TYPE.REQUEST_ERROR,
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
