import readXlsxFile from 'read-excel-file';
import { httpRequest } from '../../main/http';
import {
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE,
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_SCHEMA,
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_API,
} from './company-account-item-kontragent-import.constant';

export function importCompanyAccountItemKontragentImport(file) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.IMPORT_FORM_PENDING,
    });

    try {
      const data = await readXlsxFile(file, {
        schema: COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_SCHEMA,
      });
      dispatch({
        type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.IMPORT_FORM_SUCCESS,
        data: { list: data.rows },
      });
    } catch (error) {
      if (error) {
        console.log(error);
        dispatch({
          type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.IMPORT_FORM_ERROR,
          errorMessage: error,
        });
      }
    }
  };
}

export function uploadCompanyAccountItemKontragentImportCreateForm(
  companyId,
  data,
) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.FORM_PENDING,
    });

    try {
      await httpRequest({
        method:
          COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_API.SAVE_KONTRAGENT_DATA.TYPE,
        url: COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_API.SAVE_KONTRAGENT_DATA.ENDPOINT(
          companyId,
        ),
        data: { kontragents: data },
      });
      dispatch({
        type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.FORM_SUCCESS,
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function updateListCompanyAccountItemKontragentImport(data) {
  return async (dispatch) => {
    dispatch({
      type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.IMPORT_FORM_UPDATE_PENDING,
    });

    try {
      dispatch({
        type: COMPANY_ACCOUNT_ITEM_KONTRAGENT_IMPORT_ACTION_TYPE.IMPORT_FORM_UPDATE_SUCCESS,
        data: { list: data },
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };
}

// async function importKontragentsAction(data) {
//   setState({ type: 'PENDING' });
//   try {
//     await httpRequest({
//       method: 'POST',
//       url: '/kontragent/import/' + companyId,
//       data: { kontragents: data },
//     });
//     setState({ type: 'SUCCESS' });
//   } catch (error) {
//     console.log(error);
//     if (error.response) {
//       setState({ type: 'ERROR', error: error.response.data.message });
//     }
//   }
// }
