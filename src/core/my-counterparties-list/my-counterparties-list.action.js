import { httpRequest } from '../../main/http';

import { MY_COUNTERPARTIES_LIST_ACTION_TYPE } from './my-counterparties-list.type';
import { MY_COUNTERPARTIES_LIST_API } from './my-counterparties-list.constant';

export function myCounterpartiesUploadData() {
  return async (dispatch) => {
    dispatch({
      type: MY_COUNTERPARTIES_LIST_ACTION_TYPE.MY_COUNTERPARTIES_LIST_REQUEST_UPLOAD_DATA_PENDING,
    });

    try {
      const res = await httpRequest({
        method:
          MY_COUNTERPARTIES_LIST_API.MY_COUNTERPARTIES_LIST_UPLOAD_DATA.TYPE,
        url: MY_COUNTERPARTIES_LIST_API.MY_COUNTERPARTIES_LIST_UPLOAD_DATA
          .ENDPOINT,
      });

      dispatch({
        type: MY_COUNTERPARTIES_LIST_ACTION_TYPE.MY_COUNTERPARTIES_LIST_REQUEST_UPLOAD_DATA_SUCCESS,
        action: res.data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_COUNTERPARTIES_LIST_ACTION_TYPE.MY_COUNTERPARTIES_LIST_REQUEST_UPLOAD_DATA_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
