import { httpRequest } from '../../main/http';

import { MY_LEGAL_ENTITIES_LIST_ACTION_TYPE } from './my-legal-entities-list.type';
import { MY_LEGAL_ENTITIES_LIST_API } from './my-legal-entities-list.constant';

export function myLegalEntitiesListUploadData() {
  return async (dispatch) => {
    dispatch({
      type: MY_LEGAL_ENTITIES_LIST_ACTION_TYPE.MY_LEGAL_ENTITIES_LIST_REQUEST_UPLOAD_DATA_PENDING,
    });

    try {
      const res = await httpRequest({
        method:
          MY_LEGAL_ENTITIES_LIST_API.MY_LEGAL_ENTITIES_LIST_UPLOAD_DATA.TYPE,
        url: MY_LEGAL_ENTITIES_LIST_API.MY_LEGAL_ENTITIES_LIST_UPLOAD_DATA
          .ENDPOINT,
      });

      dispatch({
        type: MY_LEGAL_ENTITIES_LIST_ACTION_TYPE.MY_LEGAL_ENTITIES_LIST_REQUEST_UPLOAD_DATA_SUCCESS,
        action: res.data,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: MY_LEGAL_ENTITIES_LIST_ACTION_TYPE.MY_LEGAL_ENTITIES_LIST_REQUEST_UPLOAD_DATA_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
