import readXlsxFile from 'read-excel-file';
import { httpRequest } from '../../main/http';
import {
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_XLSX_ACTION_TYPE as ACTION_TYPE,
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_XLSX_API as API,
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_XLSX_SCHEMA,
} from './company-account-item-kontragent-import-xlsx.constant';

export function importCompanyAccountItemKontragentImportXlsx(file) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.XLSX_PENDING,
    });

    try {
      const data = await readXlsxFile(file, {
        schema: COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_XLSX_SCHEMA,
      });

      dispatch({
        type: ACTION_TYPE.XLSX_SUCCESS,
        data: { list: data.rows },
      });
    } catch (error) {
      if (error) {
        console.log(error);
        dispatch({
          type: ACTION_TYPE.XLSX_ERROR,
          errorMessage: error,
        });
      }
    }
  };
}

export function updateListCompanyAccountItemKontragentImportXlsx(
  list,
  newItem,
) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.XLSX_UPDATE_PENDING,
    });

    try {
      const result = list.map((item, index) => {
        if (index === newItem.index) return newItem;
        return item;
      });

      dispatch({
        type: ACTION_TYPE.XLSX_UPDATE_SUCCESS,
        data: { list: result },
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };
}

export function deleteListCompanyAccountItemKontragentImportXlsx(list, index) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.XLSX_UPDATE_PENDING,
    });

    try {
      const result = list.filter((_, i) => i !== index);

      dispatch({
        type: ACTION_TYPE.XLSX_UPDATE_SUCCESS,
        data: { list: result },
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };
}

export function uploadCompanyAccountItemKontragentImportXlsxCreateForm(
  companyId,
  data,
) {
  return async (dispatch, reloadList) => {
    dispatch({
      type: ACTION_TYPE.FORM_PENDING,
    });

    try {
      await httpRequest({
        method: API.SAVE_KONTRAGENT_DATA.TYPE,
        url: API.SAVE_KONTRAGENT_DATA.ENDPOINT(companyId),
        data: { kontragents: data },
      });
      dispatch({
        type: ACTION_TYPE.FORM_SUCCESS,
      });
      if (reloadList) {
        await reloadList();
      }
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
